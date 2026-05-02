import { getConfiguredRecipients, sendOperationalEmail } from './_email';
const asString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const customerName = asString(body.customerName) || 'unknown';
  const customerEmail = asString(body.customerEmail);
  const customerPhone = asString(body.customerPhone);
  if (!customerPhone) return res.status(400).json({ ok: false, error: 'Missing required fields' });
  const to = getConfiguredRecipients('MAIL_INSTALL_TO');
  const bcc = getConfiguredRecipients('MAIL_AUDIT_TO');
  if (!to.length || !bcc.length) return res.status(500).json({ ok: false, error: 'Email routing not configured' });
  const text = Object.entries(body).map(([k,v])=>`${k}: ${typeof v==='string'?v:JSON.stringify(v)}`).join('\n');
  const result = await sendOperationalEmail({ to, bcc, replyTo: customerEmail || undefined, subject: `[WNYHS Schedule] Install request — ${customerName}`, text, html: `<pre>${text}</pre>` });
  return res.status(result.ok ? 200 : 500).json(result);
}
