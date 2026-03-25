import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  use: {
    headless: true,
    actionTimeout: 10_000,
    navigationTimeout: 30_000
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ]
});