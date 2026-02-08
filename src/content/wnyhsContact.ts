import { formatQuoteDate } from '../lib/quoteUtils';

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

const normalizePhoneNumber = (value: string) => value.replace(/[^\d]/g, '');

const PUBLIC_PHONE = '716-391-2405';
const normalizedPhone = normalizePhoneNumber(PUBLIC_PHONE);

export const wnyhsContact = {
  phone: {
    display: '716.391.2405',
    tel: `+1${normalizedPhone}`,
    sms: `+1${normalizedPhone}`,
  },
  emails: {
    hello: 'hello@wnyhomesecurity.com',
    quotes: 'quotes@wnyhomesecurity.com',
    schedule: 'schedule@wnyhomesecurity.com',
    support: 'support@wnyhomesecurity.com',
    billing: 'billing@wnyhomesecurity.com',
    install: 'install@wnyhomesecurity.com',
    privacy: 'privacy@wnyhomesecurity.com',
    partners: 'partners@wnyhomesecurity.com',
  },
  location: 'West Seneca, NY 14224',
} as const;

export const buildMailto = (to: string, subject?: string, body?: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return query ? `mailto:${to}?${query}` : `mailto:${to}`;
};

export const buildSms = (to: string, body?: string) => {
  const params = new URLSearchParams();
  if (body) params.set('body', body);
  const query = params.toString();
  return query ? `sms:${to}?${query}` : `sms:${to}`;
};

export const buildTel = (to: string) => `tel:${to}`;

export const buildTalkToUsMailto = (body?: string) =>
  buildMailto(
    wnyhsContact.emails.hello,
    'Talk to WNY Home Security',
    body || 'Tell us about your home and the best way to reach you.',
  );

export const buildQuoteHelpMailto = (context: { packageName?: string; quoteRef?: string; date?: string }) => {
  const body = [
    'Quote help request',
    '',
    `Package: ${context.packageName || 'Not selected yet'}`,
    `Quote reference: ${context.quoteRef || 'Not available yet'}`,
    `Date: ${context.date || formatQuoteDate()}`,
    '',
    'Questions / details:',
  ].join('\n');
  return buildMailto(wnyhsContact.emails.quotes, 'Quote help request', body);
};

export const buildScheduleHelpMailto = (context: { preferredWindows?: string[]; city?: string }) => {
  const windows = context.preferredWindows?.filter(Boolean).join(', ') || 'Not set yet';
  const body = [
    'Scheduling help request',
    '',
    `Preferred windows: ${windows}`,
    `City: ${context.city || 'Not provided'}`,
    '',
    'Please share any access notes or constraints:',
  ].join('\n');
  return buildMailto(wnyhsContact.emails.schedule, 'Scheduling help request', body);
};

export const buildSupportMailto = (context: { quoteRef?: string; issue?: string }) => {
  const body = [
    'Support request',
    '',
    `Quote reference: ${context.quoteRef || 'Not available'}`,
    `Issue summary: ${context.issue || 'Describe the issue or question.'}`,
  ].join('\n');
  return buildMailto(wnyhsContact.emails.support, 'Support request', body);
};

export const buildBillingMailto = (context: { quoteRef?: string; amount?: string }) => {
  const body = [
    'Billing request',
    '',
    `Quote reference: ${context.quoteRef || 'Not available'}`,
    `Amount: ${context.amount || 'Not specified'}`,
    '',
    'Please include any additional billing details:',
  ].join('\n');
  return buildMailto(wnyhsContact.emails.billing, 'Billing request', body);
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
