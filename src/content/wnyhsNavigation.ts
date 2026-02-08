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
  home: '/home-security',
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
    { id: 'home', label: 'Home', href: HOME_SECURITY_ROUTES.home, matchPath: '/home-security' },
    { id: 'packages', label: 'Packages', href: HOME_SECURITY_ROUTES.packages, matchPath: '/packages' },
    { id: 'comparison', label: 'Comparison', href: HOME_SECURITY_ROUTES.comparison, matchPath: '/comparison' },
    {
      id: 'whats-included',
      label: 'What’s Included',
      href: HOME_SECURITY_ROUTES.whatsIncluded,
      matchPath: '/home-security/whats-included',
    },
  ],
  more: [
    {
      id: 'dashboard-demo',
      label: 'Dashboard Demo',
      href: '/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html',
      external: true,
    },
    { id: 'about', label: 'About', href: '/about?vertical=home-security', matchPath: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact?vertical=home-security', matchPath: '/contact' },
    { id: 'support', label: 'Support', href: '/support?vertical=home-security', matchPath: '/support' },
    { id: 'privacy', label: 'Privacy', href: '/privacy?vertical=home-security', matchPath: '/privacy' },
    { id: 'terms', label: 'Terms', href: '/terms?vertical=home-security', matchPath: '/terms' },
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
    label: 'Planner',
    helperText: 'Optional precision layout details.',
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
    helperText: 'Pick your installation window.',
    href: HOME_SECURITY_ROUTES.schedule,
    matchPath: '/schedule',
    stepNumber: 6,
  },
];

export const getHomeSecurityCtaLink = (pathParam?: string | null) => appendPathParam(HOME_SECURITY_ROUTES.discovery, pathParam);

export const getHomeSecurityNavGroups = () => [
  { title: 'Primary', items: homeSecurityMarketingNav.primary },
  { title: 'More', items: homeSecurityMarketingNav.more },
];

export const getAllHomeSecurityNavItems = () => [
  ...homeSecurityMarketingNav.primary,
  ...homeSecurityMarketingNav.more,
];
