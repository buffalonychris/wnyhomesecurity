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
const HUBSPOT_ALLOWED_STATUSES = new Set([400, 401, 403, 404, 409, 500]);
const HUBSPOT_ALLOWED_STAGES = new Set([
  'contact_search',
  'contact_create',
  'contact_update',
  'deal_search',
  'deal_create',
  'deal_update',
  'association_create',
]);
const HUBSPOT_SAFE_CONTACT_PROPERTIES = new Set(['email', 'firstname', 'lastname', 'phone', 'address', 'city', 'state', 'zip']);
const HUBSPOT_SAFE_DEAL_PROPERTIES = new Set(['dealname', 'amount', 'dealstage', 'pipeline', 'closedate', 'description']);

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
  if (!response.ok) return { ok: false, error: 'hubspot_error', data, status: response.status };
  return { ok: true, data, status: response.status };
};

const getHubspotString = (value: unknown) => (typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined);
const extractFailingProperty = (result: any) =>
  getHubspotString(result?.data?.errors?.[0]?.context?.propertyName) ||
  getHubspotString(result?.data?.errors?.[0]?.context?.properties?.[0]) ||
  getHubspotString(result?.data?.context?.propertyName) ||
  getHubspotString(result?.data?.context?.properties?.[0]);
const getHubspotStatus = (result: any) => (HUBSPOT_ALLOWED_STATUSES.has(result?.status) ? result.status : undefined);
const getHubspotCategory = (result: any) => getHubspotString(result?.data?.category);
const getHubspotMessage = (result: any) => getHubspotString(result?.data?.message) || getHubspotString(result?.data?.errors?.[0]?.message);

const summarizeHubspotDetails = (result: any, fallbackErrorCode: string) => {
  const category = getHubspotCategory(result);
  const message = getHubspotMessage(result);
  const failingProperty = extractFailingProperty(result);
  return {
    errorCode: category || fallbackErrorCode,
    httpStatus: getHubspotStatus(result),
    failingProperty,
    message,
  };
};

