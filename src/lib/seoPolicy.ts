export type SeoPolicy = {
  robots: string;
  canonicalPath: string;
  noindexReason?: string;
  title?: string;
  description?: string;
  openGraph?: {
    title: string;
    description: string;
    image?: string;
  };
  twitter?: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image?: string;
  };
};

const CANONICAL_BASE_URL = 'https://www.wnyhomesecurity.com';

const homepageDescription =
  'WNY Home Security is a Western New York smart-property integrator for customer-owned control across security, automation, safety, lighting, and aging-in-place needs.';

type RouteMetadata = {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
};

const routeMetadata: Record<string, RouteMetadata> = {
  '/': {
    title: 'WNY Home Security | Western New York Smart Property Integrator',
    description: homepageDescription,
    image: '/images/home-security/homepage/WNYHSCoreDashboard.png',
  },
  '/home-security': {
    title: 'WNY Home Security | Western New York Smart Property Integrator',
    description: homepageDescription,
    image: '/images/home-security/homepage/category-home-security.png',
  },
  '/categories/home-security': {
    title: 'Home Security | WNY Home Security',
    description:
      'Explore local smart security options for Western New York homes, including cameras, sensors, access awareness, lighting ties, and customer-owned control.',
    image: '/images/home-security/homepage/category-home-security.png',
  },
  '/categories/home-automation': {
    title: 'Home Automation | WNY Home Security',
    description:
      'Discover home automation ideas for Western New York homes, including routines, scenes, mobile control, and customer-owned smart-property coordination.',
    image: '/images/home-security/homepage/category-home-automation.png',
  },
  '/categories/home-safety': {
    title: 'Home Safety | WNY Home Security',
    description:
      'Review home safety options for Western New York properties, including water, freeze, utility, and household awareness tied into a simple control plane.',
    image: '/images/home-security/homepage/category-environmental-safety.png',
  },
  '/categories/home-lighting': {
    title: 'Home Lighting | WNY Home Security',
    description:
      'See smart lighting options for Western New York homes, from exterior visibility to everyday scenes connected through customer-owned controls.',
    image: '/images/home-security/homepage/category-home-lighting.png',
  },
  '/categories/aging-in-place': {
    title: 'Aging In Place | WNY Home Security',
    description:
      'Explore aging-in-place smart-property support for Western New York homes, with simple controls, awareness tools, lighting, and family visibility.',
    image: '/images/home-security/homepage/category-aging-in-place.png',
  },
  '/solutions/senior-safety': {
    title: 'Senior Safety Support | WNY Home Security',
    description:
      'Plan aging-in-place awareness for Western New York homes with smart entry, lighting, activity cues, and family check-in visibility built around the household.',
    image: '/images/home-security/solutions/solutions-aging-hero.png',
  },
  '/solutions/water-protection': {
    title: 'Water Leak Awareness | WNY Home Security',
    description:
      'Plan water leak, freeze, sump, and utility-area awareness for Western New York homes with practical alerts around the places that matter most.',
    image: '/images/home-security/solutions/solutions-water-hero.png',
  },
  '/solutions/family-awareness': {
    title: 'Family Awareness | WNY Home Security',
    description:
      'Coordinate smart entry, package visibility, driveway awareness, and routine alerts for busy Western New York households using customer-owned controls.',
    image: '/images/home-security/solutions/solutions-awareness-hero.png',
  },
  '/solutions/vacation-homes': {
    title: 'Vacation Home Awareness | WNY Home Security',
    description:
      'Keep practical remote awareness for a seasonal or second home with smart access, water, temperature, and property visibility planning.',
    image: '/images/home-security/solutions/solutions-vacation-hero.png',
  },
  '/about': {
    title: 'About WNY Home Security | Local Smart Property Planning',
    description:
      'Learn about WNY Home Security, a local smart-property integrator helping Western New York homeowners plan practical security, automation, safety, and lighting systems.',
    image: '/images/home-security/homepage/WNYHSCoreDashboard.png',
  },
  '/our-work': {
    title: 'Our Work | WNY Home Security',
    description:
      'Review WNY Home Security project examples and smart-property planning ideas for cameras, sensors, lighting, water awareness, access, and customer-owned control.',
    image: '/images/home-security/homepage/WNYHSCoreDashboard.png',
  },
  '/contact': {
    title: 'Contact WNY Home Security | Request a Smart Property Estimate',
    description:
      'Contact WNY Home Security to request a local smart-property estimate for security, automation, safety, lighting, or aging-in-place planning.',
    image: '/images/home-security/homepage/WNYHSCorePhone.png',
  },
  '/support': {
    title: 'Support | WNY Home Security',
    description:
      'Get WNY Home Security support for customer-owned smart-property systems, project questions, service planning, and next-step coordination.',
    image: '/images/home-security/homepage/WNYHSCorePhone.png',
  },
  '/search': {
    title: 'Search WNY Home Security | Smart Property Pages',
    description:
      'Search WNY Home Security pages for local smart-property categories, solutions, support, contact information, and project planning topics.',
    image: '/images/home-security/homepage/WNYHSCoreDashboard.png',
  },
  '/qrlanding': {
    title: 'WNY Home Security Scan Page | Local Smart Property Planning',
    description:
      'Open the WNY Home Security scan page for local smart-property planning, estimate requests, and direct next steps from a printed campaign code.',
    image: '/images/home-security/homepage/WNYHSCorePhone.png',
  },
  '/qrlanding.htm': {
    title: 'WNY Home Security Scan Page | Local Smart Property Planning',
    description:
      'Open the WNY Home Security scan page for local smart-property planning, estimate requests, and direct next steps from a printed campaign code.',
    canonicalPath: '/qrlanding',
    image: '/images/home-security/homepage/WNYHSCorePhone.png',
  },
  '/privacy': {
    title: 'Privacy Policy | WNY Home Security',
    description:
      'Read the WNY Home Security privacy policy for information about website, estimate, and customer inquiry data handling.',
    image: '/images/home-security/homepage/WNYHSCoreDashboard.png',
  },
  '/terms': {
    title: 'Terms | WNY Home Security',
    description:
      'Read the WNY Home Security terms for website use, estimate requests, and customer-facing smart-property planning information.',
    image: '/images/home-security/homepage/WNYHSCoreDashboard.png',
  },
};

