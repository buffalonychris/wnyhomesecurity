type RequestLike = {
  method?: string;
  url?: string;
};

type StripeSessionResponse = {
  id?: string;
  payment_status?: string;
  metadata?: Record<string, string | undefined> | null;
};

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is not configured`);
  return value;
};

const isPaid = (status?: string | null) => status === 'paid' || status === 'no_payment_required';
const isTier = (value: unknown): value is 'bronze' | 'silver' | 'gold' => value === 'bronze' || value === 'silver' || value === 'gold';

const getSessionId = (url?: string) => {
  if (!url) return null;
  try {
    const parsed = new URL(url, 'http://localhost');
    return parsed.searchParams.get('session_id');
  } catch {
    return null;
  }
};

const maskSessionId = (sessionId: string) => sessionId.slice(-6);

export default async function handler(req: RequestLike, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ verified: false, error: 'Method Not Allowed' });
    return;
  }

  const sessionId = getSessionId(req.url);
  if (!sessionId) {
    res.status(400).json({ verified: false, error: 'Missing session_id.' });
    return;
  }

  try {
    const stripeSecretKey = requireEnv('STRIPE_SECRET_KEY');
    const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
      },
    });

    const data = (await response.json().catch(() => null)) as StripeSessionResponse | null;
    if (!response.ok || !data) {
      throw new Error('Stripe API request failed');
    }

    const tier = data.metadata?.tier;
    const verified = isPaid(data.payment_status) && isTier(tier);

    console.info('session verified', {
      verified,
      session_suffix: maskSessionId(sessionId),
    });

    res.status(200).json({
      verified,
      tier: verified ? tier : undefined,
      safe: {
        payment_status: data.payment_status ?? 'unknown',
      },
    });
  } catch (error) {
    console.error('Failed to verify Stripe checkout session', error);
    res.status(500).json({ verified: false, error: 'Unable to verify checkout session.' });
  }
}
