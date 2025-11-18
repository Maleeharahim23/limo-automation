import {expect} from "@playwright/test";
import path from "path";

export class PaymentPanelPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.managePaymentPanelBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[8]/div[2]'
        this.showTipBoxToggleBtnXPath = '/html/body/main/div[1]/div/div[2]/div/div[2]/div/div[3]/label'
        this.showMeetAndGreetBoxToggleBtnXPath = '/html/body/main/div[1]/div/div[2]/div/div[2]/div/div[2]/div[1]/label'
        this.manageMeetAndGreetTabBtnXPath = '/html/body/main/div[1]/div/div[2]/div/div[1]/div/button[2]'
        this.meetAndGreetInputXPath = '/html/body/main/div[1]/div/div[2]/div/div[2]/div/div[2]/div[2]/div[1]/input'
        this.saveBtnXPath = '/html/body/main/div[1]/div/div[2]/div/div[2]/div/div[2]/div[2]/div[2]/button'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickManagePaymentPanelBtn() {
        const btn2 = this.page.locator(`xpath=${this.managePaymentPanelBtnXPath}`);
        await btn2.click();
    }

    async clickShowTipBoxToggleBtn() {
        const btn2 = this.page.locator(`xpath=${this.showTipBoxToggleBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(2000);
    }

    async clickShowMeetAndGreetToggleBtn() {
        const btn2 = this.page.locator(`xpath=${this.showMeetAndGreetBoxToggleBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(2000);
    }

    async clickManageMeetAndGreetTab() {
        const btn2 = this.page.locator(`xpath=${this.manageMeetAndGreetTabBtnXPath}`);
        await btn2.click();
    }

    async enterMeetAndGreetAMount(amount) {
        const input = this.page.locator(`xpath=${this.meetAndGreetInputXPath}`);
        await input.fill("");
        await input.fill(amount);
    }

    async clickSaveBtn() {
        const btn2 = this.page.locator(`xpath=${this.saveBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(4000);
    }

    async verifyLuggageInputOptionUpdated() {
        const successMsg = this.page.getByText('Luggage Input Option Updated', { exact: true });
        await expect(successMsg).toBeVisible({ timeout: 5000 });
    }

}
