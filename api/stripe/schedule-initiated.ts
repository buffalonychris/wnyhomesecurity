type HomeSecurityTier = 'bronze' | 'silver' | 'gold';

type RequestLike = {
  method?: string;
  body?: unknown;
};

const isTier = (value: unknown): value is HomeSecurityTier => value === 'bronze' || value === 'silver' || value === 'gold';

const getBody = (body: unknown): Record<string, unknown> | null => {
  if (!body) return null;
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return null;
    }
  }
  return body as Record<string, unknown>;
};

export default async function handler(req: RequestLike, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  const payload = getBody(req.body);
  const tier = payload?.tier;
  const source = typeof payload?.source === 'string' ? payload.source : 'unknown';

  console.info('schedule initiated', {
    tier: isTier(tier) ? tier : 'unknown',
    source,
  });

  res.status(200).json({ ok: true });
}
