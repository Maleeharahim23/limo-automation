import {expect} from "@playwright/test";
import path from "path";

export class ManageSubscriptionPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.accountFilterBtnXPath = '/html/body/main/div[1]/div/div/div/div[1]/div[2]/button[2]'
        this.manageSubscriptionOptionsBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[3]/div[2]/div[2]'
        this.getStartedBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[2]/div[3]/button'
        this.cardNumberID = 'cardNumber'
        this.cardExpiryID = 'cardExpiry'
        this.cardCVCID = 'cardCvc'
        this.cardHolderNameXPath = '/html/body/div[1]/div/div/div[2]/main/div/form/div/div/div/div[2]/div/div/div[2]/div/div/div/div/div/div/div[1]/div/div[2]/div[1]/div[1]/div/div/span/input'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickAccountFilterBtn() {
        const btn1 = this.page.locator(`xpath=${this.accountFilterBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickManageSubscriptionOptionsBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageSubscriptionOptionsBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(4000);
    }

    async clickGetStartedBtn() {
        await this.page.waitForTimeout(4000);
        const btn2 = this.page.locator(`xpath=${this.getStartedBtnXPath}`);
        await btn2.click();
    }

    async enterCardNumberInput(number) {
        const btn2 = this.page.locator(`id=${this.cardNumberID}`);
        await btn2.fill(number);
    }

    async enterCardExpiryInput(date) {
        const btn2 = this.page.locator(`id=${this.cardExpiryID}`);
        await btn2.fill(date);
    }

    async enterCardCVCInput(cvc) {
        const btn2 = this.page.locator(`id=${this.cardCVCID}`);
        await btn2.fill(cvc);
    }

    async enterCardHolderNameInput(cvc) {
        const btn2 = this.page.locator(`id=${this.cardHolderNameXPath}`);
        await btn2.fill(cvc);
    }

    async verifyLuggageInputOptionUpdated() {
        const successMsg = this.page.getByText('Luggage Input Option Updated', { exact: true });
        await expect(successMsg).toBeVisible({ timeout: 5000 });
    }

}