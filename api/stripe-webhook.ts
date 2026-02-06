import { createHmac, timingSafeEqual as timingSafeEqualBuffer } from 'crypto';

type RequestLike = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};

type StripeWebhookEvent = {
  type?: string;
  data?: { object?: { id?: string; metadata?: Record<string, string> } };
};

const getRawBody = (body: unknown): string | null => {
  if (!body) return null;
  if (typeof body === 'string') return body;
  if (body instanceof Buffer) return body.toString('utf8');
  return null;
};

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not configured`);
  }
  return value;
};

const parseSignatureHeader = (header: string) => {
  const parts = header.split(',');
  const timestamp = parts.find((entry) => entry.startsWith('t='))?.slice(2);
  const signatures = parts.filter((entry) => entry.startsWith('v1=')).map((entry) => entry.slice(3));
  return { timestamp, signatures };
};

const timingSafeEqual = (a: string, b: string) => {
  const aBuffer = Buffer.from(a, 'utf8');
  const bBuffer = Buffer.from(b, 'utf8');
  if (aBuffer.length !== bBuffer.length) return false;
  return timingSafeEqualBuffer(aBuffer, bBuffer);
};

const verifySignature = (payload: string, signatureHeader: string, secret: string) => {
  const { timestamp, signatures } = parseSignatureHeader(signatureHeader);
  if (!timestamp || signatures.length === 0) return false;

  const expected = createHmac('sha256', secret)
    .update(`${timestamp}.${payload}`, 'utf8')
    .digest('hex');

  return signatures.some((signature) => timingSafeEqual(signature, expected));
};

export default async function handler(req: RequestLike, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  let webhookSecret: string;

  try {
    requireEnv('STRIPE_SECRET_KEY');
    webhookSecret = requireEnv('STRIPE_WEBHOOK_SECRET');
  } catch (error) {
    console.error('Stripe webhook misconfiguration', error);
    res.status(500).json({ ok: false, error: 'Stripe webhook not configured.' });
    return;
  }

  const signature = req.headers?.['stripe-signature'];
  if (!signature || Array.isArray(signature)) {
    res.status(400).json({ ok: false, error: 'Missing Stripe signature.' });
    return;
  }

  const rawBody = getRawBody(req.body);
  if (!rawBody) {
    res.status(400).json({ ok: false, error: 'Webhook requires raw body string.' });
    return;
  }

  if (!verifySignature(rawBody, signature, webhookSecret)) {
    res.status(400).json({ ok: false, error: 'Invalid webhook signature.' });
    return;
  }

  let event: StripeWebhookEvent | null = null;
  try {
    event = JSON.parse(rawBody) as StripeWebhookEvent;
  } catch (error) {
    console.error('Unable to parse Stripe webhook payload', error);
    res.status(400).json({ ok: false, error: 'Invalid webhook payload.' });
    return;
  }

  if (event?.type === 'checkout.session.completed') {
    const session = event.data?.object;
    const quoteId = session?.metadata?.quoteId;

    // TODO: Persist deposit payment status for the quoteId in a backend datastore.
    console.info('Stripe checkout completed', { quoteId, sessionId: session?.id });
  }

  res.status(200).json({ received: true });
}
