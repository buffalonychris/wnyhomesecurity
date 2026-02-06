import { sendLeadSignalEmail } from './_email.js';

type LeadSignalRequest = {
  event?: string;
  customerEmail?: string;
  referenceId?: string;
  resumeUrl?: string;
  verifyUrl?: string;
  route?: string;
};

const getBody = (req: { body?: unknown }) => {
  if (!req.body) return null;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body) as Record<string, unknown>;
    } catch (error) {
      console.error('Failed to parse JSON body', error);
      return null;
    }
  }
  return req.body as Record<string, unknown>;
};

export default async function handler(req: { method?: string; body?: unknown }, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, provider: 'mock', error: 'Method Not Allowed' });
    return;
  }

  const body = getBody(req) as LeadSignalRequest | null;
  if (!body) {
    res.status(400).json({ ok: false, provider: 'mock', error: 'Invalid JSON body' });
    return;
  }

  const result = await sendLeadSignalEmail({
    event: body.event || 'Lead Signal: Payment Next Steps Requested',
    timestampISO: new Date().toISOString(),
    customerEmail: body.customerEmail,
    referenceId: body.referenceId,
    resumeUrl: body.resumeUrl,
    verifyUrl: body.verifyUrl,
    route: body.route || 'api/lead-signal',
  });

  res.status(200).json(result);
}
