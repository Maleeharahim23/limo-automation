import {expect} from "@playwright/test";
import path from "path";

export class DiscountsPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.manageDiscountsBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[5]/div[2]'
        this.discountPercentageID = 'discount'
        this.setDiscountBtnXPath = '/html/body/main/div[1]/div/div[2]/div/div/div/form/div/button'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickManageDiscountsBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageDiscountsBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(4000);
    }

    async enterDiscountPercentageInput(amount) {
        await this.page.waitForTimeout(4000);
        const el = this.page.locator(`[id="${this.discountPercentageID}"]`);
        await el.waitFor({ state: 'visible' });
        await el.fill("");
        await el.fill(amount);
    }

    async clickSetDiscountBtn() {
        const btn2 = this.page.locator(`xpath=${this.setDiscountBtnXPath}`);
        await btn2.click();
    }

    async verifyDefaultStateUpdated() {
        const successMsg = this.page.getByText('Default State Updated', { exact: true });
        await expect(successMsg).toBeVisible({ timeout: 5000 });
    }

}
