import { describe, expect, it } from 'vitest';

import { publicSearchIndex, validatePublicSearchIndex, type PublicSearchItem } from '../publicSearchIndex';

describe('publicSearchIndex', () => {
  it('contains only valid public search records', () => {
    expect(validatePublicSearchIndex(publicSearchIndex)).toMatchObject({
      itemCount: publicSearchIndex.length,
    });
  });

  it('includes categories, route-backed solutions, marketing pages, and support pages', () => {
    expect(publicSearchIndex.filter((item) => item.type === 'category')).toHaveLength(5);
    expect(publicSearchIndex.filter((item) => item.type === 'solution')).toHaveLength(4);
    expect(publicSearchIndex.filter((item) => item.type === 'marketing')).toHaveLength(3);
    expect(publicSearchIndex.filter((item) => item.type === 'support')).toHaveLength(2);
    expect(publicSearchIndex.filter((item) => item.type === 'demo')).toHaveLength(0);
  });

  it('excludes package pages and protected routes as primary results', () => {
    expect(publicSearchIndex.some((item) => item.route.startsWith('/packages'))).toBe(false);
    expect(publicSearchIndex.some((item) => item.route.includes('/planner'))).toBe(false);
    expect(publicSearchIndex.some((item) => item.route.startsWith('/payment'))).toBe(false);
    expect(publicSearchIndex.some((item) => item.route.startsWith('/operator'))).toBe(false);
  });

  it('rejects duplicate ids, duplicate routes, empty fields, and internal catalog terms', () => {
    const [firstItem] = publicSearchIndex;
    const duplicateId: PublicSearchItem = { ...firstItem, route: '/duplicate-id-route' };
    const duplicateRoute: PublicSearchItem = { ...firstItem, id: 'duplicate-route-id' };
    const emptyTitle: PublicSearchItem = { ...firstItem, id: 'empty-title', route: '/empty-title', title: '' };
    const internalTerm: PublicSearchItem = { ...firstItem, id: 'internal-term', route: '/internal-term', summary: 'BOM details' };

    expect(() => validatePublicSearchIndex([firstItem, duplicateId])).toThrow(/Duplicate public search item id/);
    expect(() => validatePublicSearchIndex([firstItem, duplicateRoute])).toThrow(/Duplicate public search item route/);
    expect(() => validatePublicSearchIndex([emptyTitle])).toThrow(/missing a title/);
    expect(() => validatePublicSearchIndex([internalTerm])).toThrow(/internal catalog terminology/);
  });
});
