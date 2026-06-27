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

type AccessibilityObservationType =
  | 'form-control-name-observation'
  | 'heading-observation'
  | 'image-alt-observation'
  | 'keyboard-traversal-observation'
  | 'landmark-observation';

type AccessibilityObservation = {
  type: AccessibilityObservationType;
  route: string;
  selector?: string;
  message: string;
};

type InteractiveNameIssue = {
  route: string;
  selector: string;
  message: string;
};

const isProductionURL = (url: string) => /(^|\.)wnyhomesecurity\.com/i.test(new URL(url).hostname);

const recordObservation = (observation: AccessibilityObservation) => {
  console.warn(JSON.stringify(observation));
  test.info().annotations.push({
    type: observation.type,
    description: JSON.stringify(observation),
  });
};

const readInteractiveNameIssues = async (page: Page, route: string) =>
  page.evaluate<InteractiveNameIssue[], { route: string }>(
    ({ route: currentRoute }) => {
      const selectorForBrowserElement = (element: Element) => {
        const tagName = element.tagName.toLowerCase();
        const id = element.getAttribute('id');
        const name = element.getAttribute('name');
        const ariaLabel = element.getAttribute('aria-label');
        const role = element.getAttribute('role');
        const href = element.getAttribute('href');
        const type = element.getAttribute('type');

        if (id) {
          return `${tagName}#${id}`;
        }

        if (name) {
          return `${tagName}[name="${name}"]`;
        }

        if (ariaLabel) {
          return `${tagName}[aria-label="${ariaLabel}"]`;
        }

        if (role) {
          return `${tagName}[role="${role}"]`;
        }

        if (href) {
          return `${tagName}[href="${href}"]`;
        }

        if (type) {
          return `${tagName}[type="${type}"]`;
        }

        return tagName;
      };

      const getBrowserRenderedText = (element: Element) => (element.textContent ?? '').replace(/\s+/g, ' ').trim();

      const getBrowserLabelledByText = (element: Element) => {
        const labelledBy = element.getAttribute('aria-labelledby');

        if (!labelledBy) {
          return '';
        }

        return labelledBy
          .split(/\s+/)
          .map((id) => getBrowserRenderedText(document.getElementById(id) as Element))
          .join(' ')
          .trim();
      };

      const getBrowserElementName = (element: Element) => {
        const ariaLabel = element.getAttribute('aria-label')?.trim();
        const labelledByText = getBrowserLabelledByText(element);
        const title = element.getAttribute('title')?.trim();
        const imageAltText = Array.from(element.querySelectorAll('img'))
          .map((image) => image.getAttribute('alt')?.trim() ?? '')
          .filter(Boolean)
          .join(' ');

        if (ariaLabel) {
          return ariaLabel;
        }

        if (labelledByText) {
          return labelledByText;
        }

        if (getBrowserRenderedText(element)) {
          return getBrowserRenderedText(element);
        }

        if (imageAltText) {
          return imageAltText;
        }

        if (element instanceof HTMLInputElement && element.value.trim()) {
          return element.value.trim();
        }

        if (title) {
          return title;
        }

        return '';
      };

      const isBrowserElementVisible = (element: Element) => {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          return false;
        }

        if (element.getAttribute('aria-hidden') === 'true' || element.hasAttribute('hidden')) {
          return false;
        }

        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
      };

      const interactiveSelectors = [
        'button',
        '[role="button"]',
        '[role="link"]',
        'a[href]',
      ].join(',');

      const controlName = (element: Element) => {
        if (
          element instanceof HTMLInputElement ||
          element instanceof HTMLSelectElement ||
          element instanceof HTMLTextAreaElement
        ) {
          const labelText = Array.from(element.labels ?? [])
            .map((label) => (label.textContent ?? '').replace(/\s+/g, ' ').trim())
            .filter(Boolean)
            .join(' ');

          if (labelText) {
            return labelText;
          }
        }

        return getBrowserElementName(element);
      };

      return Array.from(document.querySelectorAll(interactiveSelectors))
        .filter((element) => isBrowserElementVisible(element))
        .filter((element) => !controlName(element))
        .map((element) => ({
          route: currentRoute,
          selector: selectorForBrowserElement(element),
          message: 'Visible button or link control is missing an accessible name.',
        }));
    },
    { route },
  );