const scopedIndexablePaths = new Set([
  '/',
  '/categories/home-security',
  '/categories/home-automation',
  '/categories/home-safety',
  '/categories/home-lighting',
  '/categories/aging-in-place',
  '/solutions/senior-safety',
  '/solutions/water-protection',
  '/solutions/family-awareness',
  '/solutions/vacation-homes',
  '/about',
  '/our-work',
  '/contact',
  '/support',
  '/search',
]);

const legacyCategoryCanonicalPaths: Record<string, string> = {
  '/home-security': '/',
  '/home-automation': '/categories/home-automation',
  '/home-safety': '/categories/home-safety',
  '/home-lighting': '/categories/home-lighting',
  '/aging-in-place': '/categories/aging-in-place',
};

const packageReviewPrefixes = ['/packages', '/home-security/packages', '/newsite/home-security/packages'];

const publicReviewPaths = new Set<string>([
  '/demo',
  '/5-day-demo',
  '/home-security/dashboard',
  '/home-security/legacy',
  '/home-security/legacy-premium',
  '/home-security/whats-included',
  '/newsite/demos',
  '/newsite/demos/ha-gold-dashboard',
  '/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html',
]);

const plannerReviewPrefixes = ['/home-security/planner', '/newsite/home-security/planner'];

const CATEGORY_A_PATHS = new Set<string>([
  '/',
  '/halo',
  '/halo/setup',
  '/halo/support',
  '/halo/privacy',
  '/halo/terms',
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
  '/agreement',
  '/agreementReview',
  '/esign',
  '/checkout',
  '/halo/checkout',
  '/payment',
  '/payment-processing',
  '/home-security/pay-deposit',
  '/home-security/payment/success',
  '/home-security/payment/canceled',
  '/home-security/payment/cancel',
  '/schedule',
  '/resume',
  '/resume-verify',
  '/newsite/quote',
  '/newsite/quote/review',
  '/newsite/agreement/review',
  '/newsite/home-security/pay-deposit',
  '/newsite/home-security/payment/success',
  '/newsite/home-security/payment/cancel',
  '/newsite/schedule',
  '/newsite/contact',
  '/newsite/callback',
  '/newsite/on-site-quote',
  '/vendors/apply',
]);

