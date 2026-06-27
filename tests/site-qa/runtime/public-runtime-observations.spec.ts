import { expect, type Page, test } from '@playwright/test';

const runtimeRoutes = [
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

const assetResourceTypes = new Set(['font', 'image', 'media', 'script', 'stylesheet']);

type RuntimeObservation = {
  type:
    | 'blocked-resource'
    | 'console-error'
    | 'failed-network-request'
    | 'http-error-response'
    | 'load-state-observation'
    | 'missing-asset';
  route: string;
  url?: string;
  method?: string;
  resourceType?: string;
  status?: number;
  statusText?: string;
  message: string;
};

type RuntimePageError = {
  route: string;
  message: string;
  stack?: string;
};

const isBlockedRequestFailure = (errorText: string) => /block|blocked|csp|content security/i.test(errorText);

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const annotateObservation = (observation: RuntimeObservation) => {
  console.warn(JSON.stringify(observation));
  test.info().annotations.push({
    type: observation.type,
    description: JSON.stringify(observation),
  });
};

const attachRuntimeObservers = (page: Page, route: string) => {
  const observations: RuntimeObservation[] = [];
  const pageErrors: RuntimePageError[] = [];

  page.on('console', (message) => {
    if (message.type() !== 'error') {
      return;
    }

    observations.push({
      type: 'console-error',
      route,
      message: message.text(),
    });
  });

  page.on('pageerror', (error) => {
    pageErrors.push({
      route,
      message: error.message,
      stack: error.stack,
    });
  });

  page.on('requestfailed', (request) => {
    const failureText = request.failure()?.errorText ?? 'Unknown request failure';
    const resourceType = request.resourceType();
    const isAsset = assetResourceTypes.has(resourceType);

    observations.push({
      type: isBlockedRequestFailure(failureText)
        ? 'blocked-resource'
        : isAsset
          ? 'missing-asset'
          : 'failed-network-request',
      route,
      url: request.url(),
      method: request.method(),
      resourceType,
      message: failureText,
    });
  });

  page.on('response', (response) => {
    const status = response.status();

    if (status < 400) {
      return;
    }

    const request = response.request();
    const resourceType = request.resourceType();
    const isAsset = assetResourceTypes.has(resourceType);

    observations.push({
      type: isAsset ? 'missing-asset' : 'http-error-response',
      route,
      url: response.url(),
      method: request.method(),
      resourceType,
      status,
      statusText: response.statusText(),
      message: `${status} ${response.statusText()}`.trim(),
    });
  });

  return { observations, pageErrors };
};

test.describe('public route runtime browser observations', () => {
  for (const route of runtimeRoutes) {
    test(`${route} captures console, page, network, and asset observations`, async ({ page, baseURL }) => {
      expect(baseURL, 'runtime observations require an explicit local/default Site QA base URL').toBeTruthy();
      expect(isProductionURL(baseURL!), 'runtime observations must not run against production').toBe(false);

      const { observations, pageErrors } = attachRuntimeObservers(page, route);
      const response = await page.goto(route);

      expect(response, `${route} should return a page response`).not.toBeNull();
      expect(response?.status(), `${route} navigation should not fail at the HTTP layer`).toBeLessThan(400);

      await expect(page.locator('body')).toBeVisible();

      await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch((error: Error) => {
        observations.push({
          type: 'load-state-observation',
          route,
          message: `networkidle was not reached within observation timeout: ${error.message}`,
        });
      });

      for (const observation of observations) {
        annotateObservation(observation);
      }

      test.info().annotations.push({
        type: 'runtime-observation-summary',
        description: JSON.stringify({
          route,
          observationCount: observations.length,
          pageErrorCount: pageErrors.length,
        }),
      });

      expect(pageErrors, `${route} should not emit uncaught page errors`).toEqual([]);
    });
  }
});
