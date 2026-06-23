import { describe, expect, it } from 'vitest';

import { publicSearchIndex } from '../../content/publicSearchIndex';
import { searchPublicIndex } from '../publicSearch';

describe('searchPublicIndex', () => {
  it('prefers exact title matches', () => {
    const [result] = searchPublicIndex(publicSearchIndex, 'Home Security');

    expect(result.item.title).toBe('Home Security');
  });

  it('matches indexed title, keyword, category, type, and summary fields', () => {
    expect(searchPublicIndex(publicSearchIndex, 'water').some((result) => result.item.route === '/solutions/water-protection')).toBe(true);
    expect(searchPublicIndex(publicSearchIndex, 'lighting').some((result) => result.item.route === '/categories/home-lighting')).toBe(true);
    expect(searchPublicIndex(publicSearchIndex, 'automation').some((result) => result.item.route === '/categories/home-automation')).toBe(true);
    expect(searchPublicIndex(publicSearchIndex, 'support').some((result) => result.item.type === 'support')).toBe(true);
    expect(searchPublicIndex(publicSearchIndex, 'category').some((result) => result.item.type === 'category')).toBe(true);
  });

  it('returns no results for unmatched terms', () => {
    expect(searchPublicIndex(publicSearchIndex, 'zzzz')).toHaveLength(0);
  });
});
