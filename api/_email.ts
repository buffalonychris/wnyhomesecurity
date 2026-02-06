type EmailLinks = {
  reviewUrl?: string;
  printUrl: string;
  verifyUrl: string;
  resumeUrl: string;
};

type EmailPayload = {
  to: string;
  meta: {
    docType: string;
    reference: string;
    issuedAtISO: string;
    hashShort?: string;
  } & Record<string, unknown>;
  links: EmailLinks;
  context?: {
    name?: string;
    city?: string;
    tier?: string;
  };
};

type EmailProvider = 'resend' | 'smtp' | 'mock';

type EmailSuccess = { ok: true; provider: EmailProvider; id?: string };

type EmailFailure = { ok: false; provider: EmailProvider; error: string };

type EmailResult = EmailSuccess | EmailFailure;

type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

type LeadSignalPayload = {
  event: string;
  timestampISO: string;
  customerEmail?: string;
  referenceId?: string;
  resumeUrl?: string;
  verifyUrl?: string;
  route: string;
};

const isEmailFailure = (result: EmailResult): result is EmailFailure => result.ok === false;

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const getEmailProvider = (): EmailProvider => {
  const provider = (process.env.EMAIL_PROVIDER || 'mock').toLowerCase();
  if (provider === 'resend' || provider === 'smtp' || provider === 'mock') return provider;
  return 'mock';
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

const validatePayload = (input: Record<string, unknown> | null): { valid: boolean; error?: string; payload?: EmailPayload } => {
  if (!input) return { valid: false, error: 'Invalid JSON body' };
  const { to, meta, links, context } = input as EmailPayload;

  if (!to || typeof to !== 'string' || !isEmail(to)) return { valid: false, error: 'to is required and must be an email' };
  if (!meta || typeof meta !== 'object') return { valid: false, error: 'meta is required' };
  if (!links || typeof links !== 'object') return { valid: false, error: 'links is required' };
  if (!('printUrl' in (links as EmailLinks)) || !('verifyUrl' in (links as EmailLinks)) || !('resumeUrl' in (links as EmailLinks))) {
    return { valid: false, error: 'links must include printUrl, verifyUrl, and resumeUrl' };
  }

  return { valid: true, payload: { to, meta, links: links as EmailLinks, context } };
};

const renderButton = (href: string, label: string) =>
  `<p style="margin:14px 0"><a href="${href}" style="background:#f5c042;color:#0c0b0b;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:700">${label}</a></p>`;

const buildContent = (payload: EmailPayload, docLabel: 'Quote' | 'Agreement') => {
  const reference = (payload.meta.reference as string) || docLabel;
  const subject = `Reliable Elder Care — ${docLabel} ${reference}`;
  const hash = (payload.meta.hashShort as string) || '';
  const issuedAt = (payload.meta.issuedAtISO as string) || '';
  const header = '<p style="margin:0 0 12px 0;font-size:16px;font-weight:700">Your official copy is ready.</p>';
  const buttons = [
    renderButton(payload.links.printUrl, 'View / Print (legal copy)'),
    renderButton(payload.links.verifyUrl, 'Verify authenticity'),
    renderButton(payload.links.resumeUrl, 'Resume where you left off'),
  ];
  if (payload.links.reviewUrl) {
    buttons.push(renderButton(payload.links.reviewUrl, 'Review page'));
  }

  const plainLinks = [
    `View / Print: ${payload.links.printUrl}`,
    `Verify authenticity: ${payload.links.verifyUrl}`,
    `Resume: ${payload.links.resumeUrl}`,
    payload.links.reviewUrl ? `Review: ${payload.links.reviewUrl}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const hashLine = hash ? `<p style="margin:10px 0;color:#444">Reference: ${reference} • Hash: ${hash}</p>` : '';
  const contextLine = [payload.context?.name, payload.context?.city, payload.context?.tier]
    .filter(Boolean)
    .join(' • ');
  const contextMarkup = contextLine ? `<p style="margin:10px 0;color:#444">Context: ${contextLine}</p>` : '';

  const disclaimers = [
    'This message is informational only and not medical advice.',
    'If there is an emergency or urgent safety concern, call 911.',
    'Do not share this link publicly. It includes your verification token.',
  ]
    .map((item) => `<li>${item}</li>`)
    .join('');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;font-size:15px;color:#0c0b0b">
      ${header}
      <p style="margin:0 0 12px 0">Issued: ${issuedAt || 'timestamp pending'} • ${docLabel} ${reference}</p>
      ${buttons.join('')}
      ${hashLine}
      ${contextMarkup}
      <p style="margin:14px 0 6px 0;font-weight:700">Links</p>
      <p style="margin:0 0 12px 0">${plainLinks.replace(/\n/g, '<br/>')}</p>
      <p style="margin:14px 0 6px 0;font-weight:700">Disclaimers</p>
      <ul style="margin:0 0 12px 18px;padding:0">${disclaimers}</ul>
    </div>
  `;

  const text = [
    'Your official copy is ready.',
    `Issued: ${issuedAt || 'timestamp pending'} • ${docLabel} ${reference}`,
    plainLinks,
    hash ? `Reference: ${reference} • Hash: ${hash}` : '',
    contextLine ? `Context: ${contextLine}` : '',
    '',
    'Disclaimers:',
    '- This message is informational only and not medical advice.',
    '- If there is an emergency or urgent safety concern, call 911.',
    '- Do not share this link publicly. It includes your verification token.',
  ]
    .filter(Boolean)
    .join('\n');

  return { subject, html, text };
};

const sendViaResend = async (message: SendEmailInput): Promise<EmailResult> => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) return { ok: false, provider: 'resend', error: 'Resend not configured' };

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text,
      reply_to: message.replyTo,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    return { ok: false, provider: 'resend', error: errorText || `Resend request failed (${res.status})` };
  }

  const json = (await res.json()) as { id?: string };
  return { ok: true, provider: 'resend', id: json.id };
};

