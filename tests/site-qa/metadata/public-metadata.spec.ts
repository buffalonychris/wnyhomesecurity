import { expect, type Page, test } from '@playwright/test';

const metadataRoutes = [
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

const genericTitles = new Set(['', 'WNY Home Security']);

type RenderedMetadata = {
  title: string;
  description: string | null;
  canonicalHref: string | null;
  robots: string | null;
  openGraphTitle: string | null;
  openGraphDescription: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
};

const readRenderedMetadata = async (page: Page) =>
  page.evaluate<RenderedMetadata>(() => {
    const getMetaContent = (selector: string) => document.head.querySelector<HTMLMetaElement>(selector)?.content ?? null;

    return {
      title: document.title,
      description: getMetaContent('meta[name="description"]'),
      canonicalHref: document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href ?? null,
      robots: getMetaContent('meta[name="robots"]'),
      openGraphTitle: getMetaContent('meta[property="og:title"]'),
      openGraphDescription: getMetaContent('meta[property="og:description"]'),
      twitterTitle: getMetaContent('meta[name="twitter:title"]'),
      twitterDescription: getMetaContent('meta[name="twitter:description"]'),
    };
  });

const recordObservation = (route: string, field: string, value: string | null, message: string) => {
  console.warn(
    JSON.stringify({
      type: 'metadata-observation',
      route,
      field,
      value,
      message,
    }),
  );
  test.info().annotations.push({
    type: 'metadata-observation',
    description: `${route} ${field}: ${message}`,
  });
};

const recordIfMissing = (route: string, field: string, value: string | null) => {
  if (!value?.trim()) {
    recordObservation(route, field, value, `${field} is missing or empty`);
  }
};

test.describe('public route browser-rendered metadata checks', () => {
  for (const route of metadataRoutes) {
    test(`${route} exposes observable rendered metadata`, async ({ page }) => {
      const response = await page.goto(route);

      expect(response, `${route} should return a page response before metadata can be read`).not.toBeNull();
      expect(response?.status(), `${route} should not fail at the HTTP layer`).toBeLessThan(400);
      await expect(page.locator('body')).toBeVisible();

      await expect.poll(() => page.title(), { message: `${route} should render a document title` }).not.toBe('');

      const metadata = await readRenderedMetadata(page);

      expect(metadata.title.trim(), `${route} title should not be empty`).not.toBe('');

      if (genericTitles.has(metadata.title.trim())) {
        recordObservation(
          route,
          'title',
          metadata.title,
          'title is generic-only; route-specific title policy may need review if this route is expected to render a specific title',
        );
      }

      recordIfMissing(route, 'description', metadata.description);
      recordIfMissing(route, 'canonicalHref', metadata.canonicalHref);
      recordIfMissing(route, 'robots', metadata.robots);
      recordIfMissing(route, 'openGraphTitle', metadata.openGraphTitle);
      recordIfMissing(route, 'openGraphDescription', metadata.openGraphDescription);
      recordIfMissing(route, 'twitterTitle', metadata.twitterTitle);
      recordIfMissing(route, 'twitterDescription', metadata.twitterDescription);

      test.info().annotations.push({
        type: 'metadata-record',
        description: JSON.stringify({ route, ...metadata }),
      });
    });
  }
});
