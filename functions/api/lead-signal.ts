type LeadSignalRequest = any;

type LeadSignalEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  MAIL_FROM?: string;
  EMAIL_FROM?: string;
  LEAD_SIGNAL_TO_EMAIL?: string;
  LEAD_SIGNAL_AUDIT_EMAIL?: string;
  HUBSPOT_PRIVATE_APP_TOKEN?: string;
};

const HUBSPOT_BASE = 'https://api.hubapi.com';

const isString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
const createRequestId = () => `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

const parseEmails = (value?: string) =>
  (value ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

const buildQrLeadSummary = (body: LeadSignalRequest, timestampISO: string) => {
  const firstName = body?.contact?.firstName?.trim?.() || '';
  const lastName = body?.contact?.lastName?.trim?.() || '';
  return {
    fullName: `${firstName} ${lastName}`.trim(),
    phone: body?.contact?.phone?.trim?.() || '',
    email: body?.contact?.email?.trim?.() || '',
    address: [
      body?.contact?.address?.street,
      body?.contact?.address?.city,
      body?.contact?.address?.state,
      body?.contact?.address?.zip,
    ].filter(Boolean).join(', '),
    propertyType: body?.contact?.address?.propertyType || '',
    requestedHelp: body?.request?.requestedHelp || '',
    preferredContactMethod: body?.request?.preferredContactMethod || '',
    preferredEstimateDate: body?.request?.preferredEstimateDate || '',
    preferredEstimateTimeSlot: body?.request?.preferredEstimateTimeSlot || '',
    sourceFamily: body?.sourceFamily || '',
    source: body?.source || '',
    campaignFamily: body?.campaignFamily || '',
    whereDidYouSeeUs: body?.whereDidYouSeeUs || '',
    createdAt: body?.submittedAt || timestampISO,
  };
};

const validateRequest = (body: LeadSignalRequest) => {
  if (!body || typeof body !== 'object') return 'Request body must be a JSON object';
  if (!isString(body.event)) return 'event is required';
  if (body.event === 'qr_estimate_requested') {
    const required = [
      body?.contact?.firstName,
      body?.contact?.lastName,
      body?.contact?.phone,
      body?.contact?.email,
      body?.request?.preferredEstimateDate,
      body?.request?.preferredEstimateTimeSlot,
    ];
    if (required.some((value) => !isString(value))) {
      return 'qr_estimate_requested is missing required contact/request fields';
    }
  }
  return null;
};

const eventToStage: Record<string, string> = {
  fit_check_completed: 'Fit Check Completed',
  walkthrough_requested: 'Walkthrough Requested',
  walkthrough_scheduled: 'Walkthrough Scheduled',
  quote_generated: 'Quote Generated',
  agreement_accepted: 'Agreement Accepted',
  install_scheduled: 'Scheduled',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const sendLeadSignalEmail = async (env: LeadSignalEnv, payload: { event: string; timestampISO: string; customerEmail?: string; referenceId?: string; resumeUrl?: string; verifyUrl?: string; route: string; requestId: string; }) => {
  const to = parseEmails(env.LEAD_SIGNAL_TO_EMAIL);
  if (to.length === 0) {
    return { ok: false as const, skipped: true, error: 'notification_not_configured' };
  }

  const from = env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM;
  const apiKey = env.RESEND_API_KEY;
  if (!from || !apiKey) {
    return { ok: false as const, skipped: true, error: 'notification_not_configured' };
  }

  const audit = parseEmails(env.LEAD_SIGNAL_AUDIT_EMAIL);
  const subject = `[WNYHS Lead Signal] ${payload.event}`;
  const text = [
    `requestId: ${payload.requestId}`,
    `Event: ${payload.event}`,
    `Timestamp: ${payload.timestampISO}`,
    `Customer email: ${payload.customerEmail ?? 'Not provided'}`,
    `Reference ID: ${payload.referenceId ?? 'Not provided'}`,
    `Resume link: ${payload.resumeUrl ?? 'Not provided'}`,
    `Verify link: ${payload.verifyUrl ?? 'Not provided'}`,
    `Route: ${payload.route}`,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to,
      bcc: audit.length > 0 ? audit : undefined,
      subject,
      text,
      html: `<pre>${text}</pre>`,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return { ok: false as const, skipped: false, error: errorText || `resend_error_${response.status}` };
  }

  return { ok: true as const };
};

const hubspotRequest = async (env: LeadSignalEnv, method: 'GET' | 'POST' | 'PATCH' | 'PUT', url: string, body?: unknown) => {
  const token = env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!token) return { ok: false, skipped: true, error: 'hubspot_not_configured' };

  const response = await fetch(`${HUBSPOT_BASE}${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) return { ok: false, error: 'hubspot_error', data };
  return { ok: true, data };
};

