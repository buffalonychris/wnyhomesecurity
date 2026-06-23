import type { PublicSearchItem, PublicSearchItemType } from '../content/publicSearchIndex';

export type PublicSearchResult = {
  item: PublicSearchItem;
  score: number;
};

const normalizeSearchText = (value: string) => value.trim().toLowerCase().replace(/\s+/g, ' ');

const includesTerm = (value: string, query: string) => normalizeSearchText(value).includes(query);

const hasKeywordMatch = (keywords: string[], query: string) =>
  keywords.some((keyword) => includesTerm(keyword, query) || query.includes(normalizeSearchText(keyword)));

export const publicSearchTypeLabels: Record<PublicSearchItemType, string> = {
  category: 'Category',
  solution: 'Solution',
  marketing: 'Marketing',
  support: 'Support',
  demo: 'Demo',
};

export const publicSearchTypeOrder: PublicSearchItemType[] = ['category', 'solution', 'marketing', 'support', 'demo'];

export const scorePublicSearchItem = (item: PublicSearchItem, rawQuery: string) => {
  const query = normalizeSearchText(rawQuery);
  if (!query) return 0;

  const title = normalizeSearchText(item.title);
  const category = normalizeSearchText(item.category ?? '');
  const typeLabel = normalizeSearchText(publicSearchTypeLabels[item.type]);
  const summary = normalizeSearchText(item.summary);

  let score = 0;

  if (title === query) score += 1000;
  if (title.includes(query)) score += 700;
  if (hasKeywordMatch(item.keywords, query)) score += 500;
  if (category && (category.includes(query) || query.includes(category))) score += 350;
  if (typeLabel.includes(query)) score += 260;
  if (summary.includes(query)) score += 180;

  if (score === 0) return 0;

  return score + item.priority;
};

export const searchPublicIndex = (items: PublicSearchItem[], rawQuery: string): PublicSearchResult[] => {
  const query = normalizeSearchText(rawQuery);
  if (!query) return [];

  return items
    .map((item) => ({ item, score: scorePublicSearchItem(item, query) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || b.item.priority - a.item.priority || a.item.title.localeCompare(b.item.title));
};
