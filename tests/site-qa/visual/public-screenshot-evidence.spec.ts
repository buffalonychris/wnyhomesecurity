import { expect, test, type Page } from '@playwright/test';

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

const viewportEvidenceSet = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 1000 },
];

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const screenshotNameForRoute = (route: string) => (route === '/' ? 'home' : route.replace(/^\/+/, '').replace(/\//g, '-'));

const visiblePageStructure = (page: Page) =>
  page
    .getByRole('heading')
    .or(page.getByRole('main'))
    .or(page.getByRole('banner'))
    .or(page.getByRole('navigation'))
    .or(page.getByRole('contentinfo'))
    .first();

test.describe('public route screenshot evidence capture', () => {
  for (const viewport of viewportEvidenceSet) {
    test.describe(`${viewport.name} ${viewport.width}x${viewport.height}`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      for (const route of publicRoutes) {
        test(`${route} captures full-page screenshot evidence`, async ({ page, baseURL }, testInfo) => {
          expect(baseURL, 'screenshot evidence requires an explicit local/default Site QA base URL').toBeTruthy();
          expect(isProductionURL(baseURL!), 'screenshot evidence must not run against production').toBe(false);

          const response = await page.goto(route);

          expect(response, `${route} should return a page response before screenshot capture`).not.toBeNull();
          expect(response?.status(), `${route} should not fail at the HTTP layer`).toBeLessThan(400);

          await expect(page.locator('body')).toBeVisible();
          await expect(visiblePageStructure(page)).toBeVisible();

          const screenshotPath = testInfo.outputPath(`${viewport.name}-${screenshotNameForRoute(route)}.png`);
          await page.screenshot({ path: screenshotPath, fullPage: true });

          testInfo.annotations.push({
            type: 'screenshot-evidence',
            description: JSON.stringify({
              route,
              viewport: `${viewport.width}x${viewport.height}`,
              storage: 'Playwright test output',
              path: screenshotPath,
            }),
          });
        });
      }
    });
  }
});
