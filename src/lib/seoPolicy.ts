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

const routeMetadata = {
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
} satisfies Record<
  string,
  {
    title: string;
    description: string;
    image?: string;
  }
>;

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
]);

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
  const metadata = routeMetadata[normalized as keyof typeof routeMetadata];

  if (metadata) {
    const canonicalPath = normalized === '/home-security' ? '/' : normalized;
    const robots = scopedIndexablePaths.has(normalized) ? 'index, follow' : 'noindex, follow';
    const image = metadata.image ? buildCanonicalUrl(metadata.image) : undefined;

    return {
      robots,
      canonicalPath,
      noindexReason: normalized === '/home-security' ? 'Legacy homepage route canonicalizes to root' : undefined,
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
