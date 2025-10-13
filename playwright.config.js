/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 120 * 1000,
    use: {
        headless: true,
        viewport: { width: 1920, height: 1080 }, // ⬅️ force page viewport
        launchOptions: {
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--window-size=1920,1080', // ⬅️ enforce browser window size
            ],
        },
        video: 'on',
        screenshot: 'on',
    },
    testDir: './',
    reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
};

module.exports = config;
