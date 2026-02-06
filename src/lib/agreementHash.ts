import { getAddOns, getPackagePricing } from '../data/pricing';
import { siteConfig } from '../config/site';
import { QuoteContext } from './agreement';
import { buildQuoteReference } from './quoteUtils';
import { AcceptanceRecord } from './retailFlow';

const normalizeValue = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    const normalized = value.map((item) => normalizeValue(item));
    const allStrings = normalized.every((item) => typeof item === 'string');
    if (allStrings) {
      return (normalized as string[]).slice().sort();
    }
    return normalized;
  }

  if (value && typeof value === 'object' && value.constructor === Object) {
    const entries = Object.entries(value as Record<string, unknown>)
      .map(([key, val]) => [key, normalizeValue(val)] as const)
      .sort(([a], [b]) => a.localeCompare(b));

    return entries.reduce<Record<string, unknown>>((acc, [key, val]) => {
      acc[key] = val;
      return acc;
    }, {});
  }

  return value;
};

const toHex = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const defaultContext = (): QuoteContext => {
  const defaultPackage = getPackagePricing('elder-tech')[0];
  return {
    vertical: 'elder-tech',
    packageId: defaultPackage.id,
    selectedAddOns: [],
    pricing: {
      packagePrice: defaultPackage.basePrice,
      addOnTotal: 0,
      total: defaultPackage.basePrice,
    },
    quoteDocVersion: siteConfig.quoteDocVersion,
    quoteHashAlgorithm: siteConfig.quoteHashAlgorithm,
  };
};

export const computeAgreementHash = async (
  quote?: QuoteContext | null,
  acceptance?: Pick<AcceptanceRecord, 'accepted' | 'fullName' | 'acceptanceDate'>
): Promise<string> => {
  const context = quote ?? defaultContext();
  const vertical = context.vertical ?? 'elder-tech';
  const packageInfo = getPackagePricing(vertical).find((pkg) => pkg.id === context.packageId) ?? getPackagePricing(vertical)[0];
  const addOns = getAddOns(vertical);
  const addOnKeys = context.selectedAddOns.slice().sort();
  const addOnDetails = addOnKeys
    .map((id) => addOns.find((item) => item.id === id))
    .filter(Boolean)
    .map((item) => ({ id: item!.id, label: item!.label, price: item!.price }));

  const payload = {
    agreementVersion: siteConfig.agreementDocVersion,
    contentIdentifiers: [
      'scope:v1',
      'assumptions:v1',
      'exclusions:v1',
      'offline-behavior:v1',
      'installation-window:v1',
      'warranty-placeholders:v1',
      'terms:v1',
      'commitments:v1',
    ],
    quote: {
      reference: buildQuoteReference(context),
      quoteVersion: context.quoteDocVersion ?? siteConfig.quoteDocVersion,
      quoteHash: context.quoteHash ?? '',
      priorQuoteHash: context.priorQuoteHash ?? '',
      hashAlgorithm: context.quoteHashAlgorithm ?? siteConfig.quoteHashAlgorithm,
    },
    vertical,
    package: { id: context.packageId, name: packageInfo.name, price: context.pricing.packagePrice },
    addOns: addOnDetails,
    totals: {
      packagePrice: context.pricing.packagePrice,
      addOnTotal: context.pricing.addOnTotal,
      total: context.pricing.total,
    },
    customerContext: {
      customerName: context.customerName || '',
      contact: context.contact || '',
      city: context.city || '',
      homeType: context.homeType || '',
      homeSize: context.homeSize || '',
      internetReliability: context.internetReliability || '',
    },
    acceptance: {
      accepted: acceptance?.accepted ?? false,
      fullName: acceptance?.fullName?.trim() ?? '',
      acceptanceDate: acceptance?.acceptanceDate ?? '',
    },
    generatedAt: context.generatedAt || '',
  };

  const normalized = normalizeValue(payload);
  const json = JSON.stringify(normalized);
  const encoder = new TextEncoder();
  const data = encoder.encode(json);
  const digest = await crypto.subtle.digest(siteConfig.quoteHashAlgorithm, data);
  return toHex(digest);
};

export const buildAgreementReference = (quote?: QuoteContext | null) => buildQuoteReference(quote ?? defaultContext());
