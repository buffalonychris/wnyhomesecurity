import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildCanonicalUrl, getSeoPolicy } from '../seoPolicy';

const canonicalSitemapUrls = [
  'https://www.wnyhomesecurity.com/',
  'https://www.wnyhomesecurity.com/categories/home-security',
  'https://www.wnyhomesecurity.com/categories/home-automation',
  'https://www.wnyhomesecurity.com/categories/home-safety',
  'https://www.wnyhomesecurity.com/categories/home-lighting',
  'https://www.wnyhomesecurity.com/categories/aging-in-place',
  'https://www.wnyhomesecurity.com/solutions/senior-safety',
  'https://www.wnyhomesecurity.com/solutions/water-protection',
  'https://www.wnyhomesecurity.com/solutions/family-awareness',
  'https://www.wnyhomesecurity.com/solutions/vacation-homes',
  'https://www.wnyhomesecurity.com/about',
  'https://www.wnyhomesecurity.com/our-work',
  'https://www.wnyhomesecurity.com/contact',
  'https://www.wnyhomesecurity.com/support',
  'https://www.wnyhomesecurity.com/search',
];

const excludedSitemapUrls = [
  'https://www.wnyhomesecurity.com/home-security',
  'https://www.wnyhomesecurity.com/home-automation',
  'https://www.wnyhomesecurity.com/home-safety',
  'https://www.wnyhomesecurity.com/home-lighting',
  'https://www.wnyhomesecurity.com/aging-in-place',
  'https://www.wnyhomesecurity.com/search?q=water',
  'https://www.wnyhomesecurity.com/qrlanding',
  'https://www.wnyhomesecurity.com/qrlanding.htm',
  'https://www.wnyhomesecurity.com/privacy',
  'https://www.wnyhomesecurity.com/terms',
  'https://www.wnyhomesecurity.com/packages',
  'https://www.wnyhomesecurity.com/home-security/dashboard',
  'https://www.wnyhomesecurity.com/demo',
  'https://www.wnyhomesecurity.com/5-day-demo',
  'https://www.wnyhomesecurity.com/newsite/demos/ha-gold-dashboard',
  'https://www.wnyhomesecurity.com/payment',
  'https://www.wnyhomesecurity.com/checkout',
  'https://www.wnyhomesecurity.com/agreementReview',
  'https://www.wnyhomesecurity.com/schedule',
  'https://www.wnyhomesecurity.com/quoteReview',
  'https://www.wnyhomesecurity.com/home-security/planner',
  'https://www.wnyhomesecurity.com/operator',
  'https://www.wnyhomesecurity.com/admin',
  'https://www.wnyhomesecurity.com/review',
  'https://www.wnyhomesecurity.com/verify',
  'https://www.wnyhomesecurity.com/quotePrint',
  'https://www.wnyhomesecurity.com/certificate',
  'https://www.wnyhomesecurity.com/halo-pushbutton',
  'https://www.wnyhomesecurity.com/vendors',
];

const excludedSitemapFragments = ['https://wnyhomesecurity.com', '/search?q=', '/newsite/'];

const readRepoFile = (path: string) => readFileSync(resolve(process.cwd(), path), 'utf8');

