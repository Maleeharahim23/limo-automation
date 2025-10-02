// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 120 * 1000,
  use: {
    // 👇 Run headless in CI, but headed locally
    headless: process.env.CI ? true : false,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 30 * 1000,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  testDir: './',
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
};

module.exports = config;
