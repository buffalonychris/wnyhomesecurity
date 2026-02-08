type RequestLike = {
  method?: string;
  url?: string;
};

type StripeSessionResponse = {
  payment_status?: string;
  amount_total?: number | null;
  currency?: string | null;
  metadata?: Record<string, string | undefined> | null;
};

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} is not configured`);
  }
  return value;
};

const getSessionIdFromUrl = (url?: string) => {
  if (!url) return null;
  try {
    const parsed = new URL(url, 'http://localhost');
    return parsed.searchParams.get('session_id');
  } catch (error) {
    console.error('Failed to parse verify session URL', error);
    return null;
  }
};

const isPaid = (status?: string | null) => status === 'paid' || status === 'no_payment_required';

export default async function handler(req: RequestLike, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  const sessionId = getSessionIdFromUrl(req.url);
  if (!sessionId) {
    res.status(400).json({ ok: false, error: 'Missing session_id.' });
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
      throw new Error('Stripe API request failed.');
    }

    const quoteRef = data.metadata?.quoteRef;
    if (!quoteRef || !isPaid(data.payment_status)) {
      res.status(200).json({ ok: false, paid: false });
      return;
    }

    res.status(200).json({
      ok: true,
      quoteRef,
      paid: true,
      amount_total: data.amount_total ?? null,
      currency: data.currency ?? null,
    });
  } catch (error) {
    console.error('Failed to verify Stripe checkout session', error);
    res.status(500).json({ ok: false, error: 'Unable to verify checkout session.' });
  }
}