describe('seoPolicy route metadata', () => {
  it('uses the www canonical host', () => {
    expect(buildCanonicalUrl('/categories/home-security')).toBe(
      'https://www.wnyhomesecurity.com/categories/home-security'
    );
  });

  it('indexes the canonical homepage and category routes', () => {
    const paths = [
      '/',
      '/categories/home-security',
      '/categories/home-automation',
      '/categories/home-safety',
      '/categories/home-lighting',
      '/categories/aging-in-place',
    ];

    for (const path of paths) {
      const policy = getSeoPolicy(path);
      expect(policy.robots).toBe('index, follow');
      expect(policy.canonicalPath).toBe(path);
      expect(policy.title).toBeTruthy();
      expect(policy.description).toBeTruthy();
      expect(policy.openGraph?.title).toBe(policy.title);
      expect(policy.openGraph?.description).toBe(policy.description);
      expect(policy.openGraph?.image).toMatch(/^https:\/\/www\.wnyhomesecurity\.com\/images\//);
      expect(policy.twitter?.card).toBe('summary_large_image');
    }
  });

  it('indexes current route-backed solution pages with social metadata', () => {
    const paths = [
      '/solutions/senior-safety',
      '/solutions/water-protection',
      '/solutions/family-awareness',
      '/solutions/vacation-homes',
    ];

    for (const path of paths) {
      const policy = getSeoPolicy(path);
      expect(policy.robots).toBe('index, follow');
      expect(policy.canonicalPath).toBe(path);
      expect(policy.title).toContain('WNY Home Security');
      expect(policy.description).toBeTruthy();
      expect(policy.openGraph?.title).toBe(policy.title);
      expect(policy.openGraph?.description).toBe(policy.description);
      expect(policy.openGraph?.image).toMatch(/^https:\/\/www\.wnyhomesecurity\.com\/images\/home-security\/solutions\//);
      expect(policy.twitter?.card).toBe('summary_large_image');
      expect(policy.twitter?.title).toBe(policy.title);
      expect(policy.twitter?.description).toBe(policy.description);
    }
  });

  it('keeps the legacy home-security route from competing with the root homepage', () => {
    const policy = getSeoPolicy('/home-security');

    expect(policy.robots).toBe('noindex, follow');
    expect(policy.canonicalPath).toBe('/');
    expect(policy.title).toBe('WNY Home Security | Western New York Smart Property Integrator');
  });

  it('keeps legacy flat category routes noindex while canonicalizing to approved destinations', () => {
    const policies = [
      ['/home-automation', '/categories/home-automation'],
      ['/home-safety', '/categories/home-safety'],
      ['/home-lighting', '/categories/home-lighting'],
      ['/aging-in-place', '/categories/aging-in-place'],
    ] as const;

    for (const [path, canonicalPath] of policies) {
      const policy = getSeoPolicy(path);
      expect(policy.robots).toBe('noindex, follow');
      expect(policy.canonicalPath).toBe(canonicalPath);
      expect(policy.noindexReason).toBe('Legacy category route canonicalizes to the approved public route');
    }
  });

  it('indexes scoped marketing support and search page metadata', () => {
    const paths = ['/about', '/our-work', '/contact', '/support', '/search'];

    for (const path of paths) {
      const policy = getSeoPolicy(path);
      expect(policy.robots).toBe('index, follow');
      expect(policy.canonicalPath).toBe(path);
      expect(policy.title).toContain('WNY Home Security');
      expect(policy.description).toBeTruthy();
      expect(policy.openGraph?.title).toBe(policy.title);
      expect(policy.openGraph?.description).toBe(policy.description);
      expect(policy.openGraph?.image).toMatch(/^https:\/\/www\.wnyhomesecurity\.com\/images\//);
      expect(policy.twitter?.card).toBe('summary_large_image');
    }
  });

  it('keeps search query URLs out of the index while canonicalizing to search', () => {
    const policy = getSeoPolicy('/search', '?q=water');

    expect(policy.robots).toBe('noindex, follow');
    expect(policy.canonicalPath).toBe('/search');
    expect(policy.noindexReason).toBe('Search query URL canonicalizes to the main search page');
  });

  it('keeps QR campaign and legal routes accessible without indexing them', () => {
    const policies = [
      getSeoPolicy('/qrlanding'),
      getSeoPolicy('/privacy'),
      getSeoPolicy('/terms'),
    ];

    for (const policy of policies) {
      expect(policy.robots).toBe('noindex, follow');
      expect(policy.title).toContain('WNY Home Security');
      expect(policy.description).toBeTruthy();
      expect(policy.openGraph?.title).toBe(policy.title);
      expect(policy.twitter?.title).toBe(policy.title);
    }

    expect(getSeoPolicy('/qrlanding').canonicalPath).toBe('/qrlanding');
    expect(getSeoPolicy('/qrlanding.htm').canonicalPath).toBe('/qrlanding');
  });

  it('keeps package routes accessible but out of public search indexing', () => {
    const paths = ['/packages', '/packages/a1', '/home-security/packages', '/newsite/home-security/packages/gold'];

    for (const path of paths) {
      const policy = getSeoPolicy(path);
      expect(policy.robots).toBe('noindex, follow');
      expect(policy.canonicalPath).toBe(path);
      expect(policy.noindexReason).toBe('Package route pending SEO visibility approval');
    }
  });

  it('keeps demo and experience routes in public review noindex policy', () => {
    const paths = [
      '/home-security/dashboard',
      '/demo',
      '/5-day-demo',
      '/newsite/demos/ha-gold-dashboard',
      '/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html',
    ];

    for (const path of paths) {
      const policy = getSeoPolicy(path);
      expect(policy.robots).toBe('noindex, follow');
      expect(policy.canonicalPath).toBe(path);
      expect(policy.noindexReason).toBe('Public review or demo route pending SEO visibility approval');
    }
  });

  it('keeps transaction payment schedule and checkout routes noindex follow', () => {
    const paths = [
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
      '/newsite/quote/review',
      '/newsite/agreement/review',
      '/newsite/home-security/payment/success',
      '/newsite/schedule',
    ];

    for (const path of paths) {
      const policy = getSeoPolicy(path);
      expect(policy.robots).toBe('noindex, follow');
      expect(policy.canonicalPath).toBe(path);
      expect(policy.noindexReason).toBe('Transactional journey');
    }
  });

  it('keeps tokenized print operator prototype and certificate routes protected from indexing', () => {
    const paths = [
      '/verify',
      '/quotePrint',
      '/agreementPrint',
      '/newsite/quote/print',
      '/newsite/agreement/print',
      '/uat',
      '/launchUat',
      '/sicar',
      '/certificate',
      '/operator',
      '/operator/property-model/quote-preview',
      '/admin/review',
      '/prototype/sample',
      '/test/route',
      '/newsite',
    ];

    for (const path of paths) {
      const policy = getSeoPolicy(path);
      expect(policy.robots).toBe('noindex, nofollow');
      expect(policy.canonicalPath).toBe(path);
    }
  });

  it('keeps the sitemap aligned to approved canonical indexable routes only', () => {
    const sitemap = readRepoFile('public/sitemap.xml');
    const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

    expect(locs).toEqual(canonicalSitemapUrls);
    expect(locs.every((url) => url.startsWith('https://www.wnyhomesecurity.com'))).toBe(true);

    for (const excluded of excludedSitemapUrls) {
      expect(locs).not.toContain(excluded);
    }

    for (const excluded of excludedSitemapFragments) {
      expect(sitemap).not.toContain(excluded);
    }
  });

  it('points robots to the canonical sitemap without blocking approved sitemap URLs', () => {
    const robots = readRepoFile('public/robots.txt');
    const robotsLines = robots
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    expect(robots).toContain('Allow: /');
    expect(robots).toContain('Sitemap: https://www.wnyhomesecurity.com/sitemap.xml');

    for (const url of canonicalSitemapUrls) {
      const path = new URL(url).pathname;
      expect(robotsLines).not.toContain(`Disallow: ${path}`);
    }
  });
});
