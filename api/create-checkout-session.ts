import { getAddOns, getPackagePricing, PackageTierId } from '../src/data/pricing.js';

type CheckoutSessionRequest = {
  quoteId?: string;
  packageId?: PackageTierId;
  selectedAddOns?: string[];
  vertical?: string;
};

type JsonValue = Record<string, unknown> | null;

type RequestLike = {
  method?: string;
  body?: unknown;
};

const getBody = (req: RequestLike): JsonValue => {
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

const toString = (value: unknown) => (typeof value === 'string' ? value : undefined);

const toStringArray = (value: unknown) => {
  if (!Array.isArray(value)) return [] as string[];
  return value.filter((entry) => typeof entry === 'string') as string[];
};

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not configured`);
  }
  return value;
};

export default async function handler(req: RequestLike, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  const body = getBody(req) as CheckoutSessionRequest | null;
  if (!body) {
    res.status(400).json({ ok: false, error: 'Invalid JSON body' });
    return;
  }

  const vertical = body.vertical === 'home-security' ? 'home-security' : null;
  if (!vertical) {
    res.status(400).json({ ok: false, error: 'Only home-security checkout is supported.' });
    return;
  }

  const packageId = body.packageId;
  if (!packageId) {
    res.status(400).json({ ok: false, error: 'Missing packageId.' });
    return;
  }

  const packagePricing = getPackagePricing('home-security');
  const selectedPackage = packagePricing.find((pkg) => pkg.id === packageId);
  if (!selectedPackage) {
    res.status(400).json({ ok: false, error: 'Invalid packageId.' });
    return;
  }

  const selectedAddOns = toStringArray(body.selectedAddOns);
  const addOns = getAddOns('home-security');
  const addOnTotal = addOns
    .filter((addOn) => selectedAddOns.includes(addOn.id))
    .reduce((sum, addOn) => sum + addOn.price, 0);

  const total = selectedPackage.basePrice + addOnTotal;
  const totalCents = Math.round(total * 100);
  const depositCents = Math.round(totalCents * 0.5);

  if (totalCents <= 0 || depositCents <= 0) {
    res.status(400).json({ ok: false, error: 'Invalid total for deposit.' });
    return;
  }

  try {
    const stripeSecretKey = requireEnv('STRIPE_SECRET_KEY');
    const publicSiteUrl = requireEnv('PUBLIC_SITE_URL').replace(/\/$/, '');
    const quoteId = toString(body.quoteId) ?? 'unknown';

    const successPath = '/home-security/payment/success';
    const cancelPath = '/home-security/payment/canceled';

    const params = new URLSearchParams({
      mode: 'payment',
      success_url: `${publicSiteUrl}${successPath}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${publicSiteUrl}${cancelPath}`,
      'line_items[0][price_data][currency]': 'usd',
      'line_items[0][price_data][product_data][name]': 'Home Security Deposit (50%)',
      'line_items[0][price_data][unit_amount]': `${depositCents}`,
      'line_items[0][quantity]': '1',
      'metadata[quoteId]': quoteId,
      'metadata[vertical]': 'home-security',
      'metadata[deposit_policy]': '50%',
      'metadata[totalCents]': `${totalCents}`,
    });

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = (await response.json().catch(() => null)) as { url?: string; error?: { message?: string } } | null;
    if (!response.ok || !data?.url) {
      throw new Error(data?.error?.message || 'Stripe API request failed.');
    }

    res.status(200).json({ url: data.url });
  } catch (error) {
    console.error('Failed to create Stripe checkout session', error);
    res.status(500).json({ ok: false, error: 'Unable to create checkout session.' });
  }
}
