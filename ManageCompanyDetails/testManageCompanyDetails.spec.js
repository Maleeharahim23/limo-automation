// AffiliateCompany/testAffiliateCompanyPanel.spec.js
import {test} from "@playwright/test";
import {ManageCompanyDetailsPanelPage} from "./pathsOfManageCompanyDetails";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

test.use({
    launchOptions: {
        args: ['--start-maximized'],
    },
    viewport: null,
});

test.describe('Login Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_ManageCompanyDetailsAddedSuccessfully', async ({page}) => {
        const companyPanel = new ManageCompanyDetailsPanelPage(page);

        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await companyPanel.clickSettingBtn();
        await companyPanel.clickManageCompanyDetailsBtn();
        // await companyPanel.enterPakCompanyPhoneNumber("3049602007");
        await companyPanel.enterCompanyPhoneNumber("3104248341");
        await companyPanel.enterOwnerPhoneNumber("3104248341");
        await companyPanel.clickSaveChangesBtn();
        console.log("\nManage Company Details are added Successfully");
    });

    test('test_02_ManageCompanyDetailsFailed', async ({page}) => {
        const companyPanel = new ManageCompanyDetailsPanelPage(page);

        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await companyPanel.clickSettingBtn();
        await companyPanel.clickManageCompanyDetailsBtn();
        await companyPanel.clearCompanyPhoneNumber();
        await companyPanel.clearOwnerPhoneNumber();
        await companyPanel.clickSaveChangesBtn();
        await companyPanel.validateErrors();
        console.log("\nManage Company Details data can not be added due to Errors");
    });

});
