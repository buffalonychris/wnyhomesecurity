import { extractSchedulingRequestSummary } from './scheduling/_boundary';

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

const getHubspotString = (value: unknown) => (typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined);
const extractFailingProperty = (result: any) =>
  getHubspotString(result?.data?.errors?.[0]?.context?.propertyName) ||
  getHubspotString(result?.data?.errors?.[0]?.context?.properties?.[0]) ||
  getHubspotString(result?.data?.context?.propertyName) ||
  getHubspotString(result?.data?.context?.properties?.[0]);
const getHubspotCategory = (result: any) => getHubspotString(result?.data?.category);
const getHubspotMessage = (result: any) => getHubspotString(result?.data?.message) || getHubspotString(result?.data?.errors?.[0]?.message);
const summarizeHubspotDetails = (result: any, fallbackErrorCode: string) => ({
  errorCode: getHubspotCategory(result) || fallbackErrorCode,
  httpStatus: result?.status,
  failingProperty: extractFailingProperty(result),
  message: getHubspotMessage(result),
});

const sanitizeProperties = (properties: Record<string, unknown>) => {
  Object.keys(properties).forEach((k) => {
    const v = properties[k];
    if (v == null || v === '') delete properties[k];
  });
  return properties;
};
const splitName = (contact: any) => {
  const firstName = contact?.firstName?.trim?.();
  const lastName = contact?.lastName?.trim?.();
  if (firstName || lastName) return { firstName: firstName || undefined, lastName: lastName || undefined };
  const fullName = contact?.fullName?.trim?.();
  if (!fullName) return { firstName: undefined, lastName: undefined };
  const [first, ...rest] = fullName.split(/\s+/).filter(Boolean);
  return { firstName: first || undefined, lastName: rest.join(' ') || undefined };
};

const timeSlotToBucket = (slot: string | undefined) => {
  if (!slot) return undefined;
  const s = slot.toLowerCase();
  if (s.includes('any')) return 'anytime';
  if (s.includes('am') || s.includes('8') || s.includes('9') || s.includes('10') || s.includes('11')) return 'morning';
  if (s.includes('12') || s.includes('1:') || s.includes('2:') || s.includes('3:') || s.includes('4:')) return 'afternoon';
  return 'evening';
};
const normalizePreferredContactMethod = (value: unknown) => {
  const normalized = getHubspotString(value)?.toLowerCase();
  if (!normalized) return 'unknown';
  if (normalized === 'text' || normalized === 'sms') return 'sms';
  if (normalized === 'phone' || normalized === 'phone call') return 'phone';
  if (normalized === 'email') return 'email';
  if (normalized === 'any') return 'any';
  return 'unknown';
};
const normalizeLeadSourcePlatform = (value: unknown) => {
  const normalized = getHubspotString(value)?.toLowerCase();
  if (!normalized) return 'unknown';
  if (normalized.includes('referral')) return 'referral';
  if (normalized.includes('google')) return 'organic_search';
  if (normalized.includes('qr') || normalized.includes('placard') || normalized.includes('sticker') || normalized.includes('card') || normalized.includes('yard')) return 'manual';
  return 'unknown';
};
const normalizeFunnelStage = (value: unknown) => {
  const normalized = getHubspotString(value)?.toLowerCase();
  if (!normalized) return 'unknown';
  if (normalized === 'quote_generated') return 'quote_generated';
  if (normalized.includes('qr estimate request') || normalized === 'qr_estimate_requested' || normalized.includes('submitted estimate request')) return 'landing_viewed';
  return 'unknown';
};
const normalizeVerticalInterest = (value: unknown) => {
  const normalized = getHubspotString(value)?.toLowerCase();
  if (normalized === 'home security' || normalized === 'home_security') return 'home_security';
  return 'unknown';
};
const normalizeWalkthroughInterest = (value: unknown) => {
  const normalized = getHubspotString(value)?.toLowerCase();
  if (!normalized) return 'unknown';
  if (normalized === 'requested' || normalized === 'request estimate' || normalized === 'qr estimate request') return 'requested';
  return 'unknown';
};

