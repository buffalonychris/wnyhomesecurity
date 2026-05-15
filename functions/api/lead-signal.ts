type LeadSignalRequest = any;

type LeadSignalEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  MAIL_FROM?: string;
  EMAIL_FROM?: string;
  LEAD_SIGNAL_TO_EMAIL?: string;
  MAIL_SALES_TO?: string;
  MAIL_ADMIN_TO?: string;
  LEAD_SIGNAL_AUDIT_EMAIL?: string;
  MAIL_AUDIT_TO?: string;
  HUBSPOT_PRIVATE_APP_TOKEN?: string;
  HUBSPOT_ACCESS_TOKEN?: string;
  NODE_ENV?: string;
};

const HUBSPOT_BASE = 'https://api.hubapi.com';

const isString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
const createRequestId = () => `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
const isProduction = (env: LeadSignalEnv) => (env.NODE_ENV || 'production') === 'production';

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
  const to = parseEmails(env.LEAD_SIGNAL_TO_EMAIL || env.MAIL_SALES_TO || env.MAIL_ADMIN_TO);
  const from = env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM;
  const apiKey = env.RESEND_API_KEY;
  const audit = parseEmails(env.LEAD_SIGNAL_AUDIT_EMAIL || env.MAIL_AUDIT_TO);

  if (to.length === 0 || !from || !apiKey) {
    console.warn('[lead-signal] notification skipped: missing configuration', {
      requestId: payload.requestId,
      hasTo: to.length > 0,
      hasFrom: Boolean(from),
      hasApiKey: Boolean(apiKey),
      hasAudit: audit.length > 0,
    });
    return { ok: false as const, skipped: true, error: 'notification_not_configured' };
  }

  console.info('[lead-signal] resend notification attempting', { requestId: payload.requestId });

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
    body: JSON.stringify({ from, to, bcc: audit.length > 0 ? audit : undefined, subject, text, html: `<pre>${text}</pre>` }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('[lead-signal] resend notification failed', { requestId: payload.requestId, status: response.status, error: errorText || 'unknown' });
    return { ok: false as const, skipped: false, error: errorText || `resend_error_${response.status}` };
  }

  console.info('[lead-signal] resend notification sent', { requestId: payload.requestId });
  return { ok: true as const };
};

const hubspotRequest = async (env: LeadSignalEnv, method: 'GET' | 'POST' | 'PATCH' | 'PUT', url: string, body?: unknown) => {
  const token = env.HUBSPOT_PRIVATE_APP_TOKEN || env.HUBSPOT_ACCESS_TOKEN;
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

  if (request.method !== 'POST') return fail(405, 'METHOD_NOT_ALLOWED', 'Unsupported request method.');

  let body: LeadSignalRequest;
  try { body = (await request.json()) as LeadSignalRequest; } catch { return fail(400, 'INVALID_JSON', 'We couldn’t submit your request. Please try again.'); }

  const validationError = validateRequest(body);
  if (validationError) return fail(400, 'INVALID_QR_LEAD_PAYLOAD', 'We couldn’t submit your request. Please check your information and try again.');

  const now = new Date().toISOString();
  const leadSummary = buildQrLeadSummary(body, now);
  console.info('[lead-signal] accepted', { requestId, event: body.event, source: body?.source, leadSummary });

  const emailConfigured = Boolean(env.RESEND_API_KEY) && Boolean(env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM) &&
    Boolean((env.LEAD_SIGNAL_TO_EMAIL || env.MAIL_SALES_TO || env.MAIL_ADMIN_TO || '').trim());
  console.info('[lead-signal] notification config status', { requestId, configured: emailConfigured });

  const emailResult = await sendLeadSignalEmail(env, {
    event: body.event || 'Lead Signal', timestampISO: now, customerEmail: body.contact?.email || body.customerEmail,
    referenceId: body.referenceId || body.deal?.quoteRef, resumeUrl: body.resumeUrl, verifyUrl: body.verifyUrl, route: body.route || 'api/lead-signal', requestId,
  });

  const notificationStatus = emailResult.ok ? 'sent' : emailResult.skipped ? 'skipped' : 'failed';
  if (!emailResult.ok && !emailResult.skipped) return fail(502, 'EMAIL_NOTIFICATION_FAILED', 'We couldn’t submit your request. Please try again.');

  const hubspotConfigured = Boolean(env.HUBSPOT_PRIVATE_APP_TOKEN || env.HUBSPOT_ACCESS_TOKEN);
  console.info('[lead-signal] hubspot config status', { requestId, configured: hubspotConfigured });

  let hubspotStatus: 'synced' | 'skipped' | 'failed' = 'skipped';
  if (hubspotConfigured) {
    console.info('[lead-signal] hubspot sync attempting', { requestId });
    const contactPayload = {
      email: body.contact?.email, firstname: body.contact?.firstName, lastname: body.contact?.lastName, phone: body.contact?.phone,
      address: body.contact?.address, wny_walkthrough_interest: body.event === 'walkthrough_requested' ? true : undefined,
      wny_last_walkthrough_request_at: body.event === 'walkthrough_requested' ? now : undefined, wny_preferred_walkthrough_window: body.walkthrough?.preferredTimeWindow1,
    };
    Object.keys(contactPayload).forEach((k) => (contactPayload as Record<string, unknown>)[k] == null && delete (contactPayload as Record<string, unknown>)[k]);

    const search = await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts/search', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: body.contact?.email }] }], properties: ['email', 'firstname', 'lastname'], limit: 1,
    });
    if (!search.ok) {
      console.error('[lead-signal] hubspot search failed', { requestId, error: (search as any).error });
      hubspotStatus = 'failed';
      return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.');
    }

    const contactId = (search as any)?.data?.results?.[0]?.id;
    const contactResult = contactId
      ? await hubspotRequest(env, 'PATCH', `/crm/v3/objects/contacts/${contactId}`, { properties: contactPayload })
      : await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts', { properties: contactPayload });
    if (!contactResult.ok) {
      console.error('[lead-signal] hubspot contact upsert failed', { requestId, error: (contactResult as any).error });
      hubspotStatus = 'failed';
      return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.');
    }

    const resolvedContactId = contactId || (contactResult as any)?.data?.id;
    const properties: Record<string, unknown> = {
      dealstage: eventToStage[body.event], wny_path_choice: body.pathChoice, wny_package_tier: body.deal?.packageTier, amount: body.deal?.amount,
      wny_quote_ref: body.deal?.quoteRef, wny_walkthrough_requested: body.walkthrough?.requested,
      wny_walkthrough_requested_at: body.event === 'walkthrough_requested' ? now : undefined,
      wny_walkthrough_status: body.walkthrough?.status, wny_walkthrough_preferred_date_1: body.walkthrough?.preferredDate1,
      wny_walkthrough_preferred_time_window_1: body.walkthrough?.preferredTimeWindow1, wny_walkthrough_preferred_date_2: body.walkthrough?.preferredDate2,
      wny_walkthrough_preferred_time_window_2: body.walkthrough?.preferredTimeWindow2, wny_walkthrough_scheduled_at: body.walkthrough?.scheduledAt,
      wny_walkthrough_notes: body.walkthrough?.notes, wny_quote_status: body.event === 'quote_generated' ? 'generated' : undefined,
      wny_agreement_status: body.event === 'agreement_accepted' ? 'accepted' : undefined, wny_install_status: body.event === 'install_scheduled' ? 'scheduled' : undefined,
    };
    Object.keys(properties).forEach((k) => properties[k] == null && delete properties[k]);

    let dealId = body.deal?.dealId;
    if (!dealId && body.deal?.quoteRef) {
      const foundDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', {
        filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: body.deal.quoteRef }] }], limit: 1,
      });
      if (!foundDeal.ok) {
        console.error('[lead-signal] hubspot deal search failed', { requestId, error: (foundDeal as any).error });
        hubspotStatus = 'failed';
        return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.');
      }
      dealId = (foundDeal as any)?.data?.results?.[0]?.id;
    }

    const dealResult = dealId
      ? await hubspotRequest(env, 'PATCH', `/crm/v3/objects/deals/${dealId}`, { properties })
      : await hubspotRequest(env, 'POST', '/crm/v3/objects/deals', { properties: { ...properties, dealname: `WNYHS ${body.event} ${now}` } });
    if (!dealResult.ok) {
      console.error('[lead-signal] hubspot deal upsert failed', { requestId, error: (dealResult as any).error });
      hubspotStatus = 'failed';
      return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.');
    }

    const resolvedDealId = dealId || (dealResult as any)?.data?.id;
    if (resolvedDealId && resolvedContactId) {
      await hubspotRequest(env, 'PUT', `/crm/v3/objects/deals/${resolvedDealId}/associations/contacts/${resolvedContactId}/deal_to_contact`);
    }
    hubspotStatus = 'synced';
    console.info('[lead-signal] hubspot sync complete', { requestId, status: hubspotStatus });
  } else {
    console.warn('[lead-signal] hubspot sync skipped: missing token', { requestId });
  }

  const responseBody: Record<string, unknown> = {
    ok: true,
    requestId,
    notification: { configured: emailConfigured, attempted: true, status: notificationStatus, provider: emailConfigured ? 'resend' : 'none' },
    hubspot: { configured: hubspotConfigured, attempted: hubspotConfigured, status: hubspotStatus },
  };

  if (!isProduction(env)) {
    responseBody.diagnostics = { event: body.event, route: body.route || 'api/lead-signal' };
  }

  return json(responseBody, 200);
};
