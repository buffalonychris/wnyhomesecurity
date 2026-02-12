type HomeSecurityTier = 'bronze' | 'silver' | 'gold';

type RequestLike = {
  method?: string;
  body?: unknown;
};

type JsonValue = Record<string, unknown> | null;

const TIER_PRICING_CENTS: Record<HomeSecurityTier, number> = {
  bronze: 169900,
  silver: 259900,
  gold: 349900,
};

const getBody = (req: RequestLike): JsonValue => {
  if (!req.body) return null;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body) as Record<string, unknown>;
    } catch (error) {
      console.error('Failed to parse Stripe create session JSON body', error);
      return null;
    }
  }
  return req.body as Record<string, unknown>;
};

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is not configured`);
  return value;
};

const isTier = (value: unknown): value is HomeSecurityTier => value === 'bronze' || value === 'silver' || value === 'gold';

const maskSessionId = (sessionId: string) => sessionId.slice(-6);

export default async function handler(req: RequestLike, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  const body = getBody(req);
  const tier = body?.tier;
  if (!isTier(tier)) {
    res.status(400).json({ ok: false, error: 'Please choose a valid package tier.' });
    return;
  }

  const totalCents = TIER_PRICING_CENTS[tier];
  const depositCents = Math.round(totalCents * 0.5);

  try {
    const stripeSecretKey = requireEnv('STRIPE_SECRET_KEY');
    const publicSiteUrl = requireEnv('PUBLIC_SITE_URL').replace(/\/$/, '');

    const params = new URLSearchParams({
      mode: 'payment',
      success_url: `${publicSiteUrl}/newsite/home-security/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${publicSiteUrl}/newsite/home-security/payment/cancel`,
      'line_items[0][price_data][currency]': 'usd',
      'line_items[0][price_data][product_data][name]': 'Home Security Deposit (50%)',
      'line_items[0][price_data][unit_amount]': `${depositCents}`,
      'line_items[0][quantity]': '1',
      'metadata[tier]': tier,
      'metadata[vertical]': 'home-security',
      'metadata[deposit_policy]': '50%',
      'metadata[expectedDepositCents]': `${depositCents}`,
      'metadata[expectedTotalCents]': `${totalCents}`,
    });

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = (await response.json().catch(() => null)) as
      | { id?: string; url?: string; error?: { message?: string } }
      | null;

    if (!response.ok || !data?.url || !data.id) {
      throw new Error(data?.error?.message || 'Stripe API request failed');
    }

    console.info('checkout session created', {
      tier,
      session_suffix: maskSessionId(data.id),
    });

    res.status(200).json({ ok: true, url: data.url });
  } catch (error) {
    console.error('Failed to create Stripe checkout session', error);
    res.status(500).json({ ok: false, error: 'Unable to start secure checkout right now.' });
  }
}