const readSoftObservations = async (page: Page, route: string) =>
  page.evaluate<AccessibilityObservation[], { route: string }>(
    ({ route: currentRoute }) => {
      const selectorForBrowserElement = (element: Element) => {
        const tagName = element.tagName.toLowerCase();
        const id = element.getAttribute('id');
        const name = element.getAttribute('name');
        const ariaLabel = element.getAttribute('aria-label');
        const role = element.getAttribute('role');
        const href = element.getAttribute('href');
        const type = element.getAttribute('type');

        if (id) {
          return `${tagName}#${id}`;
        }

        if (name) {
          return `${tagName}[name="${name}"]`;
        }

        if (ariaLabel) {
          return `${tagName}[aria-label="${ariaLabel}"]`;
        }

        if (role) {
          return `${tagName}[role="${role}"]`;
        }

        if (href) {
          return `${tagName}[href="${href}"]`;
        }

        if (type) {
          return `${tagName}[type="${type}"]`;
        }

        return tagName;
      };

      const getBrowserRenderedText = (element: Element) => (element.textContent ?? '').replace(/\s+/g, ' ').trim();

      const getBrowserLabelledByText = (element: Element) => {
        const labelledBy = element.getAttribute('aria-labelledby');

        if (!labelledBy) {
          return '';
        }

        return labelledBy
          .split(/\s+/)
          .map((id) => getBrowserRenderedText(document.getElementById(id) as Element))
          .join(' ')
          .trim();
      };

      const getBrowserElementName = (element: Element) => {
        const ariaLabel = element.getAttribute('aria-label')?.trim();
        const labelledByText = getBrowserLabelledByText(element);
        const title = element.getAttribute('title')?.trim();

        if (ariaLabel) {
          return ariaLabel;
        }

        if (labelledByText) {
          return labelledByText;
        }

        if (getBrowserRenderedText(element)) {
          return getBrowserRenderedText(element);
        }

        if (element instanceof HTMLInputElement && element.value.trim()) {
          return element.value.trim();
        }

        if (title) {
          return title;
        }

        return '';
      };

      const isBrowserElementVisible = (element: Element) => {
        if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
          return false;
        }

        if (element.getAttribute('aria-hidden') === 'true' || element.hasAttribute('hidden')) {
          return false;
        }

        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
      };

      const observations: AccessibilityObservation[] = [];

      const visibleImagesMissingAlt = Array.from(document.querySelectorAll('img'))
        .filter((image) => isBrowserElementVisible(image))
        .filter((image) => image.getAttribute('aria-hidden') !== 'true')
        .filter((image) => !['presentation', 'none'].includes(image.getAttribute('role') ?? ''))
        .filter((image) => image.getAttribute('alt') === null);

      for (const image of visibleImagesMissingAlt) {
        observations.push({
          type: 'image-alt-observation',
          route: currentRoute,
          selector: selectorForBrowserElement(image),
          message: 'Visible image is missing alt text or an explicit decorative marker.',
        });
      }

      const visibleInputsWithoutLabels = Array.from(
        document.querySelectorAll('input:not([type="hidden"]), select, textarea'),
      )
        .filter((element) => isBrowserElementVisible(element))
        .filter((element) => {
          if (
            element instanceof HTMLInputElement ||
            element instanceof HTMLSelectElement ||
            element instanceof HTMLTextAreaElement
          ) {
            return (element.labels?.length ?? 0) === 0 && !getBrowserElementName(element);
          }

          return false;
        });

      for (const control of visibleInputsWithoutLabels) {
        observations.push({
          type: 'form-control-name-observation',
          route: currentRoute,
          selector: selectorForBrowserElement(control),
          message: 'Visible form control has no label or accessible name.',
        });
      }

      return observations;
    },
    { route },
  );

