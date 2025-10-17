import {defineConfig} from "@playwright/test";

/** @type {import('@playwright/test').PlaywrightTestConfig} */
export default defineConfig({
    timeout: 1000 * 5,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        video: 'on',
        screenshot: 'on',
    },
    testDir: './',
    reporter: [['list'], ['html', {outputFolder: 'playwright-report'}]],

});
