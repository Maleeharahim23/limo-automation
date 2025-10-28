import {test} from "@playwright/test";
import {DriverPanelPage} from "./pathsOfDriverPanel";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

// test.use({
//     headless: false,
//     viewport: null,
//     launchOptions: {
//         args: ['--start-maximized'],
//     },
// });

test.describe('Driver Creation Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_DriverCreationSuccessful', async ({page}) => {
        const driver = new DriverPanelPage(page);

        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await driver.clickSettingBtn();
        await driver.clickManageDriverPanelBtn();
        await driver.clickAddDriverBtn();
        await driver.enterDriverName("James");
        await driver.enterPhoneNumber("3254618445646");
        await driver.enterEmail("test@theclevercoders.com");
        await driver.clickToUploadAnImageOfDriverProfileBtn();
        await driver.enterFlatAmountPerOrderInput("20");
        await driver.clickPercentageOption();
        await driver.enterPercentageInput("10");
        await driver.clickPerHourOption();
        await driver.enterPerHourInput("10");
        await driver.clickSaveChangesBtn();
        await driver.clickViewDriverBtn();
        console.log("\nDriver Added Successfully");
    });

    test('test_02_DriverCreationFailed', async ({page}) => {
        const driver = new DriverPanelPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage  = await login_helper.perform_login();
        await driver.clickSettingBtn();
        await driver.clickManageDriverPanelBtn();
        await driver.clickAddDriverBtn();
        await driver.enterDriverName("");
        await driver.enterPhoneNumber("32546646");
        await driver.enterEmail("clevercoders.com");
        await driver.clickSaveChangesBtn()
        await driver.validateErrors();

        console.log("\n Driver not created, validation errors shown.");
    });
});
