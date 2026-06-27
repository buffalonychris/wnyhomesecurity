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

const viewportCandidateSet = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 1000 },
];

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const routeSlug = (route: string) =>
  route === '/' ? 'home' : route.replace(/^\/+/, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();

const visiblePageStructure = (page: Page) =>
  page
    .getByRole('heading')
    .or(page.getByRole('main'))
    .or(page.getByRole('banner'))
    .or(page.getByRole('navigation'))
    .or(page.getByRole('contentinfo'))
    .first();

test.describe('public route candidate visual baseline capture', () => {
  for (const viewport of viewportCandidateSet) {
    test.describe(`${viewport.name} ${viewport.width}x${viewport.height}`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      for (const route of publicRoutes) {
        test(`${route} captures candidate baseline screenshot`, async ({ page, baseURL }, testInfo) => {
          expect(baseURL, 'candidate baseline capture requires an explicit local/default Site QA base URL').toBeTruthy();
          expect(isProductionURL(baseURL!), 'candidate baseline capture must not run against production').toBe(false);

          const response = await page.goto(route);

          expect(response, `${route} should return a page response before candidate capture`).not.toBeNull();
          expect(response?.status(), `${route} should not fail at the HTTP layer`).toBeLessThan(400);

          await expect(page.locator('body')).toBeVisible();
          await expect(visiblePageStructure(page)).toBeVisible();

          const browserName = testInfo.project.name.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
          const screenshotName = `${routeSlug(route)}__${viewport.name}-${viewport.width}x${viewport.height}__${browserName}__candidate-baseline.png`;
          const screenshotPath = testInfo.outputPath(screenshotName);

          await page.screenshot({ path: screenshotPath, fullPage: true });

          testInfo.annotations.push({
            type: 'candidate-baseline',
            description: JSON.stringify({
              route,
              viewport: `${viewport.width}x${viewport.height}`,
              browser: browserName,
              artifactType: 'candidate-baseline',
              approvedBaseline: false,
              storage: 'ignored Playwright test output only',
              path: screenshotPath,
            }),
          });
        });
      }
    });
  }
});
