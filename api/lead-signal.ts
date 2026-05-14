import { sendLeadSignalEmail } from './_email.js';
import { createOrUpdateDeal, findOrCreateContact } from './_hubspot.js';

type LeadSignalRequest = any;
const isString = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
const createRequestId = () => `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
const getBody = (req: { body?: unknown }) => {
  if (!req.body) return null;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body) as Record<string, unknown>; } catch { return null; }
  }
  return req.body as Record<string, unknown>;
};

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

export default async function handler(req: { method?: string; body?: unknown }, res: any) {
  const requestId = createRequestId();
  const isDev = process.env.NODE_ENV !== 'production';
  const fail = (status: number, errorCode: string, userMessage: string, debugMessage?: string) => {
    const payload: Record<string, unknown> = { ok: false, requestId, errorCode, userMessage };
    if (isDev && debugMessage) payload.debugMessage = debugMessage;
    return res.status(status).json(payload);
  };
  if (req.method !== 'POST') return fail(405, 'INTERNAL_ERROR', 'We couldn’t submit your request. Please try again.', 'Method Not Allowed');
  const body = getBody(req) as LeadSignalRequest | null;
  if (!body) {
    console.error('[lead-signal] invalid json body', { requestId });
    return fail(400, 'INVALID_JSON', 'We couldn’t submit your request. Please try again.', 'Invalid JSON body');
  }
  const validationError = validateRequest(body);
  if (validationError) {
    console.error('[lead-signal] invalid payload', { requestId, event: body?.event, validationError });
    return fail(400, 'INVALID_QR_LEAD_PAYLOAD', 'We couldn’t submit your request. Please check your information and try again.', validationError);
  }

  const now = new Date().toISOString();
  const leadSummary = buildQrLeadSummary(body, now);
  console.info('[lead-signal] accepted', { requestId, event: body.event, source: body?.source, leadSummary });
  const emailResult = await sendLeadSignalEmail({
    event: body.event || 'Lead Signal', timestampISO: now, customerEmail: body.contact?.email || body.customerEmail,
    referenceId: body.referenceId || body.deal?.quoteRef, resumeUrl: body.resumeUrl, verifyUrl: body.verifyUrl, route: body.route || 'api/lead-signal',
  });
  if (!emailResult.ok) {
    console.error('[lead-signal] notification delivery issue', { requestId, error: emailResult.error });
    return fail(502, 'EMAIL_NOTIFICATION_FAILED', 'We couldn’t submit your request. Please try again.', 'Notification delivery failed');
  }

  let hubspot: any = { ok: false, skipped: true };
  try {
    const contactResult: any = await findOrCreateContact({
      email: body.contact?.email, firstName: body.contact?.firstName, lastName: body.contact?.lastName, phone: body.contact?.phone,
      address: body.contact?.address, wny_walkthrough_interest: body.event === 'walkthrough_requested' ? true : undefined,
      wny_last_walkthrough_request_at: body.event === 'walkthrough_requested' ? now : undefined,
      wny_preferred_walkthrough_window: body.walkthrough?.preferredTimeWindow1,
    });
    const contactId = contactResult?.data?.id;
    const properties: Record<string, unknown> = {
      dealstage: eventToStage[body.event], wny_path_choice: body.pathChoice,
      wny_package_tier: body.deal?.packageTier, amount: body.deal?.amount,
      wny_quote_ref: body.deal?.quoteRef, wny_walkthrough_requested: body.walkthrough?.requested,
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
    hubspot = await createOrUpdateDeal({ dealId: body.deal?.dealId, quoteRef: body.deal?.quoteRef, properties, contactId, dealname: `WNYHS ${body.event} ${now}` });
  } catch (error) {
    console.error('[lead-signal] hubspot sync failed', { requestId, error });
    return fail(502, 'CRM_SYNC_FAILED', 'We couldn’t submit your request. Please try again.', 'HubSpot sync failed');
  }

  res.status(200).json({ ok: true, requestId, email: emailResult, hubspot, leadSummary });
}