const buildQrLeadSummary = (body: LeadSignalRequest, timestampISO: string) => {
  const parsed = splitName(body?.contact);
  return {
    fullName: `${parsed.firstName || ''} ${parsed.lastName || ''}`.trim(),
    phone: body?.contact?.phone?.trim?.() || '',
    email: body?.contact?.email?.trim?.() || '',
    address: [body?.contact?.address?.street, body?.contact?.address?.city, body?.contact?.address?.state, body?.contact?.address?.zip].filter(Boolean).join(', '),
    requestedHelp: body?.request?.requestedHelp || '',
    preferredContactMethod: body?.request?.preferredContactMethod || '',
    preferredEstimateDate: body?.request?.preferredEstimateDate || '',
    preferredEstimateTimeSlot: body?.request?.preferredEstimateTimeSlot || '',
    sourceFamily: body?.sourceFamily || '',
    source: body?.source || '',
    whereDidYouSeeUs: body?.whereDidYouSeeUs || '',
    createdAt: body?.submittedAt || timestampISO,
  };
};

const validateRequest = (body: LeadSignalRequest) => {
  if (!body || typeof body !== 'object') return 'Request body must be a JSON object';
  if (!isString(body.event)) return 'event is required';
  if (body.event === 'qr_estimate_requested') {
    const required = [body?.contact?.phone, body?.contact?.email, body?.request?.preferredEstimateDate, body?.request?.preferredEstimateTimeSlot];
    if (required.some((value) => !isString(value))) return 'qr_estimate_requested is missing required contact/request fields';
  }
  return null;
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const sendLeadSignalEmail = async (env: LeadSignalEnv, payload: any) => { /* unchanged behavior */
  const to = parseEmails(env.LEAD_SIGNAL_TO_EMAIL || env.MAIL_SALES_TO || env.MAIL_ADMIN_TO);
  const from = env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM;
  const apiKey = env.RESEND_API_KEY;
  const audit = parseEmails(env.LEAD_SIGNAL_AUDIT_EMAIL || env.MAIL_AUDIT_TO);
  if (to.length === 0 || !from || !apiKey) return { ok: false as const, skipped: true, error: 'notification_not_configured' };
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
  ].join('\n');
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ from, to, bcc: audit.length > 0 ? audit : undefined, subject, text, html: `<pre>${text}</pre>` }),
  });
  if (!response.ok) return { ok: false as const, skipped: false, error: await response.text() };
  return { ok: true as const };
};

