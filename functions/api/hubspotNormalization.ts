const getString = (value: unknown) => (typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined);

const CONTACT_METHODS = new Set(['phone', 'sms', 'email', 'any', 'unknown']);
const LEAD_SOURCE_PLATFORMS = new Set(['google_ads','meta_ads','facebook','instagram','bing_ads','youtube','x','tiktok','direct','organic_search','google_business_profile','referral','partner','manual','unknown']);
const FUNNEL_STAGES = new Set(['landing_viewed','fit_check_started','fit_check_completed','package_selected','planner_started','planner_applied','quote_generated','quote_sent','agreement_viewed','agreement_accepted','deposit_started','deposit_paid','install_scheduled','installed','lost','unknown']);
const DEAL_PATHS = new Set(['online_first','onsite_confirmation_first','contact_first','manual','unknown']);
const PATH_CHOICES = new Set(['online_first','onsite_confirmation_first','contact_first','phone_first','unknown']);

export const stringifyHubSpotTextField = (value: unknown): string | undefined => {
  if (value == null || value === '') return undefined;
  if (typeof value === 'string') return value;
  try { return JSON.stringify(value); } catch { return String(value); }
};

export const normalizePreferredContactMethod = (value: unknown) => {
  const v = getString(value)?.toLowerCase();
  const mapped = v === 'text' ? 'sms' : v === 'call' || v === 'phone call' ? 'phone' : v;
  return mapped && CONTACT_METHODS.has(mapped) ? mapped : 'unknown';
};

export const normalizeLeadSourcePlatform = (value: unknown) => {
  const v = getString(value)?.toLowerCase();
  const mapped = v === 'qr_scan' ? 'direct' : v;
  if (mapped && LEAD_SOURCE_PLATFORMS.has(mapped)) return mapped;
  if (!mapped) return 'unknown';
  if (mapped.includes('referral')) return 'referral';
  if (mapped.includes('google')) return 'organic_search';
  if (mapped.includes('qr') || mapped.includes('placard') || mapped.includes('sticker') || mapped.includes('card') || mapped.includes('yard')) return 'manual';
  return 'unknown';
};

export const normalizeFunnelStage = (value: unknown) => {
  const v = getString(value)?.toLowerCase();
  const mapped = v === 'qr_estimate_requested' ? 'quote_generated' : v;
  return mapped && FUNNEL_STAGES.has(mapped) ? mapped : 'unknown';
};

export const normalizeDealPath = (value: unknown) => {
  const v = getString(value)?.toLowerCase();
  const mapped = v === 'onsite' ? 'onsite_confirmation_first' : v;
  return mapped && DEAL_PATHS.has(mapped) ? mapped : 'unknown';
};

export const normalizePathChoice = (value: unknown) => {
  const v = getString(value)?.toLowerCase();
  const mapped = v === 'onsite' ? 'onsite_confirmation_first' : v;
  return mapped && PATH_CHOICES.has(mapped) ? mapped : 'unknown';
};

export const chooseContactSearchFilter = (email: unknown, phone: unknown) => {
  const cleanEmail = getString(email);
  const cleanPhone = getString(phone);
  if (cleanEmail) return { propertyName: 'email', operator: 'EQ' as const, value: cleanEmail };
  if (cleanPhone) return { propertyName: 'phone', operator: 'EQ' as const, value: cleanPhone };
  return null;
};
