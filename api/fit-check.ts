import { getConfiguredRecipients, sendOperationalEmail } from './_email';
const asString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const name = asString(body.name) || 'unknown';
  const recommendedTier = asString(body.recommendedTier) || 'incomplete';
  const customerEmail = asString(body.customerEmail);
  const to = getConfiguredRecipients('MAIL_SALES_TO');
  const bcc = getConfiguredRecipients('MAIL_AUDIT_TO');
  if (!to.length || !bcc.length) return res.status(500).json({ ok: false, error: 'Email routing not configured' });
  const text = Object.entries(body).map(([k,v])=>`${k}: ${typeof v==='string'?v:JSON.stringify(v)}`).join('\n');
  const result = await sendOperationalEmail({ to, bcc, replyTo: customerEmail || undefined, subject: `[WNYHS Fit Check] ${recommendedTier} — ${name}`, text, html: `<pre>${text}</pre>` });
  return res.status(result.ok ? 200 : 500).json(result);
}
