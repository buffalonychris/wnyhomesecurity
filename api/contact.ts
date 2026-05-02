import { getConfiguredRecipients, sendOperationalEmail } from './_email';

const asString = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const name = asString(body.name) || 'unknown';
  const email = asString(body.email);
  const phone = asString(body.phone);
  if (!phone || !email) return res.status(400).json({ ok: false, error: 'Missing required fields' });

  const to = getConfiguredRecipients('MAIL_SALES_TO');
  const audit = getConfiguredRecipients('MAIL_AUDIT_TO');
  const bcc = Array.from(new Set([...audit]));
  if (!to.length || !bcc.length) return res.status(500).json({ ok: false, error: 'Email routing not configured' });

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Address / ZIP: ${asString(body.address) || '—'}`,
    `Best time: ${asString(body.bestTime) || '—'}`,
    `Needs: ${asString(body.needs) || '—'}`,
    `Notes: ${asString(body.notes) || '—'}`,
    `Page: ${asString(body.pageRoute) || '—'}`,
  ].join('\n');

  const result = await sendOperationalEmail({
    to,
    bcc,
    replyTo: email,
    subject: `[WNYHS Lead] Contact / Intake — ${name}`,
    text,
    html: `<pre>${text}</pre>`,
  });

  return res.status(result.ok ? 200 : 500).json(result);
}