const logHubspotFailure = (requestId: string, stage: string, result: any) => {
  const category = getHubspotCategory(result) || 'unknown_category';
  const message = getHubspotMessage(result) || 'unknown_message';
  const failingProperty = extractFailingProperty(result) || 'unknown_property';
  console.error('[lead-signal] hubspot sync failure', { requestId, stage, httpStatus: result?.status, category, message, failingProperty });
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
  let hubspotFailureDetails: Record<string, unknown> | null = null;

  if (hubspotConfigured) {
    const qrDetail = [
      `source_family=${body.sourceFamily || 'n/a'}`,
      `source=${body.source || 'n/a'}`,
      `where_seen=${body.whereDidYouSeeUs || 'n/a'}`,
      `preferred_date=${body.request?.preferredEstimateDate || 'n/a'}`,
      `preferred_slot=${body.request?.preferredEstimateTimeSlot || 'n/a'}`,
      `text_consent=${body.textConsent ? 'yes' : 'no'}`,
      `email_consent=${body.emailConsent ? 'yes' : 'no'}`,
      `contact_time_ack=${body.contactTimeAcknowledgement ? 'yes' : 'no'}`,
    ].join(' | ');

    const contactPayload: Record<string, unknown> = {
      email: body.contact?.email,
      firstname: body.contact?.firstName,
      lastname: body.contact?.lastName,
      phone: body.contact?.phone,
      address: body.contact?.address?.street,
      city: body.contact?.address?.city,
      state: body.contact?.address?.state,
      zip: body.contact?.address?.zip,
    };
    Object.keys(contactPayload).forEach((k) => contactPayload[k] == null && delete contactPayload[k]);

    const search = await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts/search', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: body.contact?.email }] }], properties: ['email', 'firstname', 'lastname'], limit: 1,
    });

    if (!search.ok) {
      hubspotStatus = 'failed';
      const details = summarizeHubspotDetails(search, 'HUBSPOT_CONTACT_SEARCH_FAILED');
      hubspotFailureDetails = { stage: 'contact_search', ...details };
      logHubspotFailure(requestId, 'contact_search', search);
    } else {
      const contactId = (search as any)?.data?.results?.[0]?.id;
      const contactResult = contactId
        ? await hubspotRequest(env, 'PATCH', `/crm/v3/objects/contacts/${contactId}`, { properties: contactPayload })
        : await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts', { properties: contactPayload });

      if (!contactResult.ok) {
        hubspotStatus = 'failed';
        const stage = contactId ? 'contact_update' : 'contact_create';
        const details = summarizeHubspotDetails(contactResult, 'HUBSPOT_CONTACT_UPSERT_FAILED');
        hubspotFailureDetails = { stage, ...details };
        logHubspotFailure(requestId, stage, contactResult);
      } else {
        const resolvedContactId = contactId || (contactResult as any)?.data?.id;
        const dealProperties: Record<string, unknown> = {
          dealstage: eventToStage[body.event],
          amount: body.deal?.amount,
          description: [
            `event=${body.event || 'unknown'}`,
            `path_choice=${body.pathChoice || 'n/a'}`,
            `package_tier=${body.deal?.packageTier || 'n/a'}`,
            `quote_ref=${body.deal?.quoteRef || 'n/a'}`,
            qrDetail,
          ].join(' | '),
        };
        Object.keys(dealProperties).forEach((k) => dealProperties[k] == null && delete dealProperties[k]);

        let dealId = body.deal?.dealId;
        if (!dealId && body.deal?.quoteRef) {
          const foundDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', {
            filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: body.deal.quoteRef }] }], limit: 1,
          });
          if (!foundDeal.ok) {
            hubspotStatus = 'failed';
            const details = summarizeHubspotDetails(foundDeal, 'HUBSPOT_DEAL_SEARCH_FAILED');
            hubspotFailureDetails = { stage: 'deal_search', ...details };
            logHubspotFailure(requestId, 'deal_search', foundDeal);
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
            const stage = dealId ? 'deal_update' : 'deal_create';
            const details = summarizeHubspotDetails(dealResult, 'HUBSPOT_DEAL_UPSERT_FAILED');
            hubspotFailureDetails = { stage, ...details };
            logHubspotFailure(requestId, stage, dealResult);
          } else {
            const resolvedDealId = dealId || (dealResult as any)?.data?.id;
            if (resolvedDealId && resolvedContactId) {
              const associationResult = await hubspotRequest(env, 'PUT', `/crm/v3/objects/deals/${resolvedDealId}/associations/contacts/${resolvedContactId}/deal_to_contact`);
              if (!associationResult.ok) {
                hubspotStatus = 'failed';
                const details = summarizeHubspotDetails(associationResult, 'HUBSPOT_ASSOCIATION_FAILED');
                hubspotFailureDetails = { stage: 'association_create', ...details };
                logHubspotFailure(requestId, 'association_create', associationResult);
              }
            }
            if (hubspotStatus !== 'failed') hubspotStatus = 'synced';
          }
        }
      }
    }
  }

  const responseBody: Record<string, unknown> = {
    ok: true,
    requestId,
    notification: { configured: emailConfigured, attempted: true, status: notificationStatus, provider: 'resend' },
    hubspot: {
      configured: hubspotConfigured,
      attempted: hubspotConfigured,
      status: hubspotStatus,
      ...(hubspotStatus === 'failed'
        ? {
            stage: HUBSPOT_ALLOWED_STAGES.has(String(hubspotFailureDetails?.stage)) ? hubspotFailureDetails?.stage : 'unknown',
            errorCode: hubspotFailureDetails?.errorCode || 'HUBSPOT_SYNC_FAILED',
            httpStatus: hubspotFailureDetails?.httpStatus,
            failingProperty: hubspotFailureDetails?.failingProperty,
            message: hubspotFailureDetails?.message,
            userMessage: 'HubSpot sync failed; intake was still accepted.',
          }
        : {}),
    },
  };

  if (!isProduction(env)) {
    responseBody.diagnostics = { event: body.event, route: body.route || 'api/lead-signal' };
  }

  return json(responseBody, 200);
};
