/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 120 * 1000,
    testDir: './',
    use: {
        headless: true,
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
            args: ['--window-size=1920,1080'],
        },
        video: 'on',
        screenshot: 'on',
        browserName: 'chromium',
        channel: process.env.CI ? 'msedge' : 'chrome',
    },
    reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
};

module.exports = config;
