import {test} from "@playwright/test";
import {DiscountsPage} from "./pathsOfDiscounts";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

// test.use({
//     headless: false,
//     viewport: null,
//     launchOptions: {
//         args: ['--start-maximized'],
//     },
// });


test.describe('Discounts Page Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_DiscountChangedSuccessfully', async ({page}) => {
        const discountsPage = new DiscountsPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await discountsPage.clickSettingBtn();
        await discountsPage.clickManageDiscountsBtn();
        await discountsPage.enterDiscountPercentageInput("10");
        await discountsPage.clickSetDiscountBtn();
        console.log("\nDiscounts Changed Successfully");
    });

});
