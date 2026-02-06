export type SeoPolicy = {
  robots: string;
  canonicalPath: string;
  noindexReason?: string;
};

const CANONICAL_BASE_URL = 'https://reliableeldercare.com';

const CATEGORY_A_PATHS = new Set<string>([
  '/',
  '/halo',
  '/halo/setup',
  '/halo/support',
  '/halo/privacy',
  '/halo/terms',
  '/halo/checkout',
  '/halo-pushbutton',
  '/halo-package',
  '/vendors',
  '/vendors/standards',
  '/vendors/evaluation-toolkit',
  '/vendors/questionnaire',
]);

const CATEGORY_B_PATHS = new Set<string>([
  '/quote',
  '/quoteReview',
  '/agreementReview',
  '/payment',
  '/schedule',
  '/resume',
  '/resume-verify',
  '/vendors/apply',
]);

const CATEGORY_B2_PATHS = new Set<string>([
  '/verify',
  '/quotePrint',
  '/agreementPrint',
  '/uat',
  '/certificate',
]);

const normalizePathname = (pathname: string) => {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

export const getSeoPolicy = (pathname: string): SeoPolicy => {
  const normalized = normalizePathname(pathname || '/');

  if (CATEGORY_A_PATHS.has(normalized)) {
    return { robots: 'index, follow', canonicalPath: normalized };
  }

  if (CATEGORY_B_PATHS.has(normalized)) {
    return { robots: 'noindex, follow', canonicalPath: normalized, noindexReason: 'Transactional journey' };
  }

  if (CATEGORY_B2_PATHS.has(normalized)) {
    return { robots: 'noindex, nofollow', canonicalPath: normalized, noindexReason: 'Tokenized or internal' };
  }

  return { robots: 'noindex, nofollow', canonicalPath: normalized, noindexReason: 'Unclassified route' };
};

export const buildCanonicalUrl = (canonicalPath: string) => `${CANONICAL_BASE_URL}${canonicalPath}`;
export { CANONICAL_BASE_URL };
