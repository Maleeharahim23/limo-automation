import {defineConfig} from "@playwright/test";

/** @type {import('@playwright/test').PlaywrightTestConfig} */
export default defineConfig({
    timeout: 1000 * 120,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        // viewport: null,
        // launchOptions: {args: ['--start-maximized', '--window-size=1920,1080']},
        // headless:true,
        // actionTimeout: 30 * 1000,
        video: 'on',
        screenshot: 'on',
    },
    testDir: './',
    reporter: [['list'], ['html', {outputFolder: 'playwright-report'}]],

});

