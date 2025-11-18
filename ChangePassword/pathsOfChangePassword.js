import {expect} from "@playwright/test";
import path from "path";

export class ChangePasswordPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.manageChangePasswordBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[2]/div[2]'
        this.oldPasswordInputXPath = '/html/body/main/div[1]/div/div[2]/form/div[1]/div/div[2]/div/input'
        this.unhideBtnForOldPass = '/html/body/main/div[1]/div/div[2]/form/div[1]/div/div[2]/div/button'
        this.unhideBtnForNewPass = '/html/body/main/div[1]/div/div[2]/form/div[2]/div/div[2]/div/button'
        this.unhideBtnForConfirmPass = '/html/body/main/div[1]/div/div[2]/form/div[3]/div/div[2]/div/button'
        this.saveChangesBtnXPath = '/html/body/main/div[1]/div/div[2]/form/button'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickManageChangePasswordBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageChangePasswordBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(4000);
    }

    async enterOldPassword(oldPassword) {
        const oldPassField = this.page
            .locator('p:has-text("Old Password")')
            .locator('xpath=./following-sibling::div//input');

        await oldPassField.waitFor({ state: 'visible' });
        await oldPassField.fill(oldPassword);
    }

    async clickUnhideBtnForOldPass() {
        await this.page.locator(`xpath=${this.unhideBtnForOldPass}`).click();
        await this.page.waitForTimeout(300);
    }

    async enterNewPassword(newPassword) {
        const newPassField = this.page
            .locator('p:has-text("New Password")')
            .locator('xpath=./following-sibling::div//input');

        await newPassField.waitFor({ state: 'visible' });
        await newPassField.fill(newPassword);
    }

    async clickUnhideBtnForNewPass() {
        await this.page.locator(`xpath=${this.unhideBtnForNewPass}`).click();
        await this.page.waitForTimeout(300);
    }

    async enterConfirmPassword(confirmPassword) {
        const confirmPassField = this.page
            .locator('p:has-text("Confirm Password")')
            .locator('xpath=./following-sibling::div//input');

        await confirmPassField.waitFor({ state: 'visible' });
        await confirmPassField.fill(confirmPassword);
    }

    async clickUnhideBtnForConfirmPass() {
        await this.page.locator(`xpath=${this.unhideBtnForConfirmPass}`).click();
        await this.page.waitForTimeout(300);
    }

    async clickSaveChangesBtn() {
        const btn2 = this.page.locator(`xpath=${this.saveChangesBtnXPath}`);
        await btn2.click();
    }

    async checkPasswordChangedSuccessToastText() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'Password updated successfully')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Password updated successfully');
    }

    async checkIncorrectOldPasswordToastText() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'Invalid old password')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Invalid old password');
    }

    async verifyPasswordsDoNotMatchError() {
        const errorMessage = this.page.locator('span.break-words', { hasText: 'Passwords do not match' });

        await expect(errorMessage).toBeVisible();
    }

    async clearCompanyPhoneNumber() {
        await this.page.waitForTimeout(4000);
        const el = this.page.locator(`[id="${this.oldPasswordInputXPath}"]`);
        await el.waitFor({ state: 'visible' });
        await el.click({ clickCount: 3 });
        await el.fill(' ');
    }


    async clearOwnerPhoneNumber() {
        await this.page.waitForTimeout(4000);
        const el = this.page.locator(`[name="${this.ownerPhoneNumberName}"]`);
        await el.waitFor({ state: 'visible' });
        await el.click({ clickCount: 3 });
        await el.fill(' ');
    }

    async validateErrors() {
        await expect(this.page.locator(`xpath=${this.companyPhoneNumberErrorXPath}`)).toContainText("Phone Number is required");
        await expect(this.page.locator(`xpath=${this.ownerPhoneNumberErrorXPath}`)).toContainText("Owner Phone Number is required");
    }
}
