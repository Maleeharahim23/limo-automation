import {test} from "@playwright/test";
import {AdditionalChargesPage} from "./pathsOfAdditionalCharges";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

test.use({
    headless: false,
    viewport: null,
    launchOptions: {
        args: ['--start-maximized'],
    },
});


test.describe('Additional Charges Page Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_ChargesAddition', async ({page}) => {
        const additionalCharges = new AdditionalChargesPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await additionalCharges.clickSettingBtn();
        await additionalCharges.clickManageAdditionalChargesBtn();
        await additionalCharges.clickDeleteIconBtn();
        await additionalCharges.enterPaymentLabelInput("GST");
        await additionalCharges.enterAmountInput("10");
        await additionalCharges.selectTypeOfAdditionalCharges(1);
        await additionalCharges.clickTaxCheckbox();
        await additionalCharges.clickAddChargeBtn();
        await additionalCharges.clickDeleteIconBtn();
        await additionalCharges.enterPaymentLabelInput("Gratuity");
        await additionalCharges.enterAmountInput("20");
        await additionalCharges.selectTypeOfAdditionalCharges(1);
        await additionalCharges.clickGratuityCheckbox();
        await additionalCharges.clickAddChargeBtn();
        console.log("\nCharges Added Successfully");
    });

});
