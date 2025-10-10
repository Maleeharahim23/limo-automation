// AffiliateCompany/testAffiliateCompanyPanel.spec.js
import {test} from "@playwright/test";
import {AffiliateCompanyPanelPage} from "./pathsOfAffiliateCompanyPanel";
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

    test('test_01_AffiliateCompanyCreatedSuccessful', async ({page}) => {
        const affiliate = new AffiliateCompanyPanelPage(page);

        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await affiliate.clickSettingBtn();
        await affiliate.clickManageAffiliatePanelBtn();
        await affiliate.clickAddAffiliateCompanyBtn();
        await affiliate.enterCompanyName("Sultan Limo");
        await affiliate.enterPhoneNumber("3254618445646");
        await affiliate.enterEmail("maleeha3@theclevercoders.com");
        await affiliate.enterVehicleType("Limo");
        await affiliate.enterPassengerCapacityInput("4");
        await affiliate.clickToUploadAnImageOfVehicleBtn();
        await affiliate.clickToUploadAnImageOfAffiliateCompanyProfileBtn();
        await affiliate.enterFlatAmountPerOrderInput("20");
        await affiliate.clickPercentageOption();
        await affiliate.enterPercentageInput("10");
        await affiliate.clickPerHourOption();
        await affiliate.enterPerHourInput("10");
        await affiliate.clickSaveChangesBtn();
        await affiliate.clickViewAffiliateBtn();
        console.log("\nAffiliate Company Added Successfully");
    });

    test('test_02_AffiliateCompanyCreationFailed', async ({page}) => {
        const affiliate = new AffiliateCompanyPanelPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await affiliate.clickSettingBtn();
        await affiliate.clickManageAffiliatePanelBtn();
        await affiliate.clickAddAffiliateCompanyBtn();
        await affiliate.enterCompanyName("");
        await affiliate.enterPhoneNumber("32546646");
        await affiliate.enterEmail("maleehalevercoders.com");
        await affiliate.clickSaveChangesBtn()
        await affiliate.validateErrors();

        console.log("\n Affiliate Company not created, validation errors shown.");
    });
});
