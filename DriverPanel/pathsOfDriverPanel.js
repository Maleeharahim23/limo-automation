import {expect} from "@playwright/test";
import path from "path";

export class DriverPanelPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.manageDriverPanelBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[11]'
        this.addDriverdBtnXPath = '/html/body/main/div[1]/div/div/div[2]/button'
        this.driverNameXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[1]/div[1]/div/input'
        this.phoneNumberID = 'phone'
        this.emailInputXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/div/div[2]/input'
        this.vehicleTypeXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[2]/div/div/input'
        this.passengerCapacityInputXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div/input'
        this.saveChangesBtnXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[4]/button[2]'
        this.viewDriverBtnXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[2]/button'
        this.deleteAffiliateBtn = '/html/body/main/div[1]/div/div/div[4]/div/div[2]/button'
        this.phoneNumberErrorXPath = 'xpath=html/body/main/div[1]/div/div/div[4]/div/div[2]/div[1]/div[2]/span'
        this.emailErrorXPath = 'xpath=/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/span'
        this.flatAmountPerOrderInputXpath = '/html/body/main/div[1]/div/div/div[4]/div/div[3]/div[2]/div/input'
        this.percentageOptionXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[3]/div[1]/div/label[2]/div/input'
        this.percentageInputXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[3]/div[2]/div[2]/div/input'
        this.perHourOptionXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[3]/div[1]/div/label[3]/div/input'
        this.perHourInputXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[3]/div[2]/div/input'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.click();
    }

    async clickManageDriverPanelBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageDriverPanelBtnXPath}`);
        await btn2.click();
    }

    async clickAddDriverBtn() {
        const btn = this.page.locator(`xpath=${this.addDriverdBtnXPath}`);
        await btn.waitFor({state: 'visible'});
        await btn.click();
    }

    async enterDriverName(driverNameInput) {
        const input = this.page.locator(`xpath=${this.driverNameXPath}`);
        await input.fill(driverNameInput);
    }

    async enterPhoneNumber(phoneNumberInput) {
        const input = this.page.locator(`[id="${this.phoneNumberID}"]`);
        await input.fill(phoneNumberInput);
    }

    async enterEmail(emailInput) {
        const input = this.page.locator(`xpath=${this.emailInputXPath}`);
        await input.fill(emailInput);
    }

    async clickToUploadAnImageOfDriverProfileBtn() {
        const filePath = path.resolve(__dirname, "../Images/images 656.png");
        await this.page.setInputFiles('xpath=/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[3]/div/input', filePath);
        await this.page.waitForTimeout(3000);
    }

    async clickSaveChangesBtn() {
        const btn = this.page.locator(`xpath=${this.saveChangesBtnXPath}`);
        await btn.waitFor({state: 'visible'});
        await btn.click();
    }

    async clickViewDriverBtn() {
        const btn = this.page.locator(`xpath=${this.viewDriverBtnXPath}`);
        await btn.waitFor({state: 'visible'});
        await btn.click();
    }

    async enterFlatAmountPerOrderInput(flatAmountPerOrderInput) {
        const input = this.page.locator(`xpath=${this.flatAmountPerOrderInputXpath}`);
        await input.fill(flatAmountPerOrderInput);
    }

    async clickPercentageOption() {
        const btn = this.page.locator(`xpath=${this.percentageOptionXPath}`);
        await btn.click();
    }

    async enterPercentageInput(percentageInput) {
        const input = this.page.locator(`xpath=${this.percentageInputXPath}`);
        await input.fill(percentageInput);
    }

    async clickPerHourOption() {
        const btn = this.page.locator(`xpath=${this.perHourOptionXPath}`);
        await btn.click();
    }

    async enterPerHourInput(perHourInput) {
        const input = this.page.locator(`xpath=${this.perHourInputXPath}`);
        await input.fill(perHourInput);
    }

    async validateErrors() {
        await expect(this.page.locator(this.phoneNumberErrorXPath)).toContainText("Please enter a valid phone number");
        await expect(this.page.locator(this.emailErrorXPath)).toContainText("Please enter a valid email address");
    }

}
