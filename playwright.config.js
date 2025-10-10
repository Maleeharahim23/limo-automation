/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 120 * 1000,
    testDir: './',
    use: {
        headless: true,
        browserName: 'chromium',
        channel: 'msedge',
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'on',
        // trace: 'retain-on-failure',
    },
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report' }],
    ],
};

module.exports = config;
