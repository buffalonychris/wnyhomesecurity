import { categoryPaths, publicSolutions } from './wnyhsOfferCatalog';

export type PublicSearchItemType = 'category' | 'solution' | 'marketing' | 'support' | 'demo';

export type PublicSearchItem = {
  id: string;
  title: string;
  type: PublicSearchItemType;
  route: string;
  summary: string;
  keywords: string[];
  category?: string;
  priority: number;
  ctaLabel: string;
};

type PublicSearchValidationResult = {
  itemCount: number;
  ids: string[];
  routes: string[];
};

const categoryLabels: Record<string, string> = {
  'home-security': 'Home Security',
  'environmental-safety': 'Home Safety',
  'home-lighting': 'Home Lighting',
  'home-automation': 'Home Automation',
  'aging-in-place': 'Aging In Place',
};

const forbiddenRoutePrefixes = [
  '/api',
  '/operator',
  '/admin',
  '/quote',
  '/quoteReview',
  '/quotePrint',
  '/agreement',
  '/agreementReview',
  '/agreementPrint',
  '/payment',
  '/payment-processing',
  '/schedule',
  '/resume',
  '/resume-verify',
  '/verify',
  '/uat',
  '/launchUat',
  '/home-security/planner',
  '/newsite',
  '/packages',
  '/home-security/packages',
];

const bomLikeTerms = ['bom', 'part number', 'part-number', 'vendor cost', 'cost basis', 'margin'];

const categorySearchItems: PublicSearchItem[] = [
  {
    id: 'category-home-security',
    title: 'Home Security',
    type: 'category',
    route: categoryPaths.homeSecurity,
    summary: 'Entry, driveway, garage, package-area, and property awareness planned around the home.',
    keywords: ['home security', 'door', 'window', 'garage', 'driveway', 'camera', 'entry', 'package'],
    category: 'Home Security',
    priority: 100,
    ctaLabel: 'Explore Home Security',
  },
  {
    id: 'category-home-automation',
    title: 'Home Automation',
    type: 'category',
    route: categoryPaths.homeAutomation,
    summary: 'Modes, scenes, dashboard views, and selected routines for supported devices.',
    keywords: ['home automation', 'smart home', 'dashboard', 'routine', 'scene', 'mode', 'notification'],
    category: 'Home Automation',
    priority: 96,
    ctaLabel: 'Explore Home Automation',
  },
  {
    id: 'category-home-safety',
    title: 'Home Safety',
    type: 'category',
    route: categoryPaths.homeSafety,
    summary: 'Water, temperature, basement, sump, and utility-area awareness for selected spaces.',
    keywords: ['home safety', 'water', 'leak', 'freeze', 'temperature', 'sump', 'basement', 'utility'],
    category: 'Home Safety',
    priority: 94,
    ctaLabel: 'Explore Home Safety',
  },
  {
    id: 'category-home-lighting',
    title: 'Home Lighting',
    type: 'category',
    route: categoryPaths.homeLighting,
    summary: 'Everyday lighting, entry lighting, night paths, and routines where supported equipment allows it.',
    keywords: ['home lighting', 'lighting', 'entry lighting', 'night path', 'scene', 'routine', 'switch'],
    category: 'Home Lighting',
    priority: 92,
    ctaLabel: 'Explore Home Lighting',
  },
  {
    id: 'category-aging-in-place',
    title: 'Aging In Place',
    type: 'category',
    route: categoryPaths.agingInPlace,
    summary: 'Non-medical household awareness and family visibility for older adults at home.',
    keywords: ['aging in place', 'senior safety', 'older adult', 'family awareness', 'entry', 'routine'],
    category: 'Aging In Place',
    priority: 90,
    ctaLabel: 'Explore Aging In Place',
  },
];

