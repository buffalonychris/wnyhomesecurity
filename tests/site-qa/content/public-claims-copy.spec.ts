import { expect, type Page, test } from '@playwright/test';

const publicRoutes = [
  '/',
  '/categories/home-security',
  '/categories/home-automation',
  '/categories/home-safety',
  '/categories/home-lighting',
  '/categories/aging-in-place',
  '/about',
  '/contact',
  '/support',
  '/search',
];

const claimGroups = [
  {
    group: 'Emergency / dispatch claims',
    phrases: [
      'police dispatch',
      'emergency dispatch',
      'fire dispatch',
      'medical dispatch',
      '911',
      'emergency response',
    ],
  },
  {
    group: 'Guaranteed safety / prevention claims',
    phrases: [
      'prevents break-ins',
      'prevent break-ins',
      'prevents theft',
      'prevent theft',
      'guaranteed protection',
      'guarantee safety',
      'keeps you safe',
      'stops intruders',
    ],
  },
  {
    group: 'Monitoring / alarm-company claims',
    phrases: [
      'central station',
      '24/7 monitoring',
      'professional monitoring',
      'alarm monitoring',
      'monitored alarm',
    ],
  },
  {
    group: 'Medical / elder-care claims',
    phrases: [
      'fall detection',
      'medical monitoring',
      'replaces caregiver',
      'caregiver replacement',
      'injury prevention',
      'clinical monitoring',
    ],
  },
  {
    group: 'Subscription / lock-in conflict claims',
    phrases: [
      'required subscription',
      'monthly monitoring required',
      'long-term contract',
      'locked into',
      'vendor lock-in',
    ],
  },
  {
    group: 'Insurance / risk-reduction claims',
    phrases: [
      'insurance discount guaranteed',
      'lowers your insurance',
      'reduces liability',
      'eliminates risk',
    ],
  },
  {
    group: 'Surveillance-risk language',
    phrases: [
      'surveillance',
      'watch your loved one',
      'track your loved one',
      'monitor every move',
    ],
  },
] as const;

type ClaimObservation = {
  type: 'claims-copy-observation';
  route: string;
  claimGroup: string;
  matchedPhrase: string;
  snippet: string;
};

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const readVisiblePageText = async (page: Page) =>
  page.evaluate(() => {
    const isVisibleTextNode = (node: Text) => {
      const parent = node.parentElement;

      if (!parent) {
        return false;
      }

      if (parent.closest('script, style, noscript, template, [hidden], [aria-hidden="true"]')) {
        return false;
      }

      const style = window.getComputedStyle(parent);
      const rect = parent.getBoundingClientRect();

      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!(node instanceof Text) || !node.nodeValue?.trim()) {
          return NodeFilter.FILTER_REJECT;
        }

        return isVisibleTextNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });

    const textParts: string[] = [];
    let currentNode = walker.nextNode();

    while (currentNode) {
      textParts.push(currentNode.textContent ?? '');
      currentNode = walker.nextNode();
    }

    return textParts.join(' ').replace(/\s+/g, ' ').trim();
  });

const createSnippet = (text: string, matchIndex: number, phraseLength: number) => {
  const snippetStart = Math.max(0, matchIndex - 80);
  const snippetEnd = Math.min(text.length, matchIndex + phraseLength + 80);
  const prefix = snippetStart > 0 ? '...' : '';
  const suffix = snippetEnd < text.length ? '...' : '';

  return `${prefix}${text.slice(snippetStart, snippetEnd)}${suffix}`;
};

const findClaimObservations = (route: string, visibleText: string): ClaimObservation[] => {
  const observations: ClaimObservation[] = [];
  const normalizedText = visibleText.toLowerCase();

  for (const claimGroup of claimGroups) {
    for (const phrase of claimGroup.phrases) {
      const normalizedPhrase = phrase.toLowerCase();
      let searchFrom = 0;
      let matchIndex = normalizedText.indexOf(normalizedPhrase, searchFrom);

      while (matchIndex !== -1) {
        observations.push({
          type: 'claims-copy-observation',
          route,
          claimGroup: claimGroup.group,
          matchedPhrase: phrase,
          snippet: createSnippet(visibleText, matchIndex, phrase.length),
        });

        searchFrom = matchIndex + normalizedPhrase.length;
        matchIndex = normalizedText.indexOf(normalizedPhrase, searchFrom);
      }
    }
  }

  return observations;
};

const recordObservation = (observation: ClaimObservation) => {
  console.warn(JSON.stringify(observation));
  test.info().annotations.push({
    type: observation.type,
    description: JSON.stringify(observation),
  });
};

test.describe('public route claims and copy observations', () => {
  for (const route of publicRoutes) {
    test(`${route} records governed copy-claim observations`, async ({ page, baseURL }) => {
      expect(baseURL, 'claims/copy checks require an explicit local/default Site QA base URL').toBeTruthy();
      expect(isProductionURL(baseURL!), 'claims/copy checks must not run against production').toBe(false);

      const response = await page.goto(route);

      expect(response, `${route} should return a page response before copy can be read`).not.toBeNull();
      expect(response?.status(), `${route} should not fail at the HTTP layer`).toBeLessThan(400);
      await expect(page.locator('body')).toBeVisible();

      const visibleText = await readVisiblePageText(page);
      expect(visibleText, `${route} should expose visible body text for claims/copy checks`).not.toBe('');

      const observations = findClaimObservations(route, visibleText);

      for (const observation of observations) {
        recordObservation(observation);
      }

      test.info().annotations.push({
        type: 'claims-copy-summary',
        description: JSON.stringify({
          route,
          checkedClaimGroupCount: claimGroups.length,
          checkedPhraseCount: claimGroups.reduce((total, claimGroup) => total + claimGroup.phrases.length, 0),
          observationCount: observations.length,
        }),
      });
    });
  }
});