const sendViaSmtp = async (message: SendEmailInput): Promise<EmailResult> => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM) {
    return { ok: false, provider: 'smtp', error: 'SMTP not configured' };
  }

  const nodemailer = await import('nodemailer');
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const result = await transporter.sendMail({
    from: EMAIL_FROM,
    to: message.to,
    subject: message.subject,
    text: message.text,
    html: message.html,
    replyTo: message.replyTo,
  });

  return { ok: true, provider: 'smtp', id: result.messageId };
};

const sendEmail = async (message: SendEmailInput): Promise<EmailResult> => {
  try {
    const provider = getEmailProvider();
    if (provider === 'resend') {
      return await sendViaResend(message);
    }
    if (provider === 'smtp') {
      return await sendViaSmtp(message);
    }
    console.log('[mock-email]', { to: message.to, subject: message.subject });
    return { ok: true, provider: 'mock' };
  } catch (error) {
    return {
      ok: false,
      provider: getEmailProvider(),
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

const buildLeadSignalContent = (payload: LeadSignalPayload) => {
  const lines = [
    `Event: ${payload.event}`,
    `Timestamp: ${payload.timestampISO}`,
    `Customer email: ${payload.customerEmail ?? 'Not provided'}`,
    `Reference ID: ${payload.referenceId ?? 'Not provided'}`,
    `Resume link: ${payload.resumeUrl ?? 'Not provided'}`,
    `Verify link: ${payload.verifyUrl ?? 'Not provided'}`,
    `Route/action: ${payload.route}`,
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;font-size:15px;color:#0c0b0b">
      <p style="margin:0 0 12px 0;font-size:16px;font-weight:700">${payload.event}</p>
      <ul style="margin:0 0 12px 18px;padding:0">
        ${lines.map((line) => `<li>${line}</li>`).join('')}
      </ul>
    </div>
  `;

  return {
    subject: payload.event,
    html,
    text: lines.join('\n'),
  };
};

export const sendLeadSignalEmail = async (payload: LeadSignalPayload): Promise<EmailResult> => {
  const adminTo = process.env.EMAIL_ADMIN_TO;
  if (!adminTo) {
    return { ok: false, provider: getEmailProvider(), error: 'Admin email not configured' };
  }
  const content = buildLeadSignalContent(payload);
  return sendEmail({
    to: adminTo,
    subject: content.subject,
    html: content.html,
    text: content.text,
    replyTo: payload.customerEmail,
  });
};

export const handleEmailRequest = async (
  req: { method?: string; body?: unknown },
  res: { status: (code: number) => { json: (data: EmailResult) => void } },
  docLabel: 'Quote' | 'Agreement',
) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, provider: 'mock', error: 'Method Not Allowed' });
    return;
  }

  const { valid, error, payload } = validatePayload(getBody(req));
  if (!valid || !payload) {
    res.status(400).json({ ok: false, provider: 'mock', error: error || 'Invalid payload' });
    return;
  }

  const content = buildContent(payload, docLabel);
  const eventName = docLabel === 'Quote' ? 'Lead Signal: Quote Email Requested' : 'Lead Signal: Agreement Email Requested';
  const routeName = docLabel === 'Quote' ? 'api/send-quote' : 'api/send-agreement';

  try {
    const result = await sendEmail({
      to: payload.to,
      subject: content.subject,
      html: content.html,
      text: content.text,
    });

    const leadSignal = await sendLeadSignalEmail({
      event: eventName,
      timestampISO: new Date().toISOString(),
      customerEmail: payload.to,
      referenceId: (payload.meta.reference as string) || payload.meta.docType?.toString(),
      resumeUrl: payload.links.resumeUrl,
      verifyUrl: payload.links.verifyUrl,
      route: routeName,
    });

    if (isEmailFailure(result)) {
      console.error('Email send failed', result.error);
    }
    if (isEmailFailure(leadSignal)) {
      console.error('Lead signal send failed', leadSignal.error);
    }

    res.status(200).json(result);
  } catch (err) {
    console.error('Email send error', err);
    res.status(200).json({
      ok: false,
      provider: getEmailProvider(),
      error: err instanceof Error ? err.message : 'Unknown error',
    });
  }
};

export type { EmailPayload, EmailResult };
