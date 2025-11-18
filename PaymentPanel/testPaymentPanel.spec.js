import {test} from "@playwright/test";
import {PaymentPanelPage} from "./pathsOfPaymentPanel";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

test.use({
    headless: false,
    viewport: null,
    launchOptions: {
        args: ['--start-maximized'],
    },
});


test.describe('Payment Panel Page Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_ManageTipBoxSettingChangedSuccessfully', async ({page}) => {
        const paymentPanelPage = new PaymentPanelPage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await paymentPanelPage.clickSettingBtn();
        await paymentPanelPage.clickManagePaymentPanelBtn();
        await paymentPanelPage.clickShowTipBoxToggleBtn();
        // await paymentPanelPage.clickShowTipBoxToggleBtn();
        await paymentPanelPage.clickManageMeetAndGreetTab();
        // await paymentPanelPage.clickShowMeetAndGreetToggleBtn();
        await paymentPanelPage.clickShowMeetAndGreetToggleBtn();
        await paymentPanelPage.enterMeetAndGreetAMount("40");
        await paymentPanelPage.clickSaveBtn();
        console.log("\nManage Tip Box Setting Changed Successfully");
    });

});
