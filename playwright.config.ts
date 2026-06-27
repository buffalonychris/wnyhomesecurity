import { defineConfig, devices } from '@playwright/test';

const localPreviewURL = 'http://127.0.0.1:4173';
const baseURL = process.env.SITE_QA_BASE_URL ?? localPreviewURL;
const shouldStartLocalPreview = !process.env.SITE_QA_BASE_URL;

export default defineConfig({
  testDir: './tests/site-qa',
  outputDir: './test-results/site-qa',
  reporter: 'list',
  webServer: shouldStartLocalPreview
    ? {
        command: 'node ./scripts/site-qa-preview-server.mjs',
        url: localPreviewURL,
        reuseExistingServer: true,
        gracefulShutdown: { signal: 'SIGTERM', timeout: 5_000 },
        timeout: 120_000,
      }
    : undefined,
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'mobile-chromium',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