const marketingSearchItems: PublicSearchItem[] = [
  {
    id: 'marketing-homepage',
    title: 'Homepage',
    type: 'marketing',
    route: '/home-security',
    summary: 'Start with WNY Home Security categories, solutions, local approach, and next steps.',
    keywords: ['home', 'homepage', 'wny home security', 'start', 'categories', 'solutions'],
    priority: 98,
    ctaLabel: 'Go To Homepage',
  },
  {
    id: 'marketing-about',
    title: 'About',
    type: 'marketing',
    route: '/about',
    summary: 'Learn about the local WNY Home Security approach and how projects are planned.',
    keywords: ['about', 'local', 'wny', 'approach', 'company'],
    priority: 70,
    ctaLabel: 'Learn About Us',
  },
  {
    id: 'marketing-our-work',
    title: 'Our Work',
    type: 'marketing',
    route: '/our-work',
    summary: 'Review example project concepts and practical ways smart property systems can be planned.',
    keywords: ['our work', 'examples', 'projects', 'gallery', 'case examples'],
    priority: 72,
    ctaLabel: 'View Our Work',
  },
];

const supportSearchItems: PublicSearchItem[] = [
  {
    id: 'support-contact',
    title: 'Contact',
    type: 'support',
    route: '/contact',
    summary: 'Request an estimate, ask a project question, or send property details for review.',
    keywords: ['contact', 'estimate', 'request estimate', 'project question', 'property review'],
    priority: 78,
    ctaLabel: 'Contact WNYHS',
  },
  {
    id: 'support-help',
    title: 'Support',
    type: 'support',
    route: '/support',
    summary: 'Get help with an existing system, service question, or support request.',
    keywords: ['support', 'help', 'service', 'existing system', 'customer support'],
    priority: 76,
    ctaLabel: 'Get Support',
  },
];

const solutionSearchItems: PublicSearchItem[] = publicSolutions
  .filter((solution) => solution.href.startsWith('/solutions/'))
  .map((solution): PublicSearchItem => ({
    id: `solution-${solution.id}`,
    title: solution.title,
    type: 'solution',
    route: solution.href,
    summary: solution.body,
    keywords: [solution.title, solution.id.replaceAll('-', ' '), categoryLabels[solution.categoryId] ?? solution.categoryId],
    category: categoryLabels[solution.categoryId] ?? solution.categoryId,
    priority: 84,
    ctaLabel: solution.ctaLabel,
  }));

export const publicSearchIndex: PublicSearchItem[] = [
  ...categorySearchItems,
  ...solutionSearchItems,
  ...marketingSearchItems,
  ...supportSearchItems,
];

export const validatePublicSearchIndex = (items: PublicSearchItem[]): PublicSearchValidationResult => {
  const ids = new Set<string>();
  const routes = new Set<string>();

  for (const item of items) {
    if (!item.id.trim()) {
      throw new Error('Public search item is missing an id.');
    }

    if (!item.title.trim()) {
      throw new Error(`Public search item "${item.id}" is missing a title.`);
    }

    if (!item.route.trim() || !item.route.startsWith('/')) {
      throw new Error(`Public search item "${item.id}" has an invalid route.`);
    }

    if (ids.has(item.id)) {
      throw new Error(`Duplicate public search item id: ${item.id}`);
    }

    if (routes.has(item.route)) {
      throw new Error(`Duplicate public search item route: ${item.route}`);
    }

    if (forbiddenRoutePrefixes.some((prefix) => item.route === prefix || item.route.startsWith(`${prefix}/`))) {
      throw new Error(`Public search item "${item.id}" uses a forbidden route: ${item.route}`);
    }

    const searchableText = [item.id, item.title, item.route, item.summary, item.category ?? '', item.ctaLabel, ...item.keywords]
      .join(' ')
      .toLowerCase();

    if (bomLikeTerms.some((term) => searchableText.includes(term))) {
      throw new Error(`Public search item "${item.id}" includes internal catalog terminology.`);
    }

    if (item.id.startsWith('package-')) {
      throw new Error(`Public search item "${item.id}" uses a package-style primary id.`);
    }

    ids.add(item.id);
    routes.add(item.route);
  }

  return {
    itemCount: items.length,
    ids: [...ids],
    routes: [...routes],
  };
};

export const publicSearchIndexValidation = validatePublicSearchIndex(publicSearchIndex);