const CATEGORY_B2_PATHS = new Set<string>([
  '/verify',
  '/quotePrint',
  '/agreementPrint',
  '/newsite/quote/print',
  '/newsite/agreement/print',
  '/uat',
  '/launchUat',
  '/sicar',
  '/certificate',
]);

const protectedPrefixes = ['/operator', '/admin', '/review', '/prototype', '/test', '/newsite'];

const normalizePathname = (pathname: string) => {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const matchesPrefix = (pathname: string, prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`);

const matchesAnyPrefix = (pathname: string, prefixes: string[]) =>
  prefixes.some((prefix) => matchesPrefix(pathname, prefix));

export const getSeoPolicy = (pathname: string, search = ''): SeoPolicy => {
  const normalized = normalizePathname(pathname || '/');
  const metadata = routeMetadata[normalized as keyof typeof routeMetadata];

  if (metadata) {
    const canonicalPath = normalized === '/home-security' ? '/' : metadata.canonicalPath ?? normalized;
    const hasQuery = search.length > 0;
    const isSearchQueryUrl = normalized === '/search' && hasQuery;
    const robots = scopedIndexablePaths.has(normalized) && !isSearchQueryUrl ? 'index, follow' : 'noindex, follow';
    const image = metadata.image ? buildCanonicalUrl(metadata.image) : undefined;

    return {
      robots,
      canonicalPath,
      noindexReason:
        normalized === '/home-security'
          ? 'Legacy homepage route canonicalizes to root'
          : isSearchQueryUrl
            ? 'Search query URL canonicalizes to the main search page'
            : undefined,
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        image,
      },
      twitter: {
        card: image ? 'summary_large_image' : 'summary',
        title: metadata.title,
        description: metadata.description,
        image,
      },
    };
  }

  const legacyCanonicalPath = legacyCategoryCanonicalPaths[normalized];
  if (legacyCanonicalPath) {
    return {
      robots: 'noindex, follow',
      canonicalPath: legacyCanonicalPath,
      noindexReason: 'Legacy category route canonicalizes to the approved public route',
    };
  }

  if (matchesAnyPrefix(normalized, packageReviewPrefixes)) {
    return {
      robots: 'noindex, follow',
      canonicalPath: normalized,
      noindexReason: 'Package route pending SEO visibility approval',
    };
  }

  if (publicReviewPaths.has(normalized)) {
    return {
      robots: 'noindex, follow',
      canonicalPath: normalized,
      noindexReason: 'Public review or demo route pending SEO visibility approval',
    };
  }

  if (matchesAnyPrefix(normalized, plannerReviewPrefixes)) {
    return {
      robots: 'noindex, follow',
      canonicalPath: normalized,
      noindexReason: 'Planner route remains public review and is not a search destination',
    };
  }

  if (CATEGORY_A_PATHS.has(normalized)) {
    return { robots: 'index, follow', canonicalPath: normalized };
  }

  if (CATEGORY_B_PATHS.has(normalized)) {
    return { robots: 'noindex, follow', canonicalPath: normalized, noindexReason: 'Transactional journey' };
  }

  if (CATEGORY_B2_PATHS.has(normalized)) {
    return { robots: 'noindex, nofollow', canonicalPath: normalized, noindexReason: 'Tokenized or internal' };
  }

  if (matchesAnyPrefix(normalized, protectedPrefixes)) {
    return { robots: 'noindex, nofollow', canonicalPath: normalized, noindexReason: 'Internal, prototype, or review tool' };
  }

  return { robots: 'noindex, nofollow', canonicalPath: normalized, noindexReason: 'Unclassified route' };
};

export const buildCanonicalUrl = (canonicalPath: string) => `${CANONICAL_BASE_URL}${canonicalPath}`;
export { CANONICAL_BASE_URL };
