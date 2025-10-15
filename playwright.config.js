// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  timeout: 120 * 1000,
  use: {
    headless:true,
    viewport: { width: 1280, height: 720 },
    // actionTimeout: 30 * 1000,
    video: 'on',
    screenshot: 'on',
  },
  testDir: './',
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
};

module.exports = config;
