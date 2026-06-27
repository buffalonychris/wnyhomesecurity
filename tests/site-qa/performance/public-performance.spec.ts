import { expect, type Page, test } from '@playwright/test';

const performanceRoutes = [
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

const largeResourceThresholdBytes = 500_000;
const slowResourceThresholdMs = 1_000;
const slowDomContentLoadedThresholdMs = 2_500;
const slowLoadEventThresholdMs = 5_000;
const highTotalRequestCountThreshold = 100;
const highScriptRequestCountThreshold = 30;
const highStylesheetRequestCountThreshold = 20;
const highImageRequestCountThreshold = 50;

type ResourceKind = 'css' | 'image' | 'js' | 'other';

type ResourceMetric = {
  name: string;
  initiatorType: string;
  kind: ResourceKind;
  durationMs: number;
  transferSizeBytes: number;
  encodedBodySizeBytes: number;
  decodedBodySizeBytes: number;
};

type NavigationMetric = {
  domContentLoadedMs: number | null;
  loadEventMs: number | null;
  durationMs: number | null;
  responseStartMs: number | null;
  responseEndMs: number | null;
  transferSizeBytes: number | null;
  encodedBodySizeBytes: number | null;
  decodedBodySizeBytes: number | null;
};

type PerformanceMetrics = {
  navigation: NavigationMetric;
  resources: ResourceMetric[];
  requestCounts: {
    total: number;
    transferred: number;
    js: number;
    css: number;
    image: number;
    other: number;
  };
};

type PerformanceObservation = {
  type:
    | 'high-resource-count-observation'
    | 'large-resource-observation'
    | 'load-state-observation'
    | 'slow-request-observation'
    | 'slow-timing-observation';
  route: string;
  field?: string;
  url?: string;
  value?: number | null;
  threshold?: number;
  resourceKind?: ResourceKind;
  message: string;
};

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const readPerformanceMetrics = async (page: Page) =>
  page.evaluate<PerformanceMetrics>(() => {
    const classifyBrowserResource = (entry: PerformanceResourceTiming): ResourceKind => {
      const url = entry.name.toLowerCase();

      if (entry.initiatorType === 'script' || /\.(mjs|js)(\?|#|$)/.test(url)) {
        return 'js';
      }

      if (entry.initiatorType === 'css' || entry.initiatorType === 'link' || /\.css(\?|#|$)/.test(url)) {
        return 'css';
      }

      if (entry.initiatorType === 'img' || /\.(avif|gif|jpe?g|png|svg|webp)(\?|#|$)/.test(url)) {
        return 'image';
      }

      return 'other';
    };

    const [navigationEntry] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const resources = (performance.getEntriesByType('resource') as PerformanceResourceTiming[]).map((entry) => ({
      name: entry.name,
      initiatorType: entry.initiatorType,
      kind: classifyBrowserResource(entry),
      durationMs: Math.round(entry.duration),
      transferSizeBytes: entry.transferSize,
      encodedBodySizeBytes: entry.encodedBodySize,
      decodedBodySizeBytes: entry.decodedBodySize,
    }));

    const countByKind = (kind: ResourceKind) => resources.filter((resource) => resource.kind === kind).length;

    return {
      navigation: {
        domContentLoadedMs: navigationEntry
          ? Math.round(navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime)
          : null,
        loadEventMs: navigationEntry ? Math.round(navigationEntry.loadEventEnd - navigationEntry.startTime) : null,
        durationMs: navigationEntry ? Math.round(navigationEntry.duration) : null,
        responseStartMs: navigationEntry ? Math.round(navigationEntry.responseStart - navigationEntry.startTime) : null,
        responseEndMs: navigationEntry ? Math.round(navigationEntry.responseEnd - navigationEntry.startTime) : null,
        transferSizeBytes: navigationEntry?.transferSize ?? null,
        encodedBodySizeBytes: navigationEntry?.encodedBodySize ?? null,
        decodedBodySizeBytes: navigationEntry?.decodedBodySize ?? null,
      },
      resources,
      requestCounts: {
        total: resources.length,
        transferred: resources.filter((resource) => resource.transferSizeBytes > 0).length,
        js: countByKind('js'),
        css: countByKind('css'),
        image: countByKind('image'),
        other: countByKind('other'),
      },
    };
  });

const recordObservation = (observation: PerformanceObservation) => {
  console.warn(JSON.stringify(observation));
  test.info().annotations.push({
    type: observation.type,
    description: JSON.stringify(observation),
  });
};

const thresholdObservation = (
  observations: PerformanceObservation[],
  route: string,
  field: string,
  value: number | null,
  threshold: number,
  message: string,
) => {
  if (value !== null && value > threshold) {
    observations.push({
      type: field.includes('count') ? 'high-resource-count-observation' : 'slow-timing-observation',
      route,
      field,
      value,
      threshold,
      message,
    });
  }
};

const collectPerformanceObservations = (route: string, metrics: PerformanceMetrics) => {
  const observations: PerformanceObservation[] = [];

  thresholdObservation(
    observations,
    route,
    'domContentLoadedMs',
    metrics.navigation.domContentLoadedMs,
    slowDomContentLoadedThresholdMs,
    'DOMContentLoaded timing is above the governed observation threshold.',
  );
  thresholdObservation(
    observations,
    route,
    'loadEventMs',
    metrics.navigation.loadEventMs,
    slowLoadEventThresholdMs,
    'Load event timing is above the governed observation threshold.',
  );
  thresholdObservation(
    observations,
    route,
    'totalRequestCount',
    metrics.requestCounts.total,
    highTotalRequestCountThreshold,
    'Total resource request count is above the governed observation threshold.',
  );
  thresholdObservation(
    observations,
    route,
    'jsRequestCount',
    metrics.requestCounts.js,
    highScriptRequestCountThreshold,
    'JavaScript request count is above the governed observation threshold.',
  );
  thresholdObservation(
    observations,
    route,
    'cssRequestCount',
    metrics.requestCounts.css,
    highStylesheetRequestCountThreshold,
    'Stylesheet request count is above the governed observation threshold.',
  );
  thresholdObservation(
    observations,
    route,
    'imageRequestCount',
    metrics.requestCounts.image,
    highImageRequestCountThreshold,
    'Image request count is above the governed observation threshold.',
  );

  for (const resource of metrics.resources) {
    const observedSize = Math.max(
      resource.transferSizeBytes,
      resource.encodedBodySizeBytes,
      resource.decodedBodySizeBytes,
    );

    if (observedSize > largeResourceThresholdBytes) {
      observations.push({
        type: 'large-resource-observation',
        route,
        url: resource.name,
        value: observedSize,
        threshold: largeResourceThresholdBytes,
        resourceKind: resource.kind,
        message: 'Resource size is above the governed observation threshold.',
      });
    }

    if (resource.durationMs > slowResourceThresholdMs) {
      observations.push({
        type: 'slow-request-observation',
        route,
        url: resource.name,
        value: resource.durationMs,
        threshold: slowResourceThresholdMs,
        resourceKind: resource.kind,
        message: 'Resource duration is above the governed observation threshold.',
      });
    }
  }

  return observations;
};

test.describe('public route performance observations', () => {
  for (const route of performanceRoutes) {
    test(`${route} captures governed performance observations`, async ({ page, baseURL }) => {
      expect(baseURL, 'performance checks require an explicit local/default Site QA base URL').toBeTruthy();
      expect(isProductionURL(baseURL!), 'performance checks must not run against production').toBe(false);

      const response = await page.goto(route, { waitUntil: 'load' });

      expect(response, `${route} should return a page response`).not.toBeNull();
      expect(response?.status(), `${route} navigation should not fail at the HTTP layer`).toBeLessThan(400);

      await page.waitForLoadState('networkidle', { timeout: 5_000 }).catch((error: Error) => {
        recordObservation({
          type: 'load-state-observation',
          route,
          message: `networkidle was not reached within observation timeout: ${error.message}`,
        });
      });

      const metrics = await readPerformanceMetrics(page);
      const observations = collectPerformanceObservations(route, metrics);

      for (const observation of observations) {
        recordObservation(observation);
      }

      test.info().annotations.push({
        type: 'performance-record',
        description: JSON.stringify({
          route,
          responseStatus: response?.status() ?? null,
          navigation: metrics.navigation,
          requestCounts: metrics.requestCounts,
          observationCount: observations.length,
        }),
      });

      expect(response?.status(), `${route} page load status should remain successful`).toBeLessThan(400);
    });
  }
});
