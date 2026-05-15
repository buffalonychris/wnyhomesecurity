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

const sendLeadSignalEmail = async (
  env: LeadSignalEnv,
  payload: {
    event: string;
    timestampISO: string;
    customerEmail?: string;
    referenceId?: string;
    resumeUrl?: string;
    verifyUrl?: string;
    route: string;
    requestId: string;
    leadSummary: ReturnType<typeof buildQrLeadSummary>;
    textConsent?: boolean;
    emailConsent?: boolean;
    contactTimeAcknowledgement?: boolean;
  },
) => {
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

  const subject = `[WNYHS Lead Signal] ${payload.event}`;
  const text = [
    `requestId: ${payload.requestId}`,
    `event: ${payload.event}`,
    `name: ${payload.leadSummary.fullName || 'Not provided'}`,
    `phone: ${payload.leadSummary.phone || 'Not provided'}`,
    `email: ${payload.leadSummary.email || payload.customerEmail || 'Not provided'}`,
    `address: ${payload.leadSummary.address || 'Not provided'}`,
    `requested help: ${payload.leadSummary.requestedHelp || 'Not provided'}`,
    `preferred contact method: ${payload.leadSummary.preferredContactMethod || 'Not provided'}`,
    `text consent: ${payload.textConsent ? 'yes' : 'no'}`,
    `email consent: ${payload.emailConsent ? 'yes' : 'no'}`,
    `contact-hours acknowledgement: ${payload.contactTimeAcknowledgement ? 'yes' : 'no'}`,
    `preferred estimate date: ${payload.leadSummary.preferredEstimateDate || 'Not provided'}`,
    `preferred estimate time slot: ${payload.leadSummary.preferredEstimateTimeSlot || 'Not provided'}`,
    `qr source family: ${payload.leadSummary.sourceFamily || 'Not provided'}`,
    `qr source: ${payload.leadSummary.source || 'Not provided'}`,
    `where customer saw us: ${payload.leadSummary.whereDidYouSeeUs || 'Not provided'}`,
    `submitted timestamp: ${payload.leadSummary.createdAt || payload.timestampISO}`,
    `reference ID: ${payload.referenceId ?? 'Not provided'}`,
    `resume link: ${payload.resumeUrl ?? 'Not provided'}`,
    `verify link: ${payload.verifyUrl ?? 'Not provided'}`,
    `route: ${payload.route}`,
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

const extractFailingProperty = (result: any, fallback: string) =>
  result?.data?.errors?.[0]?.context?.propertyName || result?.data?.category || fallback;

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

  const emailConfigured = Boolean(env.RESEND_API_KEY) && Boolean(env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM) &&
    Boolean((env.LEAD_SIGNAL_TO_EMAIL || env.MAIL_SALES_TO || env.MAIL_ADMIN_TO || '').trim());

  const emailResult = await sendLeadSignalEmail(env, {
    event: body.event || 'Lead Signal', timestampISO: now, customerEmail: body.contact?.email || body.customerEmail,
    referenceId: body.referenceId || body.deal?.quoteRef, resumeUrl: body.resumeUrl, verifyUrl: body.verifyUrl, route: body.route || 'api/lead-signal', requestId,
    leadSummary,
    textConsent: body.textConsent,
    emailConsent: body.emailConsent,
    contactTimeAcknowledgement: body.contactTimeAcknowledgement,
  });

  const notificationStatus = emailResult.ok ? 'sent' : emailResult.skipped ? 'skipped' : 'failed';

  const hubspotConfigured = Boolean(env.HUBSPOT_PRIVATE_APP_TOKEN || env.HUBSPOT_ACCESS_TOKEN);
  let hubspotStatus: 'synced' | 'skipped' | 'failed' = 'skipped';

  if (hubspotConfigured) {
    const contactPayload: Record<string, unknown> = {
      email: body.contact?.email,
      firstname: body.contact?.firstName,
      lastname: body.contact?.lastName,
      phone: body.contact?.phone,
      address: body.contact?.address,
      wny_source_family: body.sourceFamily,
      wny_source: body.source,
      wny_where_did_you_see_us: body.whereDidYouSeeUs,
      wny_preferred_estimate_date: body.request?.preferredEstimateDate,
      wny_preferred_estimate_time_slot: body.request?.preferredEstimateTimeSlot,
      wny_text_consent: body.textConsent,
      wny_email_consent: body.emailConsent,
      wny_contact_time_acknowledged: body.contactTimeAcknowledgement,
    };
    Object.keys(contactPayload).forEach((k) => contactPayload[k] == null && delete contactPayload[k]);

    const search = await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts/search', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: body.contact?.email }] }], properties: ['email', 'firstname', 'lastname'], limit: 1,
    });

    if (!search.ok) {
      hubspotStatus = 'failed';
      console.error('[lead-signal] hubspot contact search failed', { requestId, failingProperty: extractFailingProperty(search, 'hubspot_contact_search_failed') });
    } else {
      const contactId = (search as any)?.data?.results?.[0]?.id;
      const contactResult = contactId
        ? await hubspotRequest(env, 'PATCH', `/crm/v3/objects/contacts/${contactId}`, { properties: contactPayload })
        : await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts', { properties: contactPayload });

      if (!contactResult.ok) {
        hubspotStatus = 'failed';
        console.error('[lead-signal] hubspot contact upsert failed', { requestId, failingProperty: extractFailingProperty(contactResult, 'hubspot_contact_upsert_failed') });
      } else {
        const resolvedContactId = contactId || (contactResult as any)?.data?.id;
        const dealProperties: Record<string, unknown> = {
          dealstage: eventToStage[body.event],
          wny_path_choice: body.pathChoice,
          wny_package_tier: body.deal?.packageTier,
          amount: body.deal?.amount,
          wny_quote_ref: body.deal?.quoteRef,
          wny_source_family: body.sourceFamily,
          wny_source: body.source,
          wny_where_did_you_see_us: body.whereDidYouSeeUs,
          wny_preferred_estimate_date: body.request?.preferredEstimateDate,
          wny_preferred_estimate_time_slot: body.request?.preferredEstimateTimeSlot,
          wny_text_consent: body.textConsent,
          wny_email_consent: body.emailConsent,
          wny_contact_time_acknowledged: body.contactTimeAcknowledgement,
        };
        Object.keys(dealProperties).forEach((k) => dealProperties[k] == null && delete dealProperties[k]);

        let dealId = body.deal?.dealId;
        if (!dealId && body.deal?.quoteRef) {
          const foundDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', {
            filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: body.deal.quoteRef }] }], limit: 1,
          });
          if (!foundDeal.ok) {
            hubspotStatus = 'failed';
            console.error('[lead-signal] hubspot deal search failed', { requestId, failingProperty: extractFailingProperty(foundDeal, 'hubspot_deal_search_failed') });
          } else {
            dealId = (foundDeal as any)?.data?.results?.[0]?.id;
          }
        }

        if (hubspotStatus !== 'failed') {
          const dealResult = dealId
            ? await hubspotRequest(env, 'PATCH', `/crm/v3/objects/deals/${dealId}`, { properties: dealProperties })
            : await hubspotRequest(env, 'POST', '/crm/v3/objects/deals', { properties: { ...dealProperties, dealname: `WNYHS ${body.event} ${now}` } });

          if (!dealResult.ok) {
            hubspotStatus = 'failed';
            console.error('[lead-signal] hubspot deal upsert failed', { requestId, failingProperty: extractFailingProperty(dealResult, 'hubspot_deal_upsert_failed') });
          } else {
            const resolvedDealId = dealId || (dealResult as any)?.data?.id;
            if (resolvedDealId && resolvedContactId) {
              await hubspotRequest(env, 'PUT', `/crm/v3/objects/deals/${resolvedDealId}/associations/contacts/${resolvedContactId}/deal_to_contact`);
            }
            hubspotStatus = 'synced';
          }
        }
      }
    }
  }

  const responseBody: Record<string, unknown> = {
    ok: true,
    requestId,
    notification: { configured: emailConfigured, attempted: true, status: notificationStatus, provider: 'resend' },
    hubspot: { configured: hubspotConfigured, attempted: hubspotConfigured, status: hubspotStatus },
  };

  if (!isProduction(env)) {
    responseBody.diagnostics = { event: body.event, route: body.route || 'api/lead-signal' };
  }

  return json(responseBody, 200);
};
