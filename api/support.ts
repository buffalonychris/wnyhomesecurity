import { getConfiguredRecipients, sendOperationalEmail } from './_email';
const asString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const email = asString(body.email);
  const name = asString(body.name) || 'unknown';
  const topic = asString(body.topic) || name;
  if (!email) return res.status(400).json({ ok: false, error: 'Missing email' });
  const to = getConfiguredRecipients('MAIL_SUPPORT_TO');
  const bcc = getConfiguredRecipients('MAIL_AUDIT_TO');
  if (!to.length || !bcc.length) return res.status(500).json({ ok: false, error: 'Email routing not configured' });
  const text = [`Name: ${name}`, `Email: ${email}`, `Topic: ${topic}`, `Message: ${asString(body.message) || '—'}`, `Page: ${asString(body.pageRoute) || '—'}`].join('\n');
  const result = await sendOperationalEmail({ to, bcc, replyTo: email, subject: `[WNYHS Support] ${topic}`, text, html: `<pre>${text}</pre>` });
  return res.status(result.ok ? 200 : 500).json(result);
}
