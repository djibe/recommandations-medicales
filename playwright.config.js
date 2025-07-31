const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:1313',
    headless: true,
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'hugo server -D --bind 0.0.0.0 -p 1313',
    port: 1313,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...require('@playwright/test').devices['Desktop Chrome'] },
    },
  ],
});