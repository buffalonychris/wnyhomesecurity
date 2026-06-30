export type MarketingNavItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  matchPath?: string;
  matchHash?: string;
};

export type FunnelStepDefinition = {
  id: 'fit-check' | 'quote' | 'planner' | 'agreement' | 'deposit' | 'schedule';
  label: string;
  helperText?: string;
  href: string;
  matchPath: string;
  stepNumber: number;
};

export const HOME_SECURITY_ROUTES = {
  home: '/',
  search: '/search',
  homeSecurityCategory: '/categories/home-security',
  packages: '/packages?vertical=home-security',
  comparison: '/comparison?vertical=home-security',
  whatsIncluded: '/home-security/whats-included',
  discovery: '/discovery?vertical=home-security',
  quote: '/quote?vertical=home-security',
  planner: '/home-security/planner?vertical=home-security',
  agreement: '/agreementReview',
  deposit: '/payment',
  schedule: '/schedule',
} as const;

export const homeSecurityMarketingNav: { primary: MarketingNavItem[]; more: MarketingNavItem[] } = {
  primary: [
    { id: 'home', label: 'Home', href: HOME_SECURITY_ROUTES.home, matchPath: '/' },
    { id: 'search', label: 'Search', href: HOME_SECURITY_ROUTES.search, matchPath: '/search' },
    { id: 'solutions', label: 'Solutions', href: HOME_SECURITY_ROUTES.homeSecurityCategory, matchPath: '/categories/home-security' },
    { id: 'fit-check', label: 'Fit Check', href: HOME_SECURITY_ROUTES.discovery, matchPath: '/discovery' },
    { id: 'estimate', label: 'Estimate', href: '/contact?vertical=home-security', matchPath: '/contact' },
    { id: 'our-work-primary', label: 'Our Work', href: '/our-work?vertical=home-security', matchPath: '/our-work' },
  ],
  more: [
    { id: 'about', label: 'About', href: '/about?vertical=home-security', matchPath: '/about' },
    { id: 'our-work', label: 'Our Work', href: '/our-work?vertical=home-security', matchPath: '/our-work' },
    { id: 'contact', label: 'Contact', href: '/contact?vertical=home-security', matchPath: '/contact' },
    { id: 'privacy', label: 'Privacy', href: '/privacy?vertical=home-security', matchPath: '/privacy' },
    { id: 'terms', label: 'Terms', href: '/terms?vertical=home-security', matchPath: '/terms' },
    { id: 'support-footer', label: 'Support', href: '/support?vertical=home-security', matchPath: '/support' },
    { id: 'planner', label: 'System Planner (Preview)', href: HOME_SECURITY_ROUTES.planner, matchPath: '/home-security/planner' },
  ],
};

export const appendQueryParam = (href: string, key: string, value?: string | null) => {
  if (!value) return href;
  const separator = href.includes('?') ? '&' : '?';
  return `${href}${separator}${key}=${encodeURIComponent(value)}`;
};

const appendPathParam = (href: string, pathParam?: string | null) => {
  return appendQueryParam(href, 'path', pathParam);
};

export const getHomeSecurityFunnelSteps = (pathParam?: string | null): FunnelStepDefinition[] => [
  {
    id: 'fit-check',
    label: 'Fit Check',
    helperText: 'Answer a few quick questions to confirm fit.',
    href: appendPathParam(HOME_SECURITY_ROUTES.discovery, pathParam),
    matchPath: '/discovery',
    stepNumber: 1,
  },
  {
    id: 'quote',
    label: 'Quote',
    helperText: 'Lock in deterministic pricing for your tier.',
    href: appendPathParam(HOME_SECURITY_ROUTES.quote, pathParam),
    matchPath: '/quote',
    stepNumber: 2,
  },
  {
    id: 'planner',
    label: 'System Planner (Preview)',
    helperText: 'Optional advanced layout details for later planning.',
    href: appendPathParam(HOME_SECURITY_ROUTES.planner, pathParam),
    matchPath: '/home-security/planner',
    stepNumber: 3,
  },
  {
    id: 'agreement',
    label: 'Agreement',
    helperText: 'Review and accept the combined agreement.',
    href: HOME_SECURITY_ROUTES.agreement,
    matchPath: '/agreementReview',
    stepNumber: 4,
  },
  {
    id: 'deposit',
    label: 'Deposit',
    helperText: 'Reserve your installation with a deposit.',
    href: HOME_SECURITY_ROUTES.deposit,
    matchPath: '/payment',
    stepNumber: 5,
  },
  {
    id: 'schedule',
    label: 'Schedule',
    helperText: 'Request your preferred installation window (owner confirmation required).',
    href: HOME_SECURITY_ROUTES.schedule,
    matchPath: '/schedule',
    stepNumber: 6,
  },
];

export const getHomeSecurityCtaLink = (pathParam?: string | null) =>
  appendPathParam(HOME_SECURITY_ROUTES.discovery, pathParam);

export const getHomeSecurityNavGroups = () => [
  { title: 'Primary', items: homeSecurityMarketingNav.primary },
  { title: 'More', items: homeSecurityMarketingNav.more },
];

export const getAllHomeSecurityNavItems = () => [
  ...homeSecurityMarketingNav.primary,
  ...homeSecurityMarketingNav.more,
];
