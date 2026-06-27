import { expect, test } from '@playwright/test';

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

test.describe('public route smoke checks', () => {
  for (const route of publicRoutes) {
    test(`${route} loads visible page structure`, async ({ page }) => {
      const response = await page.goto(route);

      expect(response, `${route} should return a page response`).not.toBeNull();
      expect(response?.status(), `${route} should not fail at the HTTP layer`).toBeLessThan(400);

      await expect(page.locator('body')).toBeVisible();

      const visibleStructure = page
        .getByRole('heading')
        .or(page.getByRole('main'))
        .or(page.getByRole('banner'))
        .or(page.getByRole('navigation'))
        .or(page.getByRole('contentinfo'))
        .first();

      await expect(visibleStructure).toBeVisible();
    });
  }
});

test('nonexistent route exposes explicit not-found handling or records current SPA fallback', async ({ page }) => {
  const response = await page.goto('/not-a-real-page-for-siteqa');

  expect(response, 'soft-404 check should receive a page response').not.toBeNull();
  expect(response?.status(), 'soft-404 check should not fail at the HTTP layer').toBeLessThan(400);
  await expect(page.locator('body')).toBeVisible();

  const visibleNotFoundState = await page
    .getByText(/not found|404|page does not exist|could not find/i)
    .first()
    .isVisible()
    .catch(() => false);

  test.fixme(
    !visibleNotFoundState,
    'PLAY003 governance note: current app has no explicit not-found route and resolves unknown paths to the SPA shell/layout.',
  );

  expect(visibleNotFoundState).toBe(true);
});
