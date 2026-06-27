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
        command: 'npm run build && node ./node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4173',
        url: localPreviewURL,
        reuseExistingServer: true,
        gracefulShutdown: { signal: 'SIGINT', timeout: 500 },
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
