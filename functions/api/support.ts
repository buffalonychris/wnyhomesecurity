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

const makeSupportRequestId = () => `support_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

export const onRequest: PagesFunction = async ({ request, env }) => {
  if (request.method !== 'POST') {
    return json({ ok: false, errorCode: 'METHOD_NOT_ALLOWED', userMessage: 'Unsupported request method.' }, 405);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, errorCode: 'INVALID_JSON', userMessage: 'Invalid support request payload.' }, 400);
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const topic = typeof body.topic === 'string' ? body.topic.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const pageRoute = typeof body.pageRoute === 'string' ? body.pageRoute.trim() : '/support';
  const requestId = makeSupportRequestId();

  if (!name || !email || !topic || !message) {
    return json({ ok: false, errorCode: 'MISSING_REQUIRED_FIELDS', userMessage: 'Name, email, topic, and message are required.' }, 400);
  }

  const from = env.RESEND_FROM_EMAIL || env.MAIL_FROM || env.EMAIL_FROM;
  const apiKey = env.RESEND_API_KEY;
  const operatorEmails = parseEmails(env.LEAD_SIGNAL_NOTIFY_TO || env.MAIL_TO || env.SUPPORT_NOTIFY_TO);
  const auditEmails = parseEmails(env.LEAD_SIGNAL_AUDIT_EMAIL || env.MAIL_AUDIT_TO);

  if (!from || !apiKey || operatorEmails.length === 0) {
    return json({ ok: false, errorCode: 'EMAIL_NOT_CONFIGURED', userMessage: 'Support email runtime is not configured yet. Please call or text us for immediate help.' }, 503);
  }

  const timestampISO = new Date().toISOString();
  const operatorSubject = `[WNYHS Support] ${topic} (${requestId})`;
  const operatorText = [
    'New support request received.',
    '',
    `requestId: ${requestId}`,
    `timestamp: ${timestampISO}`,
    `name: ${name}`,
    `email: ${email}`,
    `topic: ${topic}`,
    `pageRoute: ${pageRoute}`,
    '',
    'message:',
    message,
  ].join('\n');

  const operatorResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from,
      to: operatorEmails,
      bcc: auditEmails.length > 0 ? auditEmails : undefined,
      subject: operatorSubject,
      text: operatorText,
      html: `<pre>${operatorText}</pre>`,
    }),
  });

  if (!operatorResponse.ok) {
    return json({ ok: false, errorCode: 'OPERATOR_EMAIL_FAILED', userMessage: 'We could not send your support request right now. Please try again, or call/text us.' }, 502);
  }

  const ackText = [
    `Hi ${name},`,
    '',
    'Thanks for contacting WNY Home Security support. We received your request.',
    `Request ID: ${requestId}`,
    `Topic: ${topic}`,
    '',
    'A team member will follow up during normal business operations.',
    'If your request is urgent, please call or text us directly.',
  ].join('\n');

  const ackResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from,
      to: [email],
      bcc: auditEmails.length > 0 ? auditEmails : undefined,
      subject: `[WNYHS] Support request received — ${requestId}`,
      text: ackText,
      html: `<pre>${ackText}</pre>`,
    }),
  });

  if (!ackResponse.ok) {
    console.warn('[support] customer acknowledgement email failed', { requestId, httpStatus: ackResponse.status });
  }

  return json({ ok: true, requestId, acknowledgementSent: ackResponse.ok });
};
