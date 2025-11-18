import {test} from "@playwright/test";
import {ChangePasswordPage} from "./pathsOfChangePassword";
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

    test('test_01_PasswordChangedSuccessfully', async ({page}) => {
        const changePassword = new ChangePasswordPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await changePassword.clickSettingBtn();
        await changePassword.clickManageChangePasswordBtn();
        await changePassword.enterOldPassword("Admin@123");
        await changePassword.clickUnhideBtnForOldPass();
        await changePassword.enterNewPassword("Admin@123");
        await changePassword.clickUnhideBtnForNewPass();
        await changePassword.enterConfirmPassword("Admin@123");
        await changePassword.clickUnhideBtnForConfirmPass();
        await changePassword.clickSaveChangesBtn();
        await changePassword.checkPasswordChangedSuccessToastText();
        console.log("\nPassword Changed Successfully");
    });

    test('test_01_OldPasswordIncorrect', async ({page}) => {
        const changePassword = new ChangePasswordPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await changePassword.clickSettingBtn();
        await changePassword.clickManageChangePasswordBtn();
        await changePassword.enterOldPassword("Admin@13");
        await changePassword.clickUnhideBtnForOldPass();
        await changePassword.enterNewPassword("Admin@12366");
        await changePassword.clickUnhideBtnForNewPass();
        await changePassword.enterConfirmPassword("Admin@12366");
        await changePassword.clickUnhideBtnForConfirmPass();
        await changePassword.clickSaveChangesBtn();
        await changePassword.checkIncorrectOldPasswordToastText();
        console.log("\nPassword Changed Failed due to Incorrect Old Password");
    });

    test('test_01_NewAndConfirmPasswordMismatched', async ({page}) => {
        const changePassword = new ChangePasswordPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await changePassword.clickSettingBtn();
        await changePassword.clickManageChangePasswordBtn();
        await changePassword.enterOldPassword("Admin@123");
        await changePassword.clickUnhideBtnForOldPass();
        await changePassword.enterNewPassword("Admin@1266");
        await changePassword.clickUnhideBtnForNewPass();
        await changePassword.enterConfirmPassword("Admin@12366");
        await changePassword.clickUnhideBtnForConfirmPass();
        await changePassword.clickSaveChangesBtn();
        await changePassword.verifyPasswordsDoNotMatchError();
        console.log("\nPassword Changed Failed due to Mismatched New and Confirm Passwords");
    });

});
