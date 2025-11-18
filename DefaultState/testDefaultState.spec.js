import {test} from "@playwright/test";
import {DefaultStatePage} from "./pathsOfDefaultState";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

// test.use({
//     headless: false,
//     viewport: null,
//     launchOptions: {
//         args: ['--start-maximized'],
//     },
// });


test.describe('Chane Password Page Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_DefaultStateChangedSuccessfully', async ({page}) => {
        const defaultState = new DefaultStatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await defaultState.clickSettingBtn();
        await defaultState.clickManageDefaultStateBtn();
        await defaultState.selectStateDropdown(1);
        await defaultState.clickSaveChangesBtn();
        await defaultState.verifyDefaultStateUpdated();
        console.log("\nDefault State Changed Successfully");
    });

});
