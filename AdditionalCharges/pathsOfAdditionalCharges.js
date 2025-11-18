import {expect} from "@playwright/test";
import path from "path";

export class AdditionalChargesPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.manageAdditionalChargesBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[4]/div[2]'
        this.paymentLabelInputID = 'paymentLabel'
        this.amountInputID = 'amount'
        this.typeXPath = '/html/body/main/div[1]/div/div[2]/div/div/div/div[1]/form/div/div[3]/select'
        this.taxCheckboxID = 'isTax'
        this.gratuityCheckboxID = 'isGratuity'
        this.gstAmount = '/html/body/main/div[1]/div/div[2]/div/div/div/div[1]/div[2]/ul/li[1]/div/div[2]/input'
        this.unhideBtnForOldPass = '/html/body/main/div[1]/div/div[2]/form/div[1]/div/div[2]/div/button'
        this.unhideBtnForNewPass = '/html/body/main/div[1]/div/div[2]/form/div[2]/div/div[2]/div/button'
        this.unhideBtnForConfirmPass = '/html/body/main/div[1]/div/div[2]/form/div[3]/div/div[2]/div/button'
        this.saveChangesBtnXPath = '/html/body/main/div[1]/div/div[2]/form/button'
        this.addChargeBtnXPath = '/html/body/main/div[1]/div/div[2]/div/div/div/div[1]/form/button'
        this.deleteIconBtnXPath = '/html/body/main/div[1]/div/div[2]/div/div/div/div[1]/div[2]/ul/li[1]/div/div[4]/button'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickAddChargeBtn() {
        const btn1 = this.page.locator(`xpath=${this.addChargeBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
        await this.page.waitForTimeout(4000);
    }

    async clickDeleteIconBtn() {
        const btn1 = this.page.locator(`xpath=${this.deleteIconBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickManageAdditionalChargesBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageAdditionalChargesBtnXPath}`);
        await btn2.click();
    }

    async enterPaymentLabelInput(label) {
        await this.page.waitForTimeout(4000);
        const el = this.page.locator(`[id="${this.paymentLabelInputID}"]`);
        await el.waitFor({ state: 'visible' });
        await el.fill(label);
    }

    async enterAmountInput(amount) {
        const el = this.page.locator(`[id="${this.amountInputID}"]`);
        await el.waitFor({ state: 'visible' });
        await el.fill(amount);
    }

    async selectTypeOfAdditionalCharges(additionalChargesType) {
        const sel = this.page.locator(`xpath=${this.typeXPath}`);
        await sel.waitFor({state: 'visible'});
        await sel.selectOption({index: Number(additionalChargesType)});
    }

    async clickTaxCheckbox() {
        const btn2 = this.page.locator(`id=${this.taxCheckboxID}`);
        await btn2.click();
    }
l
}
