import { QuoteContext } from './agreement';

export const formatQuoteDate = (isoDate?: string) => {
  const date = isoDate ? new Date(isoDate) : new Date();
  if (Number.isNaN(date.getTime())) return new Date().toISOString().slice(0, 10);
  return date.toISOString().slice(0, 10);
};

const buildReferenceCode = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash.toString(36).toUpperCase().padStart(4, '0').slice(0, 4);
};

const buildWnyhsReference = (prefix: 'Q' | 'A', quote: QuoteContext) => {
  const dateStamp = formatQuoteDate(quote.generatedAt).replace(/-/g, '');
  const seed = [quote.packageId, quote.generatedAt, quote.customerName, quote.contact, quote.city].filter(Boolean).join('|');
  const shortCode = buildReferenceCode(seed || dateStamp);
  return `WNYHS-${prefix}-${dateStamp}-${shortCode}`;
};

export const buildQuoteReference = (quote: QuoteContext) => buildWnyhsReference('Q', quote);

export const buildAgreementReferenceValue = (quote: QuoteContext) => buildWnyhsReference('A', quote);
