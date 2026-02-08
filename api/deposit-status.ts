import { getDepositStatus } from './depositStore.js';

type RequestLike = {
  method?: string;
  url?: string;
};

const getQuoteRefFromUrl = (url?: string) => {
  if (!url) return null;
  try {
    const parsed = new URL(url, 'http://localhost');
    return parsed.searchParams.get('quoteRef');
  } catch (error) {
    console.error('Failed to parse deposit status URL', error);
    return null;
  }
};

export default async function handler(req: RequestLike, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ ok: false, error: 'Method Not Allowed' });
    return;
  }

  const quoteRef = getQuoteRefFromUrl(req.url);
  if (!quoteRef) {
    res.status(400).json({ ok: false, error: 'Missing quoteRef.' });
    return;
  }

  const record = getDepositStatus(quoteRef);
  if (!record) {
    res.status(200).json({ ok: true, status: 'pending' });
    return;
  }

  res.status(200).json({ ok: true, status: record.status, record });
}
