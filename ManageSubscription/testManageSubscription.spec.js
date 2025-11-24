import {test} from "@playwright/test";
import {ManageSubscriptionPage} from "./pathsOfManageSubscription";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

test.use({
    headless: false,
    viewport: null,
    launchOptions: {
        args: ['--start-maximized'],
    },
});


test.describe('Manage Subscription Page Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_ManageSubscription', async ({page}) => {
        const subscriptionPage = new ManageSubscriptionPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await subscriptionPage.clickSettingBtn();
        await subscriptionPage.clickAccountFilterBtn();
        await subscriptionPage.clickManageSubscriptionOptionsBtn();
        await subscriptionPage.clickGetStartedBtn();
        await subscriptionPage.enterCardNumberInput("4242 4242 4242 4242");
        await subscriptionPage.enterCardExpiryInput("1125");
        await subscriptionPage.enterCardCVCInput("123");
        await subscriptionPage.enterCardHolderNameInput("Jhon");
        console.log("\nManage Subscription Information Added Successfully");
    });

});
