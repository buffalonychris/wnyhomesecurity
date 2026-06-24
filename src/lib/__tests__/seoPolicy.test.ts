import { describe, expect, it } from 'vitest';
import { buildCanonicalUrl, getSeoPolicy } from '../seoPolicy';

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
});
