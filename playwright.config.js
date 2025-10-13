/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 120 * 1000,
    use: {
        headless: true,
        viewport: null, // 👈 disables default viewport, allows full window size
        launchOptions: {
            args: ['--start-maximized'], // 👈 maximize the browser window
        },
        video: 'on',
        screenshot: 'on',
    },
    testDir: './',
    reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
};

module.exports = config;

