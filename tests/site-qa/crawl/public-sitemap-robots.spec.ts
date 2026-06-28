import { expect, type APIRequestContext, type Page, test } from '@playwright/test';

const expectedSitemapHost = 'www.wnyhomesecurity.com';

const seedPublicRoutes = [
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

const privateRoutePatterns = [
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
];

type EndpointFetch = {
  path: string;
  status: number | null;
  ok: boolean;
  missing: boolean;
  text: string;
  contentType: string | null;
};

type ParsedSitemap = {
  valid: boolean;
  parserError: string | null;
  urls: string[];
};

type CrawlObservation = {
  type:
    | 'robots-disallow-observation'
    | 'robots-missing-observation'
    | 'robots-record'
    | 'seed-sitemap-observation'
    | 'sitemap-host-observation'
    | 'sitemap-missing-observation'
    | 'sitemap-private-route-observation'
    | 'sitemap-record'
    | 'sitemap-url-local-response-observation'
    | 'sitemap-url-shape-observation';
  path?: string;
  url?: string;
  status?: number | null;
  contentType?: string | null;
  disallowRules?: string[];
  sitemapUrlCount?: number;
  message: string;
};

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const recordObservation = (observation: CrawlObservation) => {
  console.warn(JSON.stringify(observation));
  test.info().annotations.push({
    type: observation.type,
    description: JSON.stringify(observation),
  });
};

const fetchEndpoint = async (request: APIRequestContext, path: string): Promise<EndpointFetch> => {
  const response = await request.get(path, { failOnStatusCode: false });
  const status = response.status();

  return {
    path,
    status,
    ok: response.ok(),
    missing: status === 404,
    text: status === 404 ? '' : await response.text(),
    contentType: response.headers()['content-type'] ?? null,
  };
};

const expectEndpointNotErrored = (endpoint: EndpointFetch) => {
  if (endpoint.missing) {
    return;
  }

  expect(
    endpoint.status,
    `${endpoint.path} exists but returned an invalid response status for local Site QA`,
  ).not.toBeNull();
  expect(endpoint.status!, `${endpoint.path} exists but failed at the HTTP layer`).toBeLessThan(400);
};

const parseRobotsDisallowRules = (robotsText: string) =>
  robotsText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^disallow\s*:/i.test(line))
    .map((line) => line.replace(/^disallow\s*:\s*/i, '').trim())
    .filter(Boolean);

const parseSitemapXml = async (page: Page, sitemapXml: string) =>
  page.evaluate<ParsedSitemap, string>((xml) => {
    const parsed = new DOMParser().parseFromString(xml, 'application/xml');
    const parserError = parsed.querySelector('parsererror')?.textContent?.replace(/\s+/g, ' ').trim() ?? null;

    return {
      valid: !parserError,
      parserError,
      urls: Array.from(parsed.querySelectorAll('url > loc, sitemap > loc'))
        .map((node) => node.textContent?.trim() ?? '')
        .filter(Boolean),
    };
  }, sitemapXml);

const toLocalPath = (url: string) => {
  const parsed = new URL(url);
  return `${parsed.pathname}${parsed.search}`;
};

const isObviousPrivateRoute = (pathname: string) => privateRoutePatterns.some((pattern) => pattern.test(pathname));

test.describe('public sitemap and robots crawlability observations', () => {
  test('robots.txt and sitemap.xml expose governed crawlability signals', async ({ baseURL, page, request }) => {
    expect(baseURL, 'crawl checks require an explicit local/default Site QA base URL').toBeTruthy();
    expect(isProductionURL(baseURL!), 'crawl checks must not run against production').toBe(false);

    const robots = await fetchEndpoint(request, '/robots.txt');
    expectEndpointNotErrored(robots);

    if (robots.missing) {
      recordObservation({
        type: 'robots-missing-observation',
        path: robots.path,
        status: robots.status,
        message: 'robots.txt was not found in local Site QA; this is recorded as an observation only.',
      });
    } else {
      expect(typeof robots.text, 'robots.txt should be readable as plain text').toBe('string');

      const disallowRules = parseRobotsDisallowRules(robots.text);

      recordObservation({
        type: 'robots-record',
        path: robots.path,
        status: robots.status,
        contentType: robots.contentType,
        disallowRules,
        message: 'robots.txt was present and readable as plain text.',
      });

      for (const disallowRule of disallowRules) {
        recordObservation({
          type: 'robots-disallow-observation',
          path: disallowRule,
          message: 'robots.txt disallow rule recorded as a crawlability observation.',
        });
      }
    }

    const sitemap = await fetchEndpoint(request, '/sitemap.xml');
    expectEndpointNotErrored(sitemap);

    if (sitemap.missing) {
      recordObservation({
        type: 'sitemap-missing-observation',
        path: sitemap.path,
        status: sitemap.status,
        message: 'sitemap.xml was not found in local Site QA; this is recorded as an observation only.',
      });

      return;
    }

    const parsedSitemap = await parseSitemapXml(page, sitemap.text);

    expect(parsedSitemap.valid, parsedSitemap.parserError ?? 'sitemap.xml should be valid XML').toBe(true);

    const sitemapURLRecords = parsedSitemap.urls.map((url) => {
      const parsedURL = new URL(url);

      return {
        originalURL: url,
        host: parsedURL.host,
        pathname: parsedURL.pathname,
        localPath: toLocalPath(url),
      };
    });
    const sitemapPaths = new Set(sitemapURLRecords.map((record) => record.pathname));

    recordObservation({
      type: 'sitemap-record',
      path: sitemap.path,
      status: sitemap.status,
      contentType: sitemap.contentType,
      sitemapUrlCount: sitemapURLRecords.length,
      message: 'sitemap.xml was present, parseable, and sitemap URLs were extracted.',
    });

    for (const record of sitemapURLRecords) {
      if (record.host !== expectedSitemapHost) {
        recordObservation({
          type: 'sitemap-host-observation',
          url: record.originalURL,
          message: `Sitemap URL host differs from expected canonical host ${expectedSitemapHost}.`,
        });
      }

      if (!record.pathname.startsWith('/') || record.originalURL.includes('#')) {
        recordObservation({
          type: 'sitemap-url-shape-observation',
          url: record.originalURL,
          path: record.pathname,
          message: 'Sitemap URL has review-needed host/path shape.',
        });
      }

      if (isObviousPrivateRoute(record.pathname)) {
        recordObservation({
          type: 'sitemap-private-route-observation',
          url: record.originalURL,
          path: record.pathname,
          message: 'Sitemap URL appears to include a private, internal, transaction, or operator route.',
        });
      }

      const localResponse = await request.get(record.localPath, { failOnStatusCode: false });

      if (!localResponse.ok()) {
        recordObservation({
          type: 'sitemap-url-local-response-observation',
          url: record.originalURL,
          path: record.localPath,
          status: localResponse.status(),
          message: 'Sitemap URL path returned a failed response when checked against local preview.',
        });
      }

      expect(
        localResponse.status(),
        `${record.originalURL} should map to a non-failed local preview response`,
      ).toBeLessThan(400);
    }

    for (const seedRoute of seedPublicRoutes) {
      if (!sitemapPaths.has(seedRoute)) {
        recordObservation({
          type: 'seed-sitemap-observation',
          path: seedRoute,
          sitemapUrlCount: sitemapURLRecords.length,
          message: 'Seed public route was not present in sitemap.xml; this is recorded as an observation only.',
        });
      }
    }
  });
});
