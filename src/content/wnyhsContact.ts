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

export const PUBLIC_PHONE_DISPLAY = '716.391.2405';
export const PUBLIC_PHONE_TEL = '+17163912405';
export const PUBLIC_PHONE_SMS = '+17163912405';

export const EMAILS = {
  hello: 'hello@wnyhomesecurity.com',
  quotes: 'quotes@wnyhomesecurity.com',
  schedule: 'schedule@wnyhomesecurity.com',
  support: 'support@wnyhomesecurity.com',
  billing: 'billing@wnyhomesecurity.com',
  install: 'install@wnyhomesecurity.com',
  privacy: 'privacy@wnyhomesecurity.com',
  partners: 'partners@wnyhomesecurity.com',
} as const;

export const wnyhsContact = {
  phone: {
    display: PUBLIC_PHONE_DISPLAY,
    tel: PUBLIC_PHONE_TEL,
    sms: PUBLIC_PHONE_SMS,
  },
  emails: EMAILS,
  location: 'West Seneca, NY 14224',
} as const;

const formatValue = (value?: string) => value?.trim() || '—';

const formatList = (value?: string[] | string) => {
  if (!value) return '—';
  if (Array.isArray(value)) {
    return value.length ? value.join(', ') : '—';
  }
  return value.trim() || '—';
};

export const buildMailto = (to: string, subject: string, body: string) => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return query ? `mailto:${to}?${query}` : `mailto:${to}`;
};

export const buildSms = (body?: string) => {
  const params = new URLSearchParams();
  if (body) params.set('body', body);
  const query = params.toString();
  return query ? `sms:${PUBLIC_PHONE_SMS}?${query}` : `sms:${PUBLIC_PHONE_SMS}`;
};

export const buildTel = () => `tel:${PUBLIC_PHONE_TEL}`;

export const buildTalkToUsMailto = (context?: {
  pageRoute?: string;
  preferredCallbackTime?: string;
  phone?: string;
  question?: string;
  summary?: string;
}) => {
  const body = [
    `Date: ${formatQuoteDate()}`,
    `Preferred callback time: ${formatValue(context?.preferredCallbackTime)}`,
    `Phone: ${formatValue(context?.phone)}`,
    `Page: ${formatValue(context?.pageRoute)}`,
    '',
    'Question:',
    context?.question || 'Tell us how we can help.',
    ...(context?.summary ? ['', 'Details:', context.summary] : []),
  ].join('\n');
  return buildMailto(wnyhsContact.emails.hello, 'WNY Home Security — Quick question', body);
};

export const buildQuoteHelpMailto = (context: {
  tier?: string;
  addOns?: string[];
  city?: string;
  contactMethod?: string;
  notes?: string;
  quoteRef?: string;
  pageRoute?: string;
}) => {
  const tierLabel = context.tier ? `Quote help — ${context.tier}` : 'Quote help — Home Security';
  const body = [
    `Date: ${formatQuoteDate()}`,
    `Tier: ${formatValue(context.tier)}`,
    `Add-ons: ${formatList(context.addOns)}`,
    `City: ${formatValue(context.city)}`,
    `Best contact method: ${formatValue(context.contactMethod)}`,
    `Reference: ${formatValue(context.quoteRef)}`,
    `Page: ${formatValue(context.pageRoute)}`,
    '',
    'Notes:',
    context.notes || 'Please share any questions or adjustments needed.',
  ].join('\n');
  return buildMailto(wnyhsContact.emails.quotes, tierLabel, body);
};

export const buildScheduleHelpMailto = (context: {
  tier?: string;
  city?: string;
  preferredWindows?: string[];
  accessNotes?: string;
  pageRoute?: string;
}) => {
  const body = [
    `Date: ${formatQuoteDate()}`,
    `Tier: ${formatValue(context.tier)}`,
    `City: ${formatValue(context.city)}`,
    `Preferred windows: ${formatList(context.preferredWindows)}`,
    `Page: ${formatValue(context.pageRoute)}`,
    '',
    'Access notes:',
    context.accessNotes || 'Please share any access constraints or gate details.',
  ].join('\n');
  return buildMailto(wnyhsContact.emails.schedule, 'Scheduling — Request install window', body);
};

export const buildSupportMailto = (context: {
  quoteRef?: string;
  issue?: string;
  pageRoute?: string;
  when?: string;
  contactMethod?: string;
}) => {
  const when = context.when?.trim();
  const contactMethod = context.contactMethod?.trim();
  const subject = `Support — ${context.issue || 'Help needed'}${context.quoteRef ? ` — ${context.quoteRef}` : ''}`;
  const body = [
    `Date: ${formatQuoteDate()}`,
    `Reference: ${formatValue(context.quoteRef)}`,
    `Issue: ${formatValue(context.issue)}`,
    `When did it happen?: ${when || 'Please add date/time.'}`,
    `Best contact method: ${contactMethod || 'Phone or email (please specify).'}`,
    `Page: ${formatValue(context.pageRoute)}`,
    '',
    'Photos/video link (optional):',
  ].join('\n');
  return buildMailto(wnyhsContact.emails.support, subject, body);
};

export const buildBillingMailto = (context: { quoteRef?: string; tier?: string; question?: string; pageRoute?: string }) => {
  const body = [
    `Date: ${formatQuoteDate()}`,
    `Tier: ${formatValue(context.tier)}`,
    `Reference: ${formatValue(context.quoteRef)}`,
    `Page: ${formatValue(context.pageRoute)}`,
    '',
    'Question:',
    context.question || 'Please share your deposit or balance question.',
  ].join('\n');
  return buildMailto(wnyhsContact.emails.billing, 'Billing — Deposit / balance question', body);
};

export const buildInstallMailto = (context?: { pageRoute?: string }) => {
  const body = [
    `Date: ${formatQuoteDate()}`,
    `Page: ${formatValue(context?.pageRoute)}`,
    '',
    'Address:',
    '',
    'Parking/access notes:',
    '',
    'Pets on site:',
    '',
    'Gate codes:',
  ].join('\n');
  return buildMailto(wnyhsContact.emails.install, 'Install day logistics', body);
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
