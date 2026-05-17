const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const parseEmails = (value?: string) =>
  (value || '')
    .split(',')
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

const isValidEmail = (value: unknown): value is string => typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const onRequest: PagesFunction = async ({ request, env }) => {
  if (request.method !== 'POST') return json({ ok: false, provider: 'resend', error: 'Method not allowed' }, 405);

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, provider: 'resend', error: 'Invalid JSON payload.' }, 400);
  }

  const recipient = typeof body.to === 'string' ? body.to.trim() : '';
  if (!isValidEmail(recipient)) {
    return json({ ok: false, provider: 'resend', error: 'A valid recipient email is required.' }, 400);
  }

  const from = env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM;
  const apiKey = env.RESEND_API_KEY;
  const operatorEmails = parseEmails(env.LEAD_SIGNAL_NOTIFY_TO || env.MAIL_TO || env.SUPPORT_NOTIFY_TO);
  const auditEmails = parseEmails(env.LEAD_SIGNAL_AUDIT_EMAIL || env.MAIL_AUDIT_TO);

  if (!from || !apiKey || operatorEmails.length === 0) {
    return json({ ok: false, provider: 'resend', error: 'Quote email runtime is not configured.' }, 503);
  }

  const links = (body.links as Record<string, unknown> | undefined) ?? {};
  const context = (body.context as Record<string, unknown> | undefined) ?? {};
  const quoteTier = typeof context.tier === 'string' ? context.tier : 'recommended system';
  const customerName = typeof context.name === 'string' ? context.name : 'there';

  const reviewDisclaimer =
    'This estimate summary is for review only. Final pricing, installation scope, and agreement details are confirmed directly with WNY Home Security before any work is scheduled.';

  const customerLines = [
    `Hi ${customerName},`,
    '',
    'Here is your WNY Home Security estimate summary for review.',
    reviewDisclaimer,
    '',
    `Recommended package: ${quoteTier}`,
    typeof links.reviewUrl === 'string' ? `Review quote: ${links.reviewUrl}` : null,
    typeof links.printUrl === 'string' ? `Print/save quote: ${links.printUrl}` : null,
    typeof links.resumeUrl === 'string' ? `Resume your progress: ${links.resumeUrl}` : null,
  ].filter(Boolean).join('\n');

  const operatorLines = [
    'Quote summary delivered to customer.',
    '',
    `Recipient: ${recipient}`,
    `Tier/package: ${quoteTier}`,
    typeof links.reviewUrl === 'string' ? `Review URL: ${links.reviewUrl}` : null,
    typeof links.resumeUrl === 'string' ? `Resume URL: ${links.resumeUrl}` : null,
    '',
    `Disclaimer shown: ${reviewDisclaimer}`,
  ].filter(Boolean).join('\n');

  const [customerResponse, operatorResponse] = await Promise.all([
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from,
        to: [recipient],
        bcc: auditEmails.length > 0 ? auditEmails : undefined,
        subject: '[WNYHS] Your estimate summary is ready for review',
        text: customerLines,
        html: `<pre>${customerLines}</pre>`,
      }),
    }),
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from,
        to: operatorEmails,
        bcc: auditEmails.length > 0 ? auditEmails : undefined,
        subject: `[WNYHS Quote] Estimate summary sent to ${recipient}`,
        text: operatorLines,
        html: `<pre>${operatorLines}</pre>`,
      }),
    }),
  ]);

  if (!customerResponse.ok || !operatorResponse.ok) {
    return json({ ok: false, provider: 'resend', error: 'Quote email delivery failed.' }, 502);
  }

  const responseBody = (await customerResponse.json().catch(() => null)) as { id?: string } | null;
  return json({ ok: true, provider: 'resend', id: responseBody?.id });
};