const observeKeyboardTraversal = async (page: Page, route: string) => {
  const focusableCount = await page.evaluate(() => {
    const isBrowserElementVisible = (element: Element) => {
      if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
        return false;
      }

      if (element.getAttribute('aria-hidden') === 'true' || element.hasAttribute('hidden')) {
        return false;
      }

      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();

      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };

    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[role="button"]',
      '[role="link"]',
    ].join(',');

    return Array.from(document.querySelectorAll(selectors)).filter((element) => isBrowserElementVisible(element)).length;
  });

  const focusedSelectors: string[] = [];

  for (let index = 0; index < Math.min(focusableCount + 2, 20); index += 1) {
    await page.keyboard.press('Tab');
    focusedSelectors.push(
      await page.evaluate(() => {
        const selectorForBrowserElement = (element: Element) => {
          const tagName = element.tagName.toLowerCase();
          const id = element.getAttribute('id');
          const name = element.getAttribute('name');
          const ariaLabel = element.getAttribute('aria-label');
          const role = element.getAttribute('role');
          const href = element.getAttribute('href');
          const type = element.getAttribute('type');

          if (id) {
            return `${tagName}#${id}`;
          }

          if (name) {
            return `${tagName}[name="${name}"]`;
          }

          if (ariaLabel) {
            return `${tagName}[aria-label="${ariaLabel}"]`;
          }

          if (role) {
            return `${tagName}[role="${role}"]`;
          }

          if (href) {
            return `${tagName}[href="${href}"]`;
          }

          if (type) {
            return `${tagName}[type="${type}"]`;
          }

          return tagName;
        };

        if (!document.activeElement || document.activeElement === document.body) {
          return 'body';
        }

        return selectorForBrowserElement(document.activeElement);
      }),
    );
  }

  const uniqueFocusedSelectors = new Set(focusedSelectors.filter((selector) => selector !== 'body'));

  test.info().annotations.push({
    type: 'keyboard-traversal-record',
    description: JSON.stringify({
      route,
      focusableCount,
      focusedSelectors,
    }),
  });

  if (focusableCount > 1 && uniqueFocusedSelectors.size <= 1) {
    recordObservation({
      type: 'keyboard-traversal-observation',
      route,
      message: 'Initial Tab traversal did not move through multiple visible focusable elements.',
    });
  }
};

test.describe('public route accessibility observations', () => {
  for (const route of publicRoutes) {
    test(`${route} passes governed accessibility detection checks`, async ({ page, baseURL }) => {
      expect(baseURL, 'accessibility checks require an explicit local/default Site QA base URL').toBeTruthy();
      expect(isProductionURL(baseURL!), 'accessibility checks must not run against production').toBe(false);

      const response = await page.goto(route);

      expect(response, `${route} should return a page response`).not.toBeNull();
      expect(response?.status(), `${route} should not fail at the HTTP layer`).toBeLessThan(400);

      await expect(page.locator('body')).toBeVisible();

      const headingCount = await page.getByRole('heading').count();
      const mainCount = await page.getByRole('main').count();
      const navigationCount = await page.getByRole('navigation').count();

      if (headingCount === 0) {
        recordObservation({
          type: 'heading-observation',
          route,
          message: 'No accessible heading was detected on the rendered route.',
        });
      }

      if (mainCount === 0) {
        recordObservation({
          type: 'landmark-observation',
          route,
          selector: 'main',
          message: 'No accessible main landmark was detected on the rendered route.',
        });
      }

      if (navigationCount === 0) {
        recordObservation({
          type: 'landmark-observation',
          route,
          selector: 'nav',
          message: 'No accessible navigation landmark was detected on the rendered route.',
        });
      }

      for (const observation of await readSoftObservations(page, route)) {
        recordObservation(observation);
      }

      const interactiveNameIssues = await readInteractiveNameIssues(page, route);
      test.info().annotations.push({
        type: 'accessibility-check-summary',
        description: JSON.stringify({
          route,
          headingCount,
          mainCount,
          navigationCount,
          interactiveNameIssueCount: interactiveNameIssues.length,
        }),
      });

      expect(interactiveNameIssues, `${route} visible buttons and links should have accessible names`).toEqual([]);

      await observeKeyboardTraversal(page, route);
    });
  }
});
