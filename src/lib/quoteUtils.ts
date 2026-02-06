import { QuoteContext } from './agreement';

export const formatQuoteDate = (isoDate?: string) => {
  const date = isoDate ? new Date(isoDate) : new Date();
  if (Number.isNaN(date.getTime())) return new Date().toISOString().slice(0, 10);
  return date.toISOString().slice(0, 10);
};

export const buildQuoteReference = (quote: QuoteContext) =>
  `KAEC-${quote.packageId}-${formatQuoteDate(quote.generatedAt).replace(/-/g, '')}`;
