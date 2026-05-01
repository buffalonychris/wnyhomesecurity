import { sendLeadSignalEmail } from './_email.js';
import { createOrUpdateDeal, findOrCreateContact } from './_hubspot.js';

type LeadSignalRequest = any;
const getBody = (req: { body?: unknown }) => {
  if (!req.body) return null;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body) as Record<string, unknown>; } catch { return null; }
  }
  return req.body as Record<string, unknown>;
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
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  const body = getBody(req) as LeadSignalRequest | null;
  if (!body) return res.status(400).json({ ok: false, error: 'Invalid JSON body' });

  const now = new Date().toISOString();
  const emailResult = await sendLeadSignalEmail({
    event: body.event || 'Lead Signal', timestampISO: now, customerEmail: body.contact?.email || body.customerEmail,
    referenceId: body.referenceId || body.deal?.quoteRef, resumeUrl: body.resumeUrl, verifyUrl: body.verifyUrl, route: body.route || 'api/lead-signal',
  });

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
    console.error('lead-signal hubspot sync failed', error);
  }

  res.status(200).json({ ok: true, email: emailResult, hubspot });
}
