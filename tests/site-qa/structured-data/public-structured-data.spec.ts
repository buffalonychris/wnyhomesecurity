import { expect, type Page, test } from '@playwright/test';

const structuredDataRoutes = [
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

const recognizedSchemaTypes = new Set([
  'Organization',
  'LocalBusiness',
  'WebSite',
  'BreadcrumbList',
  'Service',
  'FAQPage',
  'SearchAction',
]);

const expectedSchemaByRoute = new Map<string, string[]>([
  ['/', ['Organization', 'LocalBusiness', 'WebSite']],
  ['/categories/home-security', ['BreadcrumbList', 'Service']],
  ['/categories/home-automation', ['BreadcrumbList', 'Service']],
  ['/categories/home-safety', ['BreadcrumbList', 'Service']],
  ['/categories/home-lighting', ['BreadcrumbList', 'Service']],
  ['/categories/aging-in-place', ['BreadcrumbList', 'Service']],
  ['/about', ['Organization', 'LocalBusiness']],
  ['/contact', ['Organization', 'LocalBusiness']],
  ['/support', ['Organization', 'LocalBusiness', 'FAQPage']],
  ['/search', ['WebSite', 'SearchAction']],
]);

type JsonLdRecord = {
  index: number;
  rawLength: number;
  parsed: unknown;
};

type StructuredDataObservation = {
  type:
    | 'expected-schema-observation'
    | 'json-ld-presence-observation'
    | 'recognized-schema-observation'
    | 'schema-type-observation'
    | 'structured-data-record';
  route: string;
  scriptCount?: number;
  expectedType?: string;
  observedTypes?: string[];
  recognizedTypes?: string[];
  message: string;
};

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const recordObservation = (observation: StructuredDataObservation) => {
  console.warn(JSON.stringify(observation));
  test.info().annotations.push({
    type: observation.type,
    description: JSON.stringify(observation),
  });
};

const readJsonLdRecords = async (page: Page) =>
  page.evaluate<JsonLdRecord[]>(() =>
    Array.from(document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]')).map(
      (script, index) => ({
        index,
        rawLength: script.textContent?.trim().length ?? 0,
        parsed: JSON.parse(script.textContent?.trim() || 'null') as unknown,
      }),
    ),
  );

const normalizeSchemaType = (value: unknown): string[] => {
  if (typeof value === 'string') {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string');
  }

  return [];
};

const collectSchemaTypes = (value: unknown): string[] => {
  const discoveredTypes = new Set<string>();
  const pendingValues = [value];

  while (pendingValues.length > 0) {
    const currentValue = pendingValues.pop();

    if (!currentValue || typeof currentValue !== 'object') {
      continue;
    }

    if (Array.isArray(currentValue)) {
      pendingValues.push(...currentValue);
      continue;
    }

    const currentRecord = currentValue as Record<string, unknown>;

    for (const schemaType of normalizeSchemaType(currentRecord['@type'])) {
      discoveredTypes.add(schemaType);
    }

    if (Array.isArray(currentRecord['@graph'])) {
      pendingValues.push(...currentRecord['@graph']);
    }

    for (const propertyValue of Object.values(currentRecord)) {
      if (propertyValue && typeof propertyValue === 'object') {
        pendingValues.push(propertyValue);
      }
    }
  }

  return [...discoveredTypes].sort();
};

test.describe('public route structured data observations', () => {
  for (const route of structuredDataRoutes) {
    test(`${route} exposes parseable structured data when present`, async ({ page, baseURL }) => {
      expect(baseURL, 'structured data checks require an explicit local/default Site QA base URL').toBeTruthy();
      expect(isProductionURL(baseURL!), 'structured data checks must not run against production').toBe(false);

      const response = await page.goto(route);

      expect(response, `${route} should return a page response`).not.toBeNull();
      expect(response?.status(), `${route} navigation should not fail at the HTTP layer`).toBeLessThan(400);

      await expect(page.locator('body')).toBeVisible();

      const records = await readJsonLdRecords(page);
      const observedTypes = [...new Set(records.flatMap((record) => collectSchemaTypes(record.parsed)))].sort();
      const recognizedTypes = observedTypes.filter((schemaType) => recognizedSchemaTypes.has(schemaType));

      if (records.length === 0) {
        recordObservation({
          type: 'json-ld-presence-observation',
          route,
          scriptCount: 0,
          observedTypes,
          message: 'No JSON-LD script blocks were detected on the rendered route.',
        });
      }

      if (records.length > 0 && observedTypes.length === 0) {
        recordObservation({
          type: 'schema-type-observation',
          route,
          scriptCount: records.length,
          observedTypes,
          message: 'JSON-LD script blocks were detected, but no recognizable @type values were present.',
        });
      }

      if (recognizedTypes.length > 0) {
        recordObservation({
          type: 'recognized-schema-observation',
          route,
          scriptCount: records.length,
          observedTypes,
          recognizedTypes,
          message: 'Recognized structured data schema types were detected.',
        });
      }

      for (const expectedType of expectedSchemaByRoute.get(route) ?? []) {
        if (!observedTypes.includes(expectedType)) {
          recordObservation({
            type: 'expected-schema-observation',
            route,
            scriptCount: records.length,
            expectedType,
            observedTypes,
            recognizedTypes,
            message: 'Expected route-level schema type was not detected; this is a structured observation only.',
          });
        }
      }

      test.info().annotations.push({
        type: 'structured-data-record',
        description: JSON.stringify({
          route,
          scriptCount: records.length,
          scriptLengths: records.map((record) => record.rawLength),
          observedTypes,
          recognizedTypes,
        }),
      });
    });
  }
});
