import { extractSchedulingRequestSummary } from './scheduling/_boundary';
import { createPendingOwnerConfirmationAppointmentRequest } from './scheduling/appointmentRequestStore';
import { normalizeDealPath, normalizeFunnelStage, normalizeLeadSourcePlatform, normalizePathChoice, normalizePreferredContactMethod, normalizeVerticalInterest, normalizeWalkthroughInterest, stringifyHubSpotTextField } from './hubspotNormalization';
import { buildEstimateDealName, chooseHubSpotContactSearchFilters, getDealStageForCreate } from './hubspotSyncHelpers';

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
  HUBSPOT_ESTIMATE_INITIAL_STAGE_ID?: string;
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
const normalizePackageTier = (value: unknown): 'bronze' | 'silver' | 'gold' | 'unknown' => {
  const tier = typeof value === 'string' ? value.trim().toLowerCase() : '';
  if (tier === 'bronze' || tier === 'silver' || tier === 'gold') return tier;
  return 'unknown';
};
const normalizeDiscoveryContext = (value: any) => {
  if (!value || typeof value !== 'object') return null;
  return {
    fitCheckCompleted: value.fitCheckCompleted === true,
    recommendedTier: normalizePackageTier(value.recommendedTier),
    propertySize: ['small', 'typical', 'large'].includes(value.propertySize) ? value.propertySize : 'unknown',
    coverageExpectation: ['basic', 'moderate', 'comprehensive'].includes(value.coverageExpectation) ? value.coverageExpectation : 'unknown',
    recordingPreference: ['local', 'cloud', 'hybrid', 'none'].includes(value.recordingPreference) ? value.recordingPreference : 'unknown',
    monitoringPreference: ['self_monitoring', 'no_monthly', 'professional_discussion'].includes(value.monitoringPreference) ? value.monitoringPreference : 'unknown',
    priorityConcerns: ['entry_monitoring', 'driveway', 'package_delivery', 'kids_pets', 'garage_shed'].includes(value.priorityConcerns) ? value.priorityConcerns : 'unknown',
    entryPointCount: typeof value.entryPointCount === 'number' || typeof value.entryPointCount === 'string' ? String(value.entryPointCount) : 'unknown',
  };
};
const ACTIVE_PIPELINE_STAGE_IDS = [
  '3680633583', '3680633584', '3680633585', '3680633586', '3680633587', '3680633588', '3680633589',
  '3683126005', '3683126006', '3683126007', '3683126008', '3683126009', '3683126970', '3683126971',
];
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
    `selected package: ${payload.packageTier || 'unknown'}`,
    ...(payload.discoveryContext ? ['Discovery Summary:', `- Recommended Tier: ${payload.discoveryContext.recommendedTier}`, `- Property Size: ${payload.discoveryContext.propertySize}`, `- Coverage Need: ${payload.discoveryContext.coverageExpectation}`, `- Recording Desired: ${payload.discoveryContext.recordingPreference}`, `- Priority Concern: ${payload.discoveryContext.priorityConcerns}`] : []),
    `preferred contact method: ${payload.leadSummary.preferredContactMethod || 'Not provided'}`,
  ].join('\n');
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ from, to, bcc: audit.length > 0 ? audit : undefined, subject, text, html: `<pre>${text}</pre>` }),
  });
  if (!response.ok) return { ok: false as const, skipped: false, error: await response.text() };
  return { ok: true as const };
};

