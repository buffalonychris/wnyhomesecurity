import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.SITE_QA_BASE_URL ?? 'http://localhost:4173';

export default defineConfig({
  testDir: './tests/site-qa',
  outputDir: './test-results/site-qa',
  reporter: 'list',
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