const hubspotRequest = async (env: LeadSignalEnv, method: 'GET' | 'POST' | 'PATCH' | 'PUT', url: string, body?: unknown) => {
  const token = env.HUBSPOT_PRIVATE_APP_TOKEN || env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return { ok: false, skipped: true, error: 'hubspot_not_configured' };
  const response = await fetch(`${HUBSPOT_BASE}${url}`, { method, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) return { ok: false, error: 'hubspot_error', data, status: response.status };
  return { ok: true, data, status: response.status };
};

export const onRequest: PagesFunction<LeadSignalEnv> = async ({ request, env }) => {
  const requestId = createRequestId();
  const fail = (status: number, errorCode: string, userMessage: string) => json({ ok: false, requestId, errorCode, userMessage }, status);
  if (request.method !== 'POST') return fail(405, 'METHOD_NOT_ALLOWED', 'Unsupported request method.');
  let body: LeadSignalRequest;
  try { body = (await request.json()) as LeadSignalRequest; } catch { return fail(400, 'INVALID_JSON', 'We couldn’t submit your request. Please try again.'); }
  const validationError = validateRequest(body);
  if (validationError) return fail(400, 'INVALID_QR_LEAD_PAYLOAD', 'We couldn’t submit your request. Please check your information and try again.');

  const nowIso = new Date().toISOString();
  const now = new Date();
  const leadSummary = buildQrLeadSummary(body, nowIso);
  const parsedName = splitName(body.contact);
  const submittedTimestamp = body.submittedAt || nowIso;
  const schedulingSummary = extractSchedulingRequestSummary(body?.request);
  const preferredWindow = schedulingSummary.preferredWindowText;
  const sourceFamily = body?.sourceFamily || 'QR_SCAN';
  const normalizedPreferredContactMethod = normalizePreferredContactMethod(body?.request?.preferredContactMethod);
  const normalizedLeadSourcePlatform = normalizeLeadSourcePlatform(body?.assetSource || body?.source || body?.whereDidYouSeeUs);
  const normalizedFunnelStage = normalizeFunnelStage(body?.event);
  const normalizedVerticalInterest = normalizeVerticalInterest(body?.request?.verticalInterest || 'home_security');
  const normalizedWalkthroughInterest = normalizeWalkthroughInterest(body?.request?.walkthroughInterest || body?.request?.requestedHelp || body?.event);
  const consentSummary = `textConsent=${body?.textConsent ? 'yes' : 'no'}; emailConsent=${body?.emailConsent ? 'yes' : 'no'}; contactHoursAck=${body?.contactTimeAcknowledgement ? 'yes' : 'no'}`;
  const qrDetailSummary = [
    `requestId=${requestId}`,
    `sourceFamily=${sourceFamily}`,
    `source=${body?.source || 'n/a'}`,
    `assetSource=${body?.assetSource || 'n/a'}`,
    `whereDidYouSeeUs=${body?.whereDidYouSeeUs || 'n/a'}`,
    `requestedHelp=${body?.request?.requestedHelp || 'n/a'}`,
    `requestDetails=${body?.request?.requestDetails || 'n/a'}`,
    `preferredEstimateDate=${schedulingSummary.preferredEstimateDate || 'n/a'}`,
    `preferredEstimateTimeSlot=${schedulingSummary.preferredEstimateTimeSlot || 'n/a'}`,
    `consent=${consentSummary}`,
  ].join(' | ');
  const contactNotes = [
    `requestedHelp: ${body?.request?.requestedHelp || 'n/a'}`,
    `whereDidYouSeeUs: ${body?.whereDidYouSeeUs || 'n/a'}`,
    `textConsent: ${body?.textConsent ? 'yes' : 'no'}`,
    `emailConsent: ${body?.emailConsent ? 'yes' : 'no'}`,
    `contactHoursAck: ${body?.contactTimeAcknowledgement ? 'yes' : 'no'}`,
    `requestId: ${requestId}`, qrDetailSummary,
  ].join(' | ');

  const emailResult = await sendLeadSignalEmail(env, { event: body.event, timestampISO: nowIso, customerEmail: body.contact?.email, requestId, leadSummary });
  const notificationStatus = emailResult.ok ? 'sent' : emailResult.skipped ? 'skipped' : 'failed';

  const hubspotConfigured = Boolean(env.HUBSPOT_PRIVATE_APP_TOKEN || env.HUBSPOT_ACCESS_TOKEN);
  const hubspot: any = { configured: hubspotConfigured, attempted: hubspotConfigured, status: 'failed', contact: 'skipped', deal: 'skipped', association: 'skipped', note: 'skipped', task: 'skipped', skippedProperties: [] };
  const setContactFailure = (stage: 'contact_search' | 'contact_create' | 'contact_update', result: any, fallbackErrorCode: string, attemptedPropertyNames: string[] = []) => {
    const detail = summarizeHubspotDetails(result, fallbackErrorCode);
    hubspot.stage = stage;
    hubspot.errorCode = detail.errorCode;
    hubspot.httpStatus = detail.httpStatus;
    hubspot.hubspotCategory = getHubspotCategory(result);
    hubspot.hubspotMessage = detail.message;
    hubspot.failingProperty = detail.failingProperty;
    if (detail.failingProperty && !hubspot.skippedProperties.includes(detail.failingProperty)) hubspot.skippedProperties.push(detail.failingProperty);
    console.error('[lead-signal] HubSpot contact failure', {
      requestId,
      stage,
      httpStatus: detail.httpStatus,
      hubspotCategory: getHubspotCategory(result),
      hubspotMessage: detail.message,
      failingProperty: detail.failingProperty,
      attemptedProperties: attemptedPropertyNames,
    });
  };

  if (hubspotConfigured) {
    const safeSet = async (objectType: 'contacts' | 'deals', id: string | undefined, base: Record<string, unknown>) => {
      let props = sanitizeProperties({ ...base });
      while (Object.keys(props).length > 0) {
        const result = id
          ? await hubspotRequest(env, 'PATCH', `/crm/v3/objects/${objectType}/${id}`, { properties: props })
          : await hubspotRequest(env, 'POST', `/crm/v3/objects/${objectType}`, { properties: props });
        if (result.ok) return result;
        const failingProperty = extractFailingProperty(result);
        if (!failingProperty || !(failingProperty in props)) return result;
        delete props[failingProperty];
        hubspot.skippedProperties.push(failingProperty);
      }
      return { ok: false, status: 400, data: { message: 'all_properties_removed' } };
    };

    const search = await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts/search', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: body.contact?.email }] }],
      properties: ['email', 'firstname', 'lastname'], limit: 1,
    });

    if (search.ok) {
      const existingContact = (search as any)?.data?.results?.[0];
      const contactId = existingContact?.id;
      const firstName = parsedName.firstName || existingContact?.properties?.firstname;
      const lastName = parsedName.lastName || existingContact?.properties?.lastname;
      const contactProps = {
        email: body.contact?.email,
        firstname: firstName,
        lastname: lastName,
        phone: body.contact?.phone,
        address: body.contact?.address?.street,
        city: body.contact?.address?.city,
        state: body.contact?.address?.state,
        zip: body.contact?.address?.zip,
        lifecyclestage: 'lead', hs_lead_status: 'NEW',
        wny_preferred_contact_method: normalizedPreferredContactMethod,
        wny_best_time_to_contact: body?.request?.preferredEstimateTimeSlot,
        wny_contact_notes: contactNotes,
        wny_preferred_walkthrough_window: preferredWindow,
        wny_vertical_interest: normalizedVerticalInterest,
        wny_funnel_stage_current: normalizedFunnelStage,
        wny_walkthrough_interest: normalizedWalkthroughInterest,
        wny_last_walkthrough_request_at: submittedTimestamp,
        wny_first_landing_page: body?.landingRoute || '/qrlanding',
        wny_first_touch_url: body?.currentUrl || body?.landingRoute || '/qrlanding',
        wny_last_touch_url: body?.currentUrl || body?.landingRoute || '/qrlanding',
        wny_first_touch_date: submittedTimestamp,
        wny_lead_source_platform: normalizedLeadSourcePlatform,
        wny_lead_source_detail: qrDetailSummary,
        wny_utm_source: body?.utm?.source,
        wny_utm_medium: body?.utm?.medium,
        wny_utm_campaign: body?.utm?.campaign,
        wny_utm_content: body?.utm?.content,
        wny_utm_term: body?.utm?.term,
        wny_gclid: body?.gclid,
        wny_msclkid: body?.msclkid,
      };
      const contactPropertyNames = Object.keys(sanitizeProperties({ ...contactProps }));
      const contactResult = await safeSet('contacts', contactId, contactProps);
      if (contactResult.ok) {
        const resolvedContactId = contactId || (contactResult as any).data?.id;
        hubspot.contact = contactId ? 'updated' : 'created';

        const dealNameIdentity = `${(parsedName.firstName || '')} ${(parsedName.lastName || '')}`.trim() || body.contact?.email || 'Lead';
        let dealId = body?.deal?.dealId;
        if (!dealId && body?.deal?.quoteRef) {
          const foundDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', { filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: body.deal.quoteRef }] }], limit: 1 });
          if (foundDeal.ok) dealId = (foundDeal as any)?.data?.results?.[0]?.id;
        }

        const dealProps = {
          dealname: `WNYHS QR Estimate Request - ${dealNameIdentity} - ${requestId}`,
          amount: body?.deal?.amount,
          wny_deal_vertical: 'home_security',
          wny_deal_path: 'onsite',
          wny_path_choice: 'onsite',
          wny_walkthrough_requested: true,
          wny_walkthrough_requested_at: submittedTimestamp,
          wny_walkthrough_status: 'requested',
          wny_walkthrough_preferred_date_1: body?.request?.preferredEstimateDate,
          wny_walkthrough_preferred_time_window_1: timeSlotToBucket(body?.request?.preferredEstimateTimeSlot),
          wny_walkthrough_notes: qrDetailSummary,
          wny_onsite_quote_required: true,
          wny_install_address: body?.contact?.address?.street,
          wny_install_city: body?.contact?.address?.city,
          wny_install_state: body?.contact?.address?.state,
          wny_install_zip: body?.contact?.address?.zip,
          wny_install_status: 'requested',
          wny_quote_ref: body?.deal?.quoteRef || requestId,
          wny_quote_status: 'not_started',
        };
        const dealResult = await safeSet('deals', dealId, dealProps);
        if (dealResult.ok) {
          const resolvedDealId = dealId || (dealResult as any).data?.id;
          hubspot.deal = dealId ? 'updated' : 'created';
          if (resolvedDealId && resolvedContactId) {
            const assoc = await hubspotRequest(env, 'PUT', `/crm/v3/objects/deals/${resolvedDealId}/associations/contacts/${resolvedContactId}/deal_to_contact`);
            hubspot.association = assoc.ok ? 'created' : 'failed';

            const noteBody = [
              'QR estimate request received', `requestId: ${requestId}`, `customer name: ${leadSummary.fullName || 'n/a'}`,
              `phone: ${leadSummary.phone || 'n/a'}`, `email: ${leadSummary.email || 'n/a'}`, `address: ${leadSummary.address || 'n/a'}`,
              `requested help: ${body?.request?.requestedHelp || 'n/a'}`, `preferred contact method: ${body?.request?.preferredContactMethod || 'n/a'}`,
              `text consent: ${body?.textConsent ? 'yes' : 'no'}`, `email consent: ${body?.emailConsent ? 'yes' : 'no'}`,
              `contact-hours acknowledgement: ${body?.contactTimeAcknowledgement ? 'yes' : 'no'}`, `preferred estimate date: ${schedulingSummary.preferredEstimateDate || 'n/a'}`,
              `preferred estimate time slot: ${schedulingSummary.preferredEstimateTimeSlot || 'n/a'}`, `source family: ${sourceFamily}`, `QR source: ${body?.source || 'n/a'}`,
              `asset source: ${body?.assetSource || 'n/a'}`, `request details: ${body?.request?.requestDetails || 'n/a'}`, `consent summary: ${consentSummary}`,
              `where customer saw us: ${body?.whereDidYouSeeUs || 'n/a'}`, `submitted timestamp: ${submittedTimestamp}`,
            ].join('\n');
            const note = await hubspotRequest(env, 'POST', '/crm/v3/objects/notes', { properties: { hs_note_body: noteBody, hs_timestamp: submittedTimestamp }, associations: [{ to: { id: resolvedContactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] }, { to: { id: resolvedDealId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 214 }] }] });
            hubspot.note = note.ok ? 'created' : 'failed';

            const etNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
            const due = new Date(etNow);
            if (etNow.getHours() < 19) due.setHours(etNow.getHours() + 2, 0, 0, 0);
            else due.setDate(due.getDate() + 1), due.setHours(10, 0, 0, 0);
            const taskBody = `requestId: ${requestId}\nwindow: ${preferredWindow || 'n/a'}\nphone: ${leadSummary.phone || 'n/a'}\nemail: ${leadSummary.email || 'n/a'}\nrequested help: ${body?.request?.requestedHelp || 'n/a'}`;
            const task = await hubspotRequest(env, 'POST', '/crm/v3/objects/tasks', { properties: { hs_task_subject: 'Follow up on QR estimate request', hs_task_body: taskBody, hs_task_status: 'NOT_STARTED', hs_timestamp: due.toISOString() }, associations: [{ to: { id: resolvedContactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 204 }] }, { to: { id: resolvedDealId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 216 }] }] });
            hubspot.task = task.ok ? 'created' : 'failed';
          }
        } else hubspot.deal = 'failed';
      } else {
        const writeStage = contactId ? 'contact_update' : 'contact_create';
        setContactFailure(writeStage, contactResult, 'CONTACT_WRITE_FAILED', contactPropertyNames);
        const minimalContactProps = sanitizeProperties({
          email: body.contact?.email,
          firstname: firstName,
          lastname: lastName,
          phone: body.contact?.phone,
        });
        const minimalPropertyNames = Object.keys(minimalContactProps);
        console.warn('[lead-signal] Retrying HubSpot contact with minimal fields', { requestId, stage: writeStage, attemptedProperties: minimalPropertyNames });
        const fallbackContactResult = await (contactId
          ? hubspotRequest(env, 'PATCH', `/crm/v3/objects/contacts/${contactId}`, { properties: minimalContactProps })
          : hubspotRequest(env, 'POST', '/crm/v3/objects/contacts', { properties: minimalContactProps }));
        if (fallbackContactResult.ok) {
          const resolvedContactId = contactId || (fallbackContactResult as any).data?.id;
          hubspot.contact = contactId ? 'updated' : 'created';
          hubspot.status = 'partial';
          hubspot.skippedProperties = Array.from(new Set([...hubspot.skippedProperties, ...contactPropertyNames.filter((key) => !minimalPropertyNames.includes(key))]));

          const dealNameIdentity = `${(parsedName.firstName || '')} ${(parsedName.lastName || '')}`.trim() || body.contact?.email || 'Lead';
          let dealId = body?.deal?.dealId;
          if (!dealId && body?.deal?.quoteRef) {
            const foundDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', { filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: body.deal.quoteRef }] }], limit: 1 });
            if (foundDeal.ok) dealId = (foundDeal as any)?.data?.results?.[0]?.id;
          }
          const dealProps = {
            dealname: `WNYHS QR Estimate Request - ${dealNameIdentity} - ${requestId}`,
            amount: body?.deal?.amount,
            wny_deal_vertical: 'home_security',
            wny_deal_path: 'onsite',
            wny_path_choice: 'onsite',
            wny_walkthrough_requested: true,
            wny_walkthrough_requested_at: submittedTimestamp,
            wny_walkthrough_status: 'requested',
            wny_walkthrough_preferred_date_1: body?.request?.preferredEstimateDate,
            wny_walkthrough_preferred_time_window_1: timeSlotToBucket(body?.request?.preferredEstimateTimeSlot),
            wny_walkthrough_notes: qrDetailSummary,
            wny_onsite_quote_required: true,
            wny_install_address: body?.contact?.address?.street,
            wny_install_city: body?.contact?.address?.city,
            wny_install_state: body?.contact?.address?.state,
            wny_install_zip: body?.contact?.address?.zip,
            wny_install_status: 'requested',
            wny_quote_ref: body?.deal?.quoteRef || requestId,
            wny_quote_status: 'not_started',
          };
          const dealResult = await safeSet('deals', dealId, dealProps);
          if (dealResult.ok) {
            const resolvedDealId = dealId || (dealResult as any).data?.id;
            hubspot.deal = dealId ? 'updated' : 'created';
            if (resolvedDealId && resolvedContactId) {
              const assoc = await hubspotRequest(env, 'PUT', `/crm/v3/objects/deals/${resolvedDealId}/associations/contacts/${resolvedContactId}/deal_to_contact`);
              hubspot.association = assoc.ok ? 'created' : 'failed';
              const noteBody = [
                'QR estimate request received', `requestId: ${requestId}`, `customer name: ${leadSummary.fullName || 'n/a'}`,
                `phone: ${leadSummary.phone || 'n/a'}`, `email: ${leadSummary.email || 'n/a'}`, `address: ${leadSummary.address || 'n/a'}`,
                `requested help: ${body?.request?.requestedHelp || 'n/a'}`, `preferred contact method: ${body?.request?.preferredContactMethod || 'n/a'}`,
                `text consent: ${body?.textConsent ? 'yes' : 'no'}`, `email consent: ${body?.emailConsent ? 'yes' : 'no'}`,
                `contact-hours acknowledgement: ${body?.contactTimeAcknowledgement ? 'yes' : 'no'}`, `preferred estimate date: ${schedulingSummary.preferredEstimateDate || 'n/a'}`,
                `preferred estimate time slot: ${schedulingSummary.preferredEstimateTimeSlot || 'n/a'}`, `source family: ${sourceFamily}`, `QR source: ${body?.source || 'n/a'}`,
                `asset source: ${body?.assetSource || 'n/a'}`, `request details: ${body?.request?.requestDetails || 'n/a'}`, `consent summary: ${consentSummary}`,
                `where customer saw us: ${body?.whereDidYouSeeUs || 'n/a'}`, `submitted timestamp: ${submittedTimestamp}`,
              ].join('\n');
              const note = await hubspotRequest(env, 'POST', '/crm/v3/objects/notes', { properties: { hs_note_body: noteBody, hs_timestamp: submittedTimestamp }, associations: [{ to: { id: resolvedContactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] }, { to: { id: resolvedDealId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 214 }] }] });
              hubspot.note = note.ok ? 'created' : 'failed';
              const etNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
              const due = new Date(etNow);
              if (etNow.getHours() < 19) due.setHours(etNow.getHours() + 2, 0, 0, 0);
              else due.setDate(due.getDate() + 1), due.setHours(10, 0, 0, 0);
              const taskBody = `requestId: ${requestId}\nwindow: ${preferredWindow || 'n/a'}\nphone: ${leadSummary.phone || 'n/a'}\nemail: ${leadSummary.email || 'n/a'}\nrequested help: ${body?.request?.requestedHelp || 'n/a'}`;
              const task = await hubspotRequest(env, 'POST', '/crm/v3/objects/tasks', { properties: { hs_task_subject: 'Follow up on QR estimate request', hs_task_body: taskBody, hs_task_status: 'NOT_STARTED', hs_timestamp: due.toISOString() }, associations: [{ to: { id: resolvedContactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 204 }] }, { to: { id: resolvedDealId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 216 }] }] });
              hubspot.task = task.ok ? 'created' : 'failed';
            }
          } else hubspot.deal = 'failed';
        } else {
          setContactFailure(writeStage, fallbackContactResult, 'CONTACT_FALLBACK_FAILED', minimalPropertyNames);
          hubspot.contact = 'failed';
        }
      }
    } else {
      setContactFailure('contact_search', search, 'CONTACT_SEARCH_FAILED', ['email']);
      hubspot.contact = 'failed';
    }

    const coreFailed = ['failed'].includes(hubspot.contact) || ['failed'].includes(hubspot.deal);
    const auxFailed = ['failed'].includes(hubspot.association) || ['failed'].includes(hubspot.note) || ['failed'].includes(hubspot.task);
    hubspot.status = coreFailed ? 'failed' : auxFailed || hubspot.skippedProperties.length > 0 ? 'partial' : 'synced';
  } else {
    hubspot.status = 'failed';
  }

  const responseBody: Record<string, unknown> = { ok: true, requestId, notification: { configured: true, attempted: true, status: notificationStatus, provider: 'resend' }, hubspot };
  if (!isProduction(env)) responseBody.diagnostics = { event: body.event, route: body.route || 'api/lead-signal' };
  return json(responseBody, 200);
};
