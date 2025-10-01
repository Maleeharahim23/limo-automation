import {expect} from "@playwright/test";
import path from "path";

export class AffiliateCompanyPanelPage {
    constructor(page) {
        this.page = page;
        this.settingBtn = '/html/body/main/div[1]/header/nav/div/div[2]/a[3]';
        this.manageAffiliatePanelBtn = '/html/body/main/div[1]/div/div/div/div/div[10]/div/button';
        this.addAffiliatedCompanyBtn = '/html/body/main/div[1]/div/div/div[2]/button';
        this.companyNameXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[1]/div[1]/div/input';
        this.phoneNumberID = 'phone';
        this.emailInputXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[2]/div/div[2]/input';
        this.vehicleTypeXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[2]/div/div/input';
        this.passengerCapacityInput = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div/input';
        this.saveChangesBtn = '/html/body/main/div[1]/div/div/div[4]/div[2]/div[4]/button[2]';
        this.viewAffiliateBtn = '/html/body/main/div[1]/div/div/div[4]/div/div[2]/button';
        this.deleteAffiliateBtn = 'xpath=/html/body/main/div[1]/div/div/div[4]/div/div[2]/button';
        this.phoneNumberError = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[1]/div[2]/span';
        this.emailError = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[2]/span';
        this.vehicleTypeError = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[2]/div/div/div/span';
        this.passengerCapacityError = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[3]/div/div/div/span';
        this.vehicleImageError = 'xpath=/html/body/main/div[1]/div/div/div[4]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td[4]/div/div/div/div/span';
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtn}`);
        await btn1.click();
    }

    async clickManageAffiliatePanelBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageAffiliatePanelBtn}`);
        await btn2.click();
    }

    async clickAddAffiliateCompanyBtn() {
        const btn = this.page.locator(`xpath=${this.addAffiliatedCompanyBtn}`);
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
        const input = this.page.locator(`xpath=${this.passengerCapacityInput}`);
        await input.fill(passengerCapacityInput);
    }

    async clickToUploadAnImageOfVehicleBtn() {
        const filePath = path.resolve("D:/Automation/Limo/Images/image 539.png");
        await this.page.setInputFiles('#file-upload-0-3', filePath);
        await this.page.waitForTimeout(3000);
    }

    async clickToUploadAnImageOfAffiliateCompanyProfileBtn() {
        const filePath = path.resolve("D:/Automation/Limo/Images/images 656.png");
        await this.page.setInputFiles('input[type="file"]', filePath);
        await this.page.waitForTimeout(3000);
    }

    async clickSaveChangesBtn() {
        const btn = this.page.locator(`xpath=${this.saveChangesBtn}`);
        await btn.waitFor({state: 'visible'});
        await btn.click();
    }

    async clickViewAffiliateBtn() {
        const btn = this.page.locator(`xpath=${this.viewAffiliateBtn}`);
        await btn.waitFor({state: 'visible'});
        await btn.click();
    }

    async validateErrors() {
        await expect(this.page.locator(this.phoneNumberError)).toContainText("Please enter a valid phone number");
        await expect(this.page.locator(this.emailError)).toContainText("Please enter a valid email address");
        await expect(this.page.locator(this.vehicleTypeError)).toContainText("Vehicle type is required");
        await expect(this.page.locator(this.passengerCapacityError)).toContainText("Passenger capacity must be at least 1");
        await expect(this.page.locator(this.vehicleImageError)).toContainText("Image upload is required");
    }
}
