/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 120 * 1000,
    testDir: './',
    use: {
        headless: true,
        viewport: { width: 1920, height: 1080 },
        video: 'on',
        screenshot: 'on',
    },
    projects: [
        {
            name: 'Microsoft Edge',
            use: { channel: 'msedge' },
        },
    ],
    reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
};

module.exports = config;
