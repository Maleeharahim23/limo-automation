import {expect} from "@playwright/test";
import path from "path";

export class AffiliateCompanyPanelPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.manageAffiliatePanelBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[11]/div[2]'
        this.addAffiliatedCompanyBtnXPath = '/html/body/main/div[1]/div/div/div[2]/button'
        this.companyNameXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[1]/div[1]/div/input'
        this.phoneNumberID = 'phone'
        this.emailInputXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[2]/div/div[2]/input'
        this.vehicleTypeXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[2]/div/div/input'
        this.passengerCapacityInputXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div/input'
        this.saveChangesBtnXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[4]/button[2]'
        this.viewAffiliateBtnXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[2]/button'
        this.phoneNumberErrorXPath = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[1]/div[2]/span'
        this.emailErrorXPath = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[2]/span'
        this.vehicleTypeErrorXPath = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[2]/div/div/div/span'
        this.passengerCapacityErrorXPath = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div/div/span'
        this.vehicleImageErrorXPath = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[4]/div/div/div/div/span'
        this.flatAmountPerOrderInputXpath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[3]/div[2]/div/input'
        this.percentageOptionXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[3]/div[1]/div/label[2]/div/input'
        this.percentageInputXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[3]/div[2]/div[2]/div/input'
        this.perHourOptionXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[3]/div[1]/div/label[3]/div/input'
        this.perHourInputXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[3]/div[2]/div/input'
        this.searchAffiliateInputXPath = '/html/body/main/div[1]/div/div/div[2]/div/div/input'
        this.deleteAffiliateBtnXPath = '/html/body/main/div[1]/div/div/div[4]/div/div[2]/button'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickManageAffiliatePanelBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageAffiliatePanelBtnXPath}`);
        await btn2.click();
    }

    async clickCardByIndex(cardIndex) {
        const card = this.page.locator('div.p-6').nth(cardIndex - 1);
        await card.waitFor({ state: 'visible', timeout: 20000 });
        await card.scrollIntoViewIfNeeded();
        await card.click();
        console.log(`Clicked on div number ${cardIndex}`);
    }


    async clickAddAffiliateCompanyBtn() {
        const btn = this.page.locator(`xpath=${this.addAffiliatedCompanyBtnXPath}`);
        await btn.waitFor({state: 'visible'});
        await btn.click();
    }

    async enterCompanyName(companyNameInput) {
        const input = this.page.locator(`xpath=${this.companyNameXPath}`);
        await input.fill(companyNameInput);
    }

    async enterPhoneNumber(phoneNumberInput) {
        const input = this.page.locator(`[id="${this.phoneNumberID}"]`);
        await input.fill(phoneNumberInput);
    }

    async enterEmail(emailInput) {
        const input = this.page.locator(`xpath=${this.emailInputXPath}`);
        await input.fill(emailInput);
    }

    async enterVehicleType(vehicleTypeInput) {
        const input = this.page.locator(`xpath=${this.vehicleTypeXPath}`);
        await input.fill(vehicleTypeInput);
    }

    async enterPassengerCapacityInput(passengerCapacityInput) {
        const input = this.page.locator(`xpath=${this.passengerCapacityInputXPath}`);
        await input.fill(passengerCapacityInput);
    }

    async clickToUploadAnImageOfVehicleBtn() {
        const filePath = path.resolve(__dirname, "../Images/image 539.png");
        await this.page.setInputFiles('xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[4]/div/div/div/input', filePath);
        await this.page.waitForTimeout(3000);
    }

    async clickToUploadAnImageOfAffiliateCompanyProfileBtn() {
        const filePath = path.resolve(__dirname, "../Images/images 656.png");
        await this.page.setInputFiles('xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[4]/div/div[1]/input', filePath);
        await this.page.waitForTimeout(3000);
    }

    async clickSaveChangesBtn() {
        const btn = this.page.locator(`xpath=${this.saveChangesBtnXPath}`);
        await btn.waitFor({state: 'visible'});
        await btn.click();
    }

    async clickViewAffiliateBtn() {
        const btn = this.page.locator(`xpath=${this.viewAffiliateBtnXPath}`);
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
        await expect(this.page.locator(this.vehicleTypeErrorXPath)).toContainText("Vehicle type is required");
        await expect(this.page.locator(this.passengerCapacityErrorXPath)).toContainText("Passenger capacity must be at least 1");
        await expect(this.page.locator(this.vehicleImageErrorXPath)).toContainText("Image upload is required");
    }

    async enterAffiliateInSearchField(searchAffiliateInput) {
        await this.page.waitForTimeout(6000);
        const input = this.page.locator(`xpath=${this.searchAffiliateInputXPath}`);
        await input.waitFor({ state: 'visible', timeout: 10000 });
        await input.fill(searchAffiliateInput);
        await input.press('Enter'); // 👈 Press Enter after typing
        await this.page.waitForTimeout(1000); // Optional: short pause after search
    }

    async clickDeleteIcon() {
        await this.page.waitForSelector('table tbody tr', { state: 'visible', timeout: 20000 });
        const firstRow = this.page.locator('table tbody tr').first();
        await firstRow.hover();
        const deleteIcon = firstRow.locator('svg.lucide-trash');
        await deleteIcon.waitFor({ state: 'attached', timeout: 10000 });
        await deleteIcon.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(500);
        await deleteIcon.click();
    }

    async clickDeleteAffiliateBtn() {
        const btn = this.page.locator(`xpath=${this.deleteAffiliateBtnXPath}`);
        await btn.click();
    }

}