export const onRequest: PagesFunction<LeadSignalEnv> = async ({ request, env }) => {
  const requestId = createRequestId();
  const fail = (status: number, errorCode: string, userMessage: string) => json({ ok: false, requestId, errorCode, userMessage }, status);

  if (request.method !== 'POST') {
    return fail(405, 'METHOD_NOT_ALLOWED', 'Unsupported request method.');
  }

  let body: LeadSignalRequest;
  try {
    body = (await request.json()) as LeadSignalRequest;
  } catch {
    return fail(400, 'INVALID_JSON', 'We couldn’t submit your request. Please try again.');
  }

  const validationError = validateRequest(body);
  if (validationError) {
    return fail(400, 'INVALID_QR_LEAD_PAYLOAD', 'We couldn’t submit your request. Please check your information and try again.');
  }

  const now = new Date().toISOString();
  const leadSummary = buildQrLeadSummary(body, now);

  const emailResult = await sendLeadSignalEmail(env, {
    event: body.event || 'Lead Signal',
    timestampISO: now,
    customerEmail: body.contact?.email || body.customerEmail,
    referenceId: body.referenceId || body.deal?.quoteRef,
    resumeUrl: body.resumeUrl,
    verifyUrl: body.verifyUrl,
    route: body.route || 'api/lead-signal',
    requestId,
  });

  if (!emailResult.ok && !emailResult.skipped) {
    return fail(502, 'EMAIL_NOTIFICATION_FAILED', 'We couldn’t submit your request. Please try again.');
  }

  const contactPayload = {
    email: body.contact?.email,
    firstname: body.contact?.firstName,
    lastname: body.contact?.lastName,
    phone: body.contact?.phone,
    address: body.contact?.address,
    wny_walkthrough_interest: body.event === 'walkthrough_requested' ? true : undefined,
    wny_last_walkthrough_request_at: body.event === 'walkthrough_requested' ? now : undefined,
    wny_preferred_walkthrough_window: body.walkthrough?.preferredTimeWindow1,
  };
  Object.keys(contactPayload).forEach((k) => (contactPayload as Record<string, unknown>)[k] == null && delete (contactPayload as Record<string, unknown>)[k]);

  let hubspot: Record<string, unknown> = { ok: false, skipped: true, error: 'hubspot_not_configured' };
  if (env.HUBSPOT_PRIVATE_APP_TOKEN) {
    const search = await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts/search', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: body.contact?.email }] }],
      properties: ['email', 'firstname', 'lastname'],
      limit: 1,
    });
    if (!search.ok) return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.');

    const contactId = (search as any)?.data?.results?.[0]?.id;
    const contactResult = contactId
      ? await hubspotRequest(env, 'PATCH', `/crm/v3/objects/contacts/${contactId}`, { properties: contactPayload })
      : await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts', { properties: contactPayload });
    if (!contactResult.ok) return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.');

    const resolvedContactId = contactId || (contactResult as any)?.data?.id;
    const properties: Record<string, unknown> = {
      dealstage: eventToStage[body.event],
      wny_path_choice: body.pathChoice,
      wny_package_tier: body.deal?.packageTier,
      amount: body.deal?.amount,
      wny_quote_ref: body.deal?.quoteRef,
      wny_walkthrough_requested: body.walkthrough?.requested,
      wny_walkthrough_requested_at: body.event === 'walkthrough_requested' ? now : undefined,
      wny_walkthrough_status: body.walkthrough?.status,
      wny_walkthrough_preferred_date_1: body.walkthrough?.preferredDate1,
      wny_walkthrough_preferred_time_window_1: body.walkthrough?.preferredTimeWindow1,
      wny_walkthrough_preferred_date_2: body.walkthrough?.preferredDate2,
      wny_walkthrough_preferred_time_window_2: body.walkthrough?.preferredTimeWindow2,
      wny_walkthrough_scheduled_at: body.walkthrough?.scheduledAt,
      wny_walkthrough_notes: body.walkthrough?.notes,
      wny_quote_status: body.event === 'quote_generated' ? 'generated' : undefined,
      wny_agreement_status: body.event === 'agreement_accepted' ? 'accepted' : undefined,
      wny_install_status: body.event === 'install_scheduled' ? 'scheduled' : undefined,
    };
    Object.keys(properties).forEach((k) => properties[k] == null && delete properties[k]);

    let dealId = body.deal?.dealId;
    if (!dealId && body.deal?.quoteRef) {
      const foundDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', {
        filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: body.deal.quoteRef }] }],
        limit: 1,
      });
      if (!foundDeal.ok) return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.');
      dealId = (foundDeal as any)?.data?.results?.[0]?.id;
    }

    const dealResult = dealId
      ? await hubspotRequest(env, 'PATCH', `/crm/v3/objects/deals/${dealId}`, { properties })
      : await hubspotRequest(env, 'POST', '/crm/v3/objects/deals', {
          properties: {
            ...properties,
            dealname: `WNYHS ${body.event} ${now}`,
          },
        });
    if (!dealResult.ok) return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.');

    const resolvedDealId = dealId || (dealResult as any)?.data?.id;
    if (resolvedDealId && resolvedContactId) {
      await hubspotRequest(env, 'PUT', `/crm/v3/objects/deals/${resolvedDealId}/associations/contacts/${resolvedContactId}/deal_to_contact`);
    }

    hubspot = { ok: true, skipped: false, dealId: resolvedDealId };
  }

  return json({ ok: true, requestId, email: emailResult, hubspot, leadSummary }, 200);
};
