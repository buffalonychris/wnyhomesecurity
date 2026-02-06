import { getAddOns, getPackagePricing } from '../data/pricing';
import { getHardwareList } from '../data/hardware';
import { getFeatureCategories } from '../data/features';
import { siteConfig } from '../config/site';
import { QuoteContext } from './agreement';
import { buildQuoteReference } from './quoteUtils';
import { ResumePayload, buildQuoteFromResumePayload } from './resumeToken';

const deliverables = [
  '1-day installation crew of 2',
  'Onsite setup and configuration',
  'Essential customer training',
  'Complete test (certified) of all equipment post install',
  '1-year replacement warranty for all equipment',
];

const assumptionsList = [
  'Pricing is one-time for listed equipment, configuration, and training.',
  'Existing Wi-Fi and power outlets are available where devices are installed.',
  'Local-first design keeps automations running during internet outages when power is available.',
];

const exclusionsList = [
  'No monthly monitoring fees are included or required.',
  'Permitting, structural work, and trenching are out of scope.',
  'Cellular data plans are only added if explicitly selected and available in-market.',
];

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

export const computeQuoteHash = async (quote: QuoteContext): Promise<string> => {
  const vertical = quote.vertical ?? 'elder-tech';
  const packageInfo = getPackagePricing(vertical).find((pkg) => pkg.id === quote.packageId) ?? getPackagePricing(vertical)[0];
  const addOns = getAddOns(vertical);
  const addOnKeys = quote.selectedAddOns.slice().sort();
  const addOnLabels = addOns
    .filter((addOn) => addOnKeys.includes(addOn.id))
    .map((addOn) => addOn.label);
  const hardware =
    vertical === 'home-security'
      ? []
      : getHardwareList(quote.packageId, quote.selectedAddOns)
          .map((category) => ({
            title: category.title,
            items: category.items
              .map((item) => ({ name: item.name, quantity: item.quantity, note: item.note }))
              .sort((a, b) => a.name.localeCompare(b.name)),
          }))
          .sort((a, b) => a.title.localeCompare(b.title));

  const features =
    vertical === 'home-security'
      ? []
      : getFeatureCategories(quote.packageId, quote.selectedAddOns)
          .map((category) => ({
            title: category.title,
            items: category.items.slice().sort(),
          }))
          .sort((a, b) => a.title.localeCompare(b.title));

  const payload = {
    reference: buildQuoteReference(quote),
    quoteDocVersion: quote.quoteDocVersion ?? siteConfig.quoteDocVersion,
    quoteHashAlgorithm: quote.quoteHashAlgorithm ?? siteConfig.quoteHashAlgorithm,
    vertical,
    package: { id: quote.packageId, name: packageInfo.name },
    selectedAddOns: addOnKeys,
    addOnLabels,
    totals: {
      packagePrice: quote.pricing.packagePrice,
      addOnTotal: quote.pricing.addOnTotal,
      total: quote.pricing.total,
    },
    hardware,
    features,
    deliverables,
    assumptions: assumptionsList,
    exclusions: exclusionsList,
    customerContext: {
      customerName: quote.customerName || '',
      contact: quote.contact || '',
      city: quote.city || '',
      homeType: quote.homeType || '',
      homeSize: quote.homeSize || '',
      internetReliability: quote.internetReliability || '',
    },
    generatedAt: quote.generatedAt || '',
  };

  const normalized = normalizeValue(payload);
  const json = JSON.stringify(normalized);
  const encoder = new TextEncoder();
  const data = encoder.encode(json);
  const digest = await crypto.subtle.digest(siteConfig.quoteHashAlgorithm, data);
  return toHex(digest);
};

export const quoteDeliverables = deliverables;
export const quoteAssumptions = assumptionsList;
export const quoteExclusions = exclusionsList;

export const validateResumePayload = async (payload: ResumePayload): Promise<boolean> => {
  if (!payload.quoteHash || !payload.tierKey) return false;
  try {
    const derived = buildQuoteFromResumePayload(payload);
    const expectedHash = await computeQuoteHash(derived);
    return expectedHash === payload.quoteHash;
  } catch (error) {
    console.error('Failed to validate resume payload', error);
    return false;
  }
};
