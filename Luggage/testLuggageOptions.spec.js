import {test} from "@playwright/test";
import {LuggageOptionsPage} from "./pathsOfLuggageOptions";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

// test.use({
//     headless: false,
//     viewport: null,
//     launchOptions: {
//         args: ['--start-maximized'],
//     },
// });


test.describe('Luggage Options Page Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_LuggageOptionsChangedSuccessfully', async ({page}) => {
        const luggageOptionsPage = new LuggageOptionsPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await luggageOptionsPage.clickSettingBtn();
        await luggageOptionsPage.clickConfigurationFilterBtn();
        await luggageOptionsPage.clickManageLuggageOptionsBtn();
        await luggageOptionsPage.clickLuggageInputToggleBtn();
        await luggageOptionsPage.clickLuggageInputToggleBtn();
        await luggageOptionsPage.clickSaveChangesBtn();
        await luggageOptionsPage.verifyLuggageInputOptionUpdated();
        console.log("\nLuggage Options Changed Successfully");
    });

});
