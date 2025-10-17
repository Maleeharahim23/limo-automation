const {test} = require('@playwright/test');
const LoginHelper = require('./LoginHelper');

const BASE_URL = 'https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/';

test.describe('Login Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(BASE_URL);
    });

    test('test_01_signInFailed', async ({page}) => {
        const login_helper = new LoginHelper(page);
        const login = await login_helper.perform_login('Tes', 'bjh');
        await login.verifLoginFailed();
    });

    test('test_02_signIn', async ({page}) => {
        const login_helper = new LoginHelper(page);
        const login = await login_helper.perform_login('Test', 'Admin@123');
        await login.verifyLoginSuccessfull();
    });
});
