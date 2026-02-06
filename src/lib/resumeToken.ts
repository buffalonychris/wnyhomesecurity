import { getAddOns, getPackagePricing, PackageTierId } from '../data/pricing';
import { siteConfig } from '../config/site';
import { QuoteContext } from './agreement';
import { buildQuoteReference } from './quoteUtils';
import { VerticalKey } from './verticals';

export type ResumePayload = {
  quoteRef: string;
  quoteDocVersion: string;
  quoteHash: string;
  tierKey: PackageTierId | string;
  addOnKeys: string[];
  vertical?: VerticalKey;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  city?: string;
};

const base64UrlEncode = (input: string) =>
  btoa(input)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const base64UrlDecode = (input: string) => {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/');
  const padding = normalized.length % 4 === 0 ? '' : '='.repeat(4 - (normalized.length % 4));
  return atob(normalized + padding);
};

const buildResumePayload = (quote: QuoteContext): ResumePayload => {
  const quoteRef = buildQuoteReference(quote);
  const contact = quote.contact ?? '';

  return {
    quoteRef,
    quoteDocVersion: quote.quoteDocVersion ?? siteConfig.quoteDocVersion,
    quoteHash: quote.quoteHash ?? '',
    tierKey: quote.packageId,
    addOnKeys: quote.selectedAddOns.slice().sort(),
    vertical: quote.vertical ?? 'elder-tech',
    customerName: quote.customerName,
    customerEmail: contact.includes('@') ? contact : undefined,
    customerPhone: !contact.includes('@') && contact ? contact : undefined,
    city: quote.city,
  };
};

export const createResumeToken = (quote: QuoteContext): string => {
  try {
    const payload = buildResumePayload(quote);
    return base64UrlEncode(JSON.stringify(payload));
  } catch (error) {
    console.error('Failed to create resume token', error);
    return '';
  }
};

export const parseResumeToken = (token?: string | null): ResumePayload | null => {
  if (!token) return null;
  try {
    const decoded = base64UrlDecode(token);
    const parsed = JSON.parse(decoded) as ResumePayload;
    if (!parsed.quoteRef || !parsed.tierKey || !parsed.quoteHash) return null;
    return {
      ...parsed,
      addOnKeys: Array.isArray(parsed.addOnKeys) ? parsed.addOnKeys : [],
    };
  } catch (error) {
    console.error('Failed to parse resume token', error);
    return null;
  }
};

export const buildResumeUrl = (quote: QuoteContext, step: 'agreement' | 'payment' | 'schedule' = 'agreement') => {
  const token = createResumeToken(quote);
  if (!token) return `${window.location.origin}/quote`;
  const encodedStep = step ? `&step=${encodeURIComponent(step)}` : '';
  return `${window.location.origin}/resume?t=${encodeURIComponent(token)}${encodedStep}`;
};

export const deriveGeneratedAtFromReference = (quoteRef: string) => {
  const parts = quoteRef.split('-');
  const datePart = parts[2];
  if (datePart && datePart.length === 8) {
    const iso = `${datePart.slice(0, 4)}-${datePart.slice(4, 6)}-${datePart.slice(6, 8)}`;
    const date = new Date(iso);
    if (!Number.isNaN(date.getTime())) {
      return iso;
    }
  }
  return null;
};

export const buildQuoteFromResumePayload = (payload: ResumePayload): QuoteContext => {
  const vertical = payload.vertical ?? 'elder-tech';
  const packageInfo = getPackagePricing(vertical).find((pkg) => pkg.id === payload.tierKey) ?? getPackagePricing(vertical)[0];
  const addOns = getAddOns(vertical);
  const addOnKeys = addOns
    .filter((item) => payload.addOnKeys.includes(item.id))
    .map((item) => item.id)
    .sort();
  const addOnTotal = addOns
    .filter((item) => addOnKeys.includes(item.id))
    .reduce((sum, addOn) => sum + addOn.price, 0);
  const generatedAt = deriveGeneratedAtFromReference(payload.quoteRef) ?? new Date().toISOString();
  const contact = payload.customerEmail ?? payload.customerPhone ?? '';

  return {
    vertical,
    customerName: payload.customerName,
    contact,
    city: payload.city,
    packageId: packageInfo.id,
    selectedAddOns: addOnKeys,
    pricing: {
      packagePrice: packageInfo.basePrice,
      addOnTotal,
      total: packageInfo.basePrice + addOnTotal,
    },
    quoteHash: payload.quoteHash,
    quoteDocVersion: payload.quoteDocVersion ?? siteConfig.quoteDocVersion,
    quoteHashAlgorithm: siteConfig.quoteHashAlgorithm,
    generatedAt,
  };
};
