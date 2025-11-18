import {test} from "@playwright/test";
import {MinimumHoursPage} from "./pathsOfMinimumHours";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

// test.use({
//     headless: false,
//     viewport: null,
//     launchOptions: {
//         args: ['--start-maximized'],
//     },
// });


test.describe('Minimum Hours Page Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_MinimumHoursChangedSuccessfully', async ({page}) => {
        const minimumHoursPage = new MinimumHoursPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await minimumHoursPage.clickSettingBtn();
        await minimumHoursPage.clickConfigurationFilterBtn();
        await minimumHoursPage.clickManageMinimumHoursBtn();
        await minimumHoursPage.enterMinimumHoursInput("4","0");
        await minimumHoursPage.enterMinimumHoursInput("9","1");
        await minimumHoursPage.enterMinimumHoursInput("12","2");
        await minimumHoursPage.enterMinimumHoursInput("9","3");
        await minimumHoursPage.enterMinimumHoursInput("5","4");
        await minimumHoursPage.enterMinimumHoursInput("12","5");
        await minimumHoursPage.enterMinimumHoursInput("0","6");
        await minimumHoursPage.clickSaveChangesBtn();
        await minimumHoursPage.checkMinimumHoursSavedToastText();
        console.log("\nMinimum Hours Changed Successfully");
    });

});