const sendCustomerAcknowledgementEmail = async (env: LeadSignalEnv, payload: any) => {
  const to = payload.customerEmail?.trim?.();
  const from = env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM;
  const apiKey = env.RESEND_API_KEY;
  if (!to || !from || !apiKey) return { ok: false as const, skipped: true, error: 'customer_ack_not_configured' };
  const subject = `[WNYHS] Request received — ${payload.requestId}`;
  const text = [
    'Thanks — we received your request.',
    `requestId: ${payload.requestId}`,
    `name: ${payload.customerName || 'Not provided'}`,
    `phone: ${payload.customerPhone || 'Not provided'}`,
    `email: ${to}`,
    `source route: ${payload.sourceRoute || 'api/lead-signal'}`,
    `vertical: ${payload.vertical || 'home_security'}`,
    `requested help: ${payload.requestedHelp || 'Not provided'}`,
    `selected package: ${payload.packageTier || 'unknown'}`,
    ...(payload.discoveryContext ? [`fit check completed: ${payload.discoveryContext.fitCheckCompleted ? 'yes' : 'no'}`, `recommended package: ${payload.discoveryContext.recommendedTier}`] : []),
    `preferred estimate window: ${payload.preferredWindow || 'Not provided'}`,
    '',
    'An operator will review this request and follow up to confirm next steps.',
  ].join('\n');
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ from, to, subject, text, html: `<pre>${text}</pre>` }),
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
  const appointmentRequest = await createPendingOwnerConfirmationAppointmentRequest({
    requestId,
    event: body.event,
    preferredEstimateDate: schedulingSummary.preferredEstimateDate,
    preferredEstimateTimeSlot: schedulingSummary.preferredEstimateTimeSlot,
    preferredWindowText: schedulingSummary.preferredWindowText,
    customerName: leadSummary.fullName || undefined,
    customerEmail: leadSummary.email || undefined,
    customerPhone: leadSummary.phone || undefined,
    requestedDate: schedulingSummary.preferredEstimateDate,
    requestedTimeWindow: schedulingSummary.preferredEstimateTimeSlot,
    timezone: 'America/New_York',
    source: 'lead_signal',
    env,
  });
  const sourceFamily = body?.sourceFamily || 'QR_SCAN';
  const packageTier = normalizePackageTier(body?.deal?.packageTier ?? body?.funnelContext?.packageTier ?? body?.funnelContext?.selectedPackage);
  const discoveryContext = normalizeDiscoveryContext(body?.discoveryContext);
  const normalizedPreferredContactMethod = normalizePreferredContactMethod(body?.request?.preferredContactMethod);
  const normalizedLeadSourcePlatform = normalizeLeadSourcePlatform(body?.assetSource || body?.source || body?.whereDidYouSeeUs);
  const normalizedFunnelStage = normalizeFunnelStage(body?.event);
  const normalizedDealPath = normalizeDealPath(body?.deal?.pathChoice || body?.pathChoice || 'onsite');
  const normalizedPathChoice = normalizePathChoice(body?.deal?.pathChoice || body?.pathChoice || 'onsite');
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
    `selectedPackage=${packageTier}`,
    `consent=${consentSummary}`,
  ].join(' | ');
  const contactNotes = [
    `requestedHelp: ${body?.request?.requestedHelp || 'n/a'}`,
    `whereDidYouSeeUs: ${body?.whereDidYouSeeUs || 'n/a'}`,
    `textConsent: ${body?.textConsent ? 'yes' : 'no'}`,
    `emailConsent: ${body?.emailConsent ? 'yes' : 'no'}`,
    `contactHoursAck: ${body?.contactTimeAcknowledgement ? 'yes' : 'no'}`,
    `selectedPackage: ${packageTier}`,
    `requestId: ${requestId}`, qrDetailSummary,
  ].join(' | ');

  const emailResult = await sendLeadSignalEmail(env, { event: body.event, timestampISO: nowIso, customerEmail: body.contact?.email, requestId, leadSummary, packageTier, discoveryContext });
  const notificationStatus = emailResult.ok ? 'sent' : emailResult.skipped ? 'skipped' : 'failed';
  const customerAckResult = await sendCustomerAcknowledgementEmail(env, {
    requestId,
    customerEmail: leadSummary.email || body.contact?.email || '',
    customerName: leadSummary.fullName,
    customerPhone: leadSummary.phone,
    sourceRoute: body.route || 'api/lead-signal',
    vertical: normalizedVerticalInterest,
    requestedHelp: leadSummary.requestedHelp,
    preferredWindow,
    packageTier,
    discoveryContext,
  });
  const customerAcknowledgementStatus = customerAckResult.ok ? 'sent' : customerAckResult.skipped ? 'skipped' : 'failed';

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

    const contactFilters = chooseHubSpotContactSearchFilters(body.contact?.email, body.contact?.phone);
    if (contactFilters.length === 0) {
      hubspot.contact = 'skipped';
      hubspot.status = 'partial';
      console.warn('[lead-signal] skipping HubSpot contact search: no email or phone', { requestId, sourceRoute: body.route || 'api/lead-signal' });
      return json({ ok: true, requestId, schedulingStatus: appointmentRequest.schedulingStatus, appointmentRequest, notification: { configured: true, attempted: true, status: notificationStatus, provider: 'resend' }, customerAcknowledgement: { configured: true, attempted: true, status: customerAcknowledgementStatus, provider: 'resend' }, hubspot }, 200);
    }

    const search = await hubspotRequest(env, 'POST', '/crm/v3/objects/contacts/search', {
      filterGroups: [{ filters: contactFilters }],
      properties: ['email', 'phone', 'firstname', 'lastname'], limit: 1,
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
        wny_contact_notes: stringifyHubSpotTextField(contactNotes),
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
        wny_lead_source_detail: stringifyHubSpotTextField({ qrDetailSummary, sourceContext: { sourceFamily, source: body?.source, assetSource: body?.assetSource, whereDidYouSeeUs: body?.whereDidYouSeeUs } }),
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
        const isQrEstimate = body.event === 'qr_estimate_requested';
        const dealStageId = getDealStageForCreate(env.HUBSPOT_ESTIMATE_INITIAL_STAGE_ID);
        let dealId = body?.deal?.dealId;
        if (!dealId && body?.deal?.quoteRef) {
          const foundDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', { filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: body.deal.quoteRef }] }], limit: 1 });
          if (foundDeal.ok) dealId = (foundDeal as any)?.data?.results?.[0]?.id;
        }
        if (!dealId && resolvedContactId) {
          const activeDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', { filterGroups: [{ filters: [{ propertyName: 'pipeline', operator: 'EQ', value: '2282258169' }, { propertyName: 'dealstage', operator: 'IN', values: ACTIVE_PIPELINE_STAGE_IDS }, { propertyName: 'associations.contact', operator: 'EQ', value: String(resolvedContactId) }] }], sorts: [{ propertyName: 'hs_lastmodifieddate', direction: 'DESCENDING' }], limit: 1 });
          if (activeDeal.ok) dealId = (activeDeal as any)?.data?.results?.[0]?.id;
          else console.warn('[lead-signal] active deal dedupe search failed; proceeding without dedupe', { requestId, contactId: resolvedContactId });
        }

        const dealProps = {
          dealname: buildEstimateDealName({ isQr: isQrEstimate, customerName: dealNameIdentity, requestId }),
          amount: body?.deal?.amount,
          wny_deal_vertical: 'home_security',
          wny_deal_path: normalizedDealPath,
          wny_path_choice: normalizedPathChoice,
          wny_request_id: requestId,
          wny_walkthrough_requested: true,
          wny_walkthrough_requested_at: submittedTimestamp,
          wny_walkthrough_status: 'requested',
          wny_walkthrough_preferred_date_1: body?.request?.preferredEstimateDate,
          wny_walkthrough_preferred_time_window_1: timeSlotToBucket(body?.request?.preferredEstimateTimeSlot),
          wny_walkthrough_notes: stringifyHubSpotTextField({ qrDetailSummary, appointmentRequest, request: body?.request }),
          wny_onsite_quote_required: true,
          wny_install_address: body?.contact?.address?.street,
          wny_install_city: body?.contact?.address?.city,
          wny_install_state: body?.contact?.address?.state,
          wny_install_zip: body?.contact?.address?.zip,
          wny_install_status: 'requested',
          wny_quote_ref: body?.deal?.quoteRef || requestId,
          wny_quote_status: 'not_started',
          dealstage: dealStageId,
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
              `selected package: ${packageTier}`,
              ...(discoveryContext ? [`Discovery Summary`, `- Recommended Tier: ${discoveryContext.recommendedTier}`, `- Property Size: ${discoveryContext.propertySize}`, `- Coverage Need: ${discoveryContext.coverageExpectation}`, `- Recording Desired: ${discoveryContext.recordingPreference}`, `- Priority Concern: ${discoveryContext.priorityConcerns}`, `- Entry Points: ${discoveryContext.entryPointCount}`] : []),
              `where customer saw us: ${body?.whereDidYouSeeUs || 'n/a'}`, `submitted timestamp: ${submittedTimestamp}`,
            ].join('\n');
            const note = await hubspotRequest(env, 'POST', '/crm/v3/objects/notes', { properties: { hs_note_body: noteBody, hs_timestamp: submittedTimestamp }, associations: [{ to: { id: resolvedContactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] }, { to: { id: resolvedDealId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 214 }] }] });
            hubspot.note = note.ok ? 'created' : 'failed';

            const etNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
            const due = new Date(etNow);
            if (etNow.getHours() < 19) due.setHours(etNow.getHours() + 2, 0, 0, 0);
            else due.setDate(due.getDate() + 1), due.setHours(10, 0, 0, 0);
            const taskBody = `requestId: ${requestId}\nwindow: ${preferredWindow || 'n/a'}\nphone: ${leadSummary.phone || 'n/a'}\nemail: ${leadSummary.email || 'n/a'}\nrequested help: ${body?.request?.requestedHelp || 'n/a'}`;
            const existingTask = await hubspotRequest(env, 'POST', '/crm/v3/objects/tasks/search', { filterGroups: [{ filters: [{ propertyName: 'associations.deal', operator: 'EQ', value: String(resolvedDealId) }, { propertyName: 'hs_task_subject', operator: 'EQ', value: 'Follow up on QR estimate request' }, { propertyName: 'hs_task_status', operator: 'IN', values: ['NOT_STARTED', 'IN_PROGRESS', 'WAITING'] }] }], limit: 1 });
            if (existingTask.ok && ((existingTask as any)?.data?.results?.length || 0) > 0) hubspot.task = 'skipped_duplicate';
            else {
              const task = await hubspotRequest(env, 'POST', '/crm/v3/objects/tasks', { properties: { hs_task_subject: 'Follow up on QR estimate request', hs_task_body: taskBody, hs_task_status: 'NOT_STARTED', hs_timestamp: due.toISOString() }, associations: [{ to: { id: resolvedContactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 204 }] }, { to: { id: resolvedDealId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 216 }] }] });
              hubspot.task = task.ok ? 'created' : 'failed';
            }
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
          const isQrEstimate = body.event === 'qr_estimate_requested';
          const dealStageId = getDealStageForCreate(env.HUBSPOT_ESTIMATE_INITIAL_STAGE_ID);
          let dealId = body?.deal?.dealId;
          if (!dealId && body?.deal?.quoteRef) {
            const foundDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', { filterGroups: [{ filters: [{ propertyName: 'wny_quote_ref', operator: 'EQ', value: body.deal.quoteRef }] }], limit: 1 });
            if (foundDeal.ok) dealId = (foundDeal as any)?.data?.results?.[0]?.id;
          }
          if (!dealId && resolvedContactId) {
            const activeDeal = await hubspotRequest(env, 'POST', '/crm/v3/objects/deals/search', { filterGroups: [{ filters: [{ propertyName: 'pipeline', operator: 'EQ', value: '2282258169' }, { propertyName: 'dealstage', operator: 'IN', values: ACTIVE_PIPELINE_STAGE_IDS }, { propertyName: 'associations.contact', operator: 'EQ', value: String(resolvedContactId) }] }], sorts: [{ propertyName: 'hs_lastmodifieddate', direction: 'DESCENDING' }], limit: 1 });
            if (activeDeal.ok) dealId = (activeDeal as any)?.data?.results?.[0]?.id;
            else console.warn('[lead-signal] active deal dedupe search failed; proceeding without dedupe', { requestId, contactId: resolvedContactId });
          }
          const dealProps = {
            dealname: buildEstimateDealName({ isQr: isQrEstimate, customerName: dealNameIdentity, requestId }),
            amount: body?.deal?.amount,
            wny_deal_vertical: 'home_security',
            wny_deal_path: normalizedDealPath,
            wny_path_choice: normalizedPathChoice,
            wny_request_id: requestId,
            wny_walkthrough_requested: true,
            wny_walkthrough_requested_at: submittedTimestamp,
            wny_walkthrough_status: 'requested',
            wny_walkthrough_preferred_date_1: body?.request?.preferredEstimateDate,
            wny_walkthrough_preferred_time_window_1: timeSlotToBucket(body?.request?.preferredEstimateTimeSlot),
            wny_walkthrough_notes: stringifyHubSpotTextField({ qrDetailSummary, appointmentRequest, request: body?.request }),
            wny_onsite_quote_required: true,
            wny_install_address: body?.contact?.address?.street,
            wny_install_city: body?.contact?.address?.city,
            wny_install_state: body?.contact?.address?.state,
            wny_install_zip: body?.contact?.address?.zip,
            wny_install_status: 'requested',
            wny_quote_ref: body?.deal?.quoteRef || requestId,
            wny_quote_status: 'not_started',
          dealstage: dealStageId,
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
                `selected package: ${packageTier}`,
                ...(discoveryContext ? [`Discovery Summary`, `- Recommended Tier: ${discoveryContext.recommendedTier}`, `- Property Size: ${discoveryContext.propertySize}`, `- Coverage Need: ${discoveryContext.coverageExpectation}`, `- Recording Desired: ${discoveryContext.recordingPreference}`, `- Priority Concern: ${discoveryContext.priorityConcerns}`, `- Entry Points: ${discoveryContext.entryPointCount}`] : []),
                `where customer saw us: ${body?.whereDidYouSeeUs || 'n/a'}`, `submitted timestamp: ${submittedTimestamp}`,
              ].join('\n');
              const note = await hubspotRequest(env, 'POST', '/crm/v3/objects/notes', { properties: { hs_note_body: noteBody, hs_timestamp: submittedTimestamp }, associations: [{ to: { id: resolvedContactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }] }, { to: { id: resolvedDealId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 214 }] }] });
              hubspot.note = note.ok ? 'created' : 'failed';
              const etNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
              const due = new Date(etNow);
              if (etNow.getHours() < 19) due.setHours(etNow.getHours() + 2, 0, 0, 0);
              else due.setDate(due.getDate() + 1), due.setHours(10, 0, 0, 0);
              const taskBody = `requestId: ${requestId}\nwindow: ${preferredWindow || 'n/a'}\nphone: ${leadSummary.phone || 'n/a'}\nemail: ${leadSummary.email || 'n/a'}\nrequested help: ${body?.request?.requestedHelp || 'n/a'}`;
              const existingTask = await hubspotRequest(env, 'POST', '/crm/v3/objects/tasks/search', { filterGroups: [{ filters: [{ propertyName: 'associations.deal', operator: 'EQ', value: String(resolvedDealId) }, { propertyName: 'hs_task_subject', operator: 'EQ', value: 'Follow up on QR estimate request' }, { propertyName: 'hs_task_status', operator: 'IN', values: ['NOT_STARTED', 'IN_PROGRESS', 'WAITING'] }] }], limit: 1 });
              if (existingTask.ok && ((existingTask as any)?.data?.results?.length || 0) > 0) hubspot.task = 'skipped_duplicate';
              else {
                const task = await hubspotRequest(env, 'POST', '/crm/v3/objects/tasks', { properties: { hs_task_subject: 'Follow up on QR estimate request', hs_task_body: taskBody, hs_task_status: 'NOT_STARTED', hs_timestamp: due.toISOString() }, associations: [{ to: { id: resolvedContactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 204 }] }, { to: { id: resolvedDealId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 216 }] }] });
                hubspot.task = task.ok ? 'created' : 'failed';
              }
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

  const responseBody: Record<string, unknown> = {
    ok: true,
    requestId,
    schedulingStatus: appointmentRequest.schedulingStatus,
    appointmentRequest,
    notification: { configured: true, attempted: true, status: notificationStatus, provider: 'resend' },
    customerAcknowledgement: { configured: true, attempted: true, status: customerAcknowledgementStatus, provider: 'resend' },
    hubspot,
  };
  if (!isProduction(env)) responseBody.diagnostics = { event: body.event, route: body.route || 'api/lead-signal' };
  return json(responseBody, 200);
};
