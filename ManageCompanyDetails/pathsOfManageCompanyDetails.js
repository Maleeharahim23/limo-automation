import {expect} from "@playwright/test";
import path from "path";

export class ManageCompanyDetailsPanelPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.manageCompanyDetailsBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[1]'
        this.companyPhoneNumberName = 'company-phone'
        this.ownerPhoneNumberName = 'owner-phone'
        this.saveChangesBtnXPath = '/html/body/main/div[1]/div/div[2]/form/button'
        this.companyPhoneNumberErrorXPath = '/html/body/main/div[1]/div/div[2]/form/div[1]/div/p'
        this.ownerPhoneNumberErrorXPath = '/html/body/main/div[1]/div/div[2]/form/div[2]/div/p'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickManageCompanyDetailsBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageCompanyDetailsBtnXPath}`);
        await btn2.click();
    }

    async enterPakCompanyPhoneNumber(phoneNumber) {
        const companyPhoneInput = this.page.getByRole('textbox', {name: 'Company Phone Number'});
        const flagDropdown = companyPhoneInput.locator('..').locator('.selected-flag');
        await flagDropdown.click();
        const countryList = this.page.locator('ul.country-list');
        await countryList.waitFor({state: 'visible'});
        const searchBox = countryList.locator('input.search-box');
        await searchBox.fill('Pakistan');
        const pakistanOption = countryList.locator('li.country:has-text("Pakistan")');
        await pakistanOption.click();
        await companyPhoneInput.fill(phoneNumber);
    }

    async enterCompanyPhoneNumber(phoneNumber) {
        const el = this.page.locator(`[name="${this.companyPhoneNumberName}"]`);
        await el.waitFor({state: 'visible'});
        await el.fill(phoneNumber);
    }

    async enterOwnerPhoneNumber(ownerPhoneNumber) {
        const el = this.page.locator(`[id="${this.ownerPhoneNumberName}"]`);
        await el.waitFor({state: 'visible'});
        await el.fill(ownerPhoneNumber);
    }

    async clickSaveChangesBtn() {
        const btn2 = this.page.locator(`xpath=${this.saveChangesBtnXPath}`);
        await btn2.click();
    }

    async clearCompanyPhoneNumber() {
        const el = this.page.locator(`[name="${this.companyPhoneNumberName}"]`);
        await el.waitFor({ state: 'visible' });
        await el.fill(''); // Clears the field
    }

    async clearOwnerPhoneNumber() {
        const el = this.page.locator(`[id="${this.ownerPhoneNumberName}"]`);
        await el.waitFor({ state: 'visible' });
        await el.fill(''); // Clears the field
    }

    async validateErrors() {
        await expect(this.page.locator(`xpath=${this.companyPhoneNumberErrorXPath}`)).toContainText("Phone Number is required");
        await expect(this.page.locator(`xpath=${this.ownerPhoneNumberErrorXPath}`)).toContainText("Owner Phone Number is required");
    }

}
