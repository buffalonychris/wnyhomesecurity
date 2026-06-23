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

  it('keeps the legacy home-security route from competing with the root homepage', () => {
    const policy = getSeoPolicy('/home-security');

    expect(policy.robots).toBe('noindex, follow');
    expect(policy.canonicalPath).toBe('/');
    expect(policy.title).toBe('WNY Home Security | Western New York Smart Property Integrator');
  });
});
