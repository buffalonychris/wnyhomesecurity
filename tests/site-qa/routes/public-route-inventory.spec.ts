import { expect, type APIRequestContext, type Page, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const canonicalHost = 'www.wnyhomesecurity.com';

const manualExpectedRoutes = [
  '/',
  '/search',
  '/solutions',
  '/fit-check',
  '/estimate',
  '/support',
  '/our-work',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/request-call',
  '/request-onsite-estimate',
  '/categories/home-security',
  '/categories/aging-in-place',
  '/categories/home-safety',
  '/categories/home-automation',
  '/categories/home-lighting',
];

const seedRouteFiles = [
  'tests/site-qa/routes/public-routes.spec.ts',
  'tests/site-qa/metadata/public-metadata.spec.ts',
  'tests/site-qa/accessibility/public-accessibility.spec.ts',
  'tests/site-qa/performance/public-performance.spec.ts',
  'tests/site-qa/structured-data/public-structured-data.spec.ts',
  'tests/site-qa/content/public-claims-copy.spec.ts',
  'tests/site-qa/visual/public-screenshot-evidence.spec.ts',
  'tests/site-qa/visual/public-baseline-candidates.spec.ts',
  'tests/site-qa/crawl/public-sitemap-robots.spec.ts',
  'tests/site-qa/runtime/public-runtime-observations.spec.ts',
];

const routeDefinitionFiles = [
  'src/App.tsx',
  'src/content/wnyhsNavigation.ts',
  'src/content/publicSearchIndex.ts',
  'src/content/wnyhsOfferCatalog.ts',
  'src/lib/seoPolicy.ts',
];

const privateOrProtectedRoutePatterns = [
  /^\/admin(?:\/|$)/,
  /^\/api(?:\/|$)/,
  /^\/certificate(?:\/|$)/,
  /^\/operator(?:\/|$)/,
  /^\/prototype(?:\/|$)/,
  /^\/quote(?:Review|Print|\/|$)/,
  /^\/agreement(?:Review|Print|\/|$)/,
  /^\/payment(?:\/|$)/,
  /^\/review(?:\/|$)/,
  /^\/schedule(?:\/|$)/,
  /^\/test(?:\/|$)/,
  /^\/uat(?:\/|$)/,
  /^\/newsite(?:\/|$)/,
  /^\/resume(?:-verify|\/|$)/,
  /^\/verify(?:\/|$)/,
];

const candidateGroups = [
  {
    type: 'package-route-observation',
    label: 'Package pages',
    patterns: [/^\/packages(?:\/|$)/, /^\/home-security\/packages(?:\/|$)/, /^\/newsite\/home-security\/packages(?:\/|$)/],
  },
  {
    type: 'solution-route-observation',
    label: 'Individual solution pages',
    patterns: [/^\/solutions\//],
  },
  {
    type: 'qr-route-observation',
    label: 'QR landing pages',
    patterns: [/^\/qrlanding(?:\.htm|\/|$)/],
  },
  {
    type: 'dashboard-demo-route-observation',
    label: 'Dashboard demo pages',
    patterns: [/dashboard/i, /^\/demo(?:\/|$)/, /^\/5-day-demo(?:\/|$)/, /^\/newsite\/demos(?:\/|$)/],
  },
  {
    type: 'funnel-route-observation',
    label: 'Quote / agreement / deposit / success / cancel / schedule funnel pages',
    patterns: [
      /^\/quote(?:Review|Print|\/|$)/,
      /^\/agreement(?:Review|Print|\/|$)/,
      /^\/payment(?:\/|$)/,
      /^\/home-security\/pay-deposit(?:\/|$)/,
      /^\/home-security\/payment(?:\/|$)/,
      /^\/schedule(?:\/|$)/,
      /^\/newsite\/quote(?:\/|$)/,
      /^\/newsite\/agreement(?:\/|$)/,
      /^\/newsite\/home-security\/pay-deposit(?:\/|$)/,
      /^\/newsite\/home-security\/payment(?:\/|$)/,
      /^\/newsite\/schedule(?:\/|$)/,
    ],
  },
  {
    type: 'home-assistant-demo-route-observation',
    label: 'Home Assistant demo pages',
    patterns: [/ha-gold-dashboard/i],
  },
  {
    type: 'legacy-prototype-operator-route-observation',
    label: 'Legacy / newsite / review / prototype / operator routes',
    patterns: [
      /^\/home-security(?:\/|$)/,
      /^\/home-automation(?:\/|$)/,
      /^\/home-safety(?:\/|$)/,
      /^\/home-lighting(?:\/|$)/,
      /^\/aging-in-place(?:\/|$)/,
      /^\/newsite(?:\/|$)/,
      /^\/review(?:\/|$)/,
      /^\/prototype(?:\/|$)/,
      /^\/operator(?:\/|$)/,
    ],
  },
];

type ParsedSitemap = {
  valid: boolean;
  parserError: string | null;
  routes: string[];
};

type InventoryObservation = {
  type:
    | 'app-route-source-record'
    | 'expected-route-coverage-observation'
    | 'extra-route-observation'
    | 'manual-expected-route-record'
    | 'nav-sitemap-mismatch-observation'
    | 'private-protected-route-observation'
    | 'route-source-summary'
    | 'seed-coverage-gap-observation'
    | 'seed-route-source-record'
    | 'sitemap-gap-observation'
    | 'sitemap-route-source-record'
    | 'visible-nav-route-source-record'
    | (typeof candidateGroups)[number]['type'];
  route?: string;
  source?: string;
  sources?: string[];
  count?: number;
  routes?: string[];
  message: string;
};

const repoFile = (relativePath: string) => readFileSync(resolve(process.cwd(), relativePath), 'utf8');

const normalizeRoute = (route: string) => {
  const trimmed = route.trim();
  if (!trimmed || !trimmed.startsWith('/')) {
    return null;
  }

  const withoutOrigin = trimmed.startsWith('//') ? trimmed : trimmed.replace(/^https?:\/\/[^/]+/i, '');
  const pathOnly = withoutOrigin.split('#')[0].split('?')[0] || '/';
  return pathOnly.length > 1 ? pathOnly.replace(/\/+$/, '') : pathOnly;
};

const uniq = (routes: Iterable<string>) => [...new Set([...routes].map(normalizeRoute).filter(Boolean) as string[])].sort();

const extractLiteralRoutes = (text: string) =>
  uniq(
    [...text.matchAll(/['"`]((?:\/[A-Za-z0-9._~!$&'()*+,;=:@%-]+)+)(?:[?#][^'"`]*)?['"`]/g)].map((match) => match[1]),
  );

const extractReactRoutePaths = (text: string) =>
  uniq([...text.matchAll(/<Route\s+[^>]*path=["']([^"']+)["']/g)].map((match) => match[1]).filter((route) => route.startsWith('/')));

const readRoutesFromFiles = (files: string[], extractor: (text: string) => string[]) => {
  const byRoute = new Map<string, string[]>();

  for (const file of files) {
    for (const route of extractor(repoFile(file))) {
      byRoute.set(route, [...(byRoute.get(route) ?? []), file]);
    }
  }

  return byRoute;
};

const mergeRouteSource = (target: Map<string, Set<string>>, route: string, source: string) => {
  const normalizedRoute = normalizeRoute(route);
  if (!normalizedRoute) {
    return;
  }

  target.set(normalizedRoute, new Set([...(target.get(normalizedRoute) ?? []), source]));
};

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const isPrivateOrProtected = (route: string) => privateOrProtectedRoutePatterns.some((pattern) => pattern.test(route));

const recordObservation = (observation: InventoryObservation) => {
  console.warn(JSON.stringify(observation));
  test.info().annotations.push({
    type: observation.type,
    description: JSON.stringify(observation),
  });
};

const parseSitemapXml = async (page: Page, sitemapXml: string) =>
  page.evaluate<ParsedSitemap, string>((xml) => {
    const parsed = new DOMParser().parseFromString(xml, 'application/xml');
    const parserError = parsed.querySelector('parsererror')?.textContent?.replace(/\s+/g, ' ').trim() ?? null;

    return {
      valid: !parserError,
      parserError,
      routes: Array.from(parsed.querySelectorAll('url > loc, sitemap > loc'))
        .map((node) => node.textContent?.trim() ?? '')
        .filter(Boolean)
        .map((url) => new URL(url).pathname),
    };
  }, sitemapXml);

const fetchSitemapRoutes = async (request: APIRequestContext, page: Page) => {
  const response = await request.get('/sitemap.xml', { failOnStatusCode: false });
  if (response.status() === 404) {
    return [];
  }

  expect(response.status(), 'sitemap.xml exists but failed to load during route inventory').toBeLessThan(400);

  const parsed = await parseSitemapXml(page, await response.text());
  expect(parsed.valid, parsed.parserError ?? 'sitemap.xml should be valid XML when present').toBe(true);

  return uniq(parsed.routes);
};

const readVisibleNavigationRoutes = async (page: Page) =>
  page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))
      .filter((anchor) => {
        const rect = anchor.getBoundingClientRect();
        const style = window.getComputedStyle(anchor);
        return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
      })
      .map((anchor) => {
        const href = anchor.getAttribute('href') ?? '';
        if (href.startsWith('/')) {
          return href;
        }

        try {
          const url = new URL(href, window.location.href);
          return url.origin === window.location.origin ? `${url.pathname}${url.search}` : '';
        } catch {
          return '';
        }
      })
      .filter(Boolean),
  );

test.describe('public route inventory validation observations', () => {
  test('compares seed, sitemap, app, nav, and manual expected public route candidates', async ({
    baseURL,
    page,
    request,
  }) => {
    expect(baseURL, 'route inventory requires an explicit local/default Site QA base URL').toBeTruthy();
    expect(isProductionURL(baseURL!), 'route inventory must not run against production').toBe(false);

    const rootResponse = await page.goto('/');
    expect(rootResponse, 'route inventory local app root should return a page response').not.toBeNull();
    expect(rootResponse?.status(), 'route inventory local app root should not fail at the HTTP layer').toBeLessThan(400);
    await expect(page.locator('body')).toBeVisible();

    const seedRoutes = readRoutesFromFiles(seedRouteFiles, extractLiteralRoutes);
    const appRoutes = readRoutesFromFiles(routeDefinitionFiles, (text) => uniq([...extractReactRoutePaths(text), ...extractLiteralRoutes(text)]));
    const sitemapRoutes = await fetchSitemapRoutes(request, page);
    const visibleNavRoutes = uniq(await readVisibleNavigationRoutes(page));
    const manualRoutes = uniq(manualExpectedRoutes);

    const discoveredRoutes = new Map<string, Set<string>>();

    for (const [route, sources] of seedRoutes) {
      sources.forEach((source) => mergeRouteSource(discoveredRoutes, route, `seed:${source}`));
      recordObservation({
        type: 'seed-route-source-record',
        route,
        sources,
        message: 'Route candidate discovered from existing Site QA seed specs.',
      });
    }

    for (const [route, sources] of appRoutes) {
      sources.forEach((source) => mergeRouteSource(discoveredRoutes, route, `app:${source}`));
      recordObservation({
        type: 'app-route-source-record',
        route,
        sources,
        message: 'Route candidate discovered from app route definitions, constants, or route maps.',
      });
    }

    for (const route of sitemapRoutes) {
      mergeRouteSource(discoveredRoutes, route, 'sitemap:/sitemap.xml');
      recordObservation({
        type: 'sitemap-route-source-record',
        route,
        source: '/sitemap.xml',
        message: 'Route candidate discovered from sitemap.xml.',
      });
    }

    for (const route of visibleNavRoutes) {
      mergeRouteSource(discoveredRoutes, route, 'visible-navigation:/');
      recordObservation({
        type: 'visible-nav-route-source-record',
        route,
        source: '/',
        message: 'Route candidate discovered from visible rendered navigation or page links on the local root route.',
      });
    }

    for (const route of manualRoutes) {
      mergeRouteSource(discoveredRoutes, route, 'manual-expected:PLAY016');
      recordObservation({
        type: 'manual-expected-route-record',
        route,
        source: 'PLAY016',
        message: 'Manual expected public route candidate declared by PLAY016.',
      });
    }

    const seedRouteSet = new Set(seedRoutes.keys());
    const sitemapRouteSet = new Set(sitemapRoutes);
    const navRouteSet = new Set(visibleNavRoutes);
    const allRoutes = uniq(discoveredRoutes.keys());

    recordObservation({
      type: 'route-source-summary',
      count: allRoutes.length,
      routes: allRoutes,
      message:
        'Combined route inventory from seed QA specs, sitemap.xml, app route definitions/constants/maps, visible navigation, and PLAY016 manual expected candidates.',
    });

    for (const expectedRoute of manualRoutes) {
      const sources = [...(discoveredRoutes.get(expectedRoute) ?? [])].sort();

      if (!sources.some((source) => !source.startsWith('manual-expected:'))) {
        recordObservation({
          type: 'expected-route-coverage-observation',
          route: expectedRoute,
          sources,
          message:
            'Manual expected route candidate was not found in seed QA routes, sitemap.xml, app route definitions/constants/maps, or visible navigation. Observation only.',
        });
      }

      if (!seedRouteSet.has(expectedRoute)) {
        recordObservation({
          type: 'seed-coverage-gap-observation',
          route: expectedRoute,
          message: 'Manual expected route candidate is not covered by the current seed Site QA route set. Observation only.',
        });
      }

      if (!sitemapRouteSet.has(expectedRoute)) {
        recordObservation({
          type: 'sitemap-gap-observation',
          route: expectedRoute,
          message: 'Manual expected route candidate is not present in sitemap.xml. Observation only.',
        });
      }
    }

    for (const route of allRoutes) {
      const sources = [...(discoveredRoutes.get(route) ?? [])].sort();

      if (!manualRoutes.includes(route) && (sitemapRouteSet.has(route) || seedRouteSet.has(route))) {
        recordObservation({
          type: 'extra-route-observation',
          route,
          sources,
          message: 'Route appears in seed QA or sitemap sources but is not in the PLAY016 manual expected route candidates. Observation only.',
        });
      }

      if (isPrivateOrProtected(route)) {
        recordObservation({
          type: 'private-protected-route-observation',
          route,
          sources,
          message:
            'Route candidate matches a private, protected, transaction, prototype, or operator route pattern. Exposure/classification review observation only.',
        });
      }
    }

    for (const route of visibleNavRoutes) {
      if (!sitemapRouteSet.has(route) && !isPrivateOrProtected(route)) {
        recordObservation({
          type: 'nav-sitemap-mismatch-observation',
          route,
          message: 'Visible local navigation/page link is not present in sitemap.xml. Observation only.',
        });
      }
    }

    for (const group of candidateGroups) {
      const matches = allRoutes.filter((route) => group.patterns.some((pattern) => pattern.test(route)));
      for (const route of matches) {
        recordObservation({
          type: group.type,
          route,
          sources: [...(discoveredRoutes.get(route) ?? [])].sort(),
          message: `${group.label} candidate exists or appears in route definitions, sitemap, seed specs, visible navigation, or manual candidates. Observation only.`,
        });
      }
    }
  });
});
