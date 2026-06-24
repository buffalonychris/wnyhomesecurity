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
});
