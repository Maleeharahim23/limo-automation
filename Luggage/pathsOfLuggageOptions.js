import {expect} from "@playwright/test";
import path from "path";

export class LuggageOptionsPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.configurationFilterBtnXPath = '/html/body/main/div[1]/div/div/div/div[1]/div[2]/button[3]'
        this.manageLuggageOptionsBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[3]/div[2]/div[2]'
        this.luggaeInputToggleBtnID = 'luggageToggle'
        this.saveChangesBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/button'
    }

    async clickSettingBtn() {
        const btn1 = this.page.locator(`xpath=${this.settingBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickConfigurationFilterBtn() {
        const btn1 = this.page.locator(`xpath=${this.configurationFilterBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickManageLuggageOptionsBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageLuggageOptionsBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(4000);
    }

    async clickLuggageInputToggleBtn() {
        await this.page.waitForTimeout(4000);
        const btn2 = this.page.locator(`id=${this.luggaeInputToggleBtnID}`);
        await btn2.click();
    }

    async clickSaveChangesBtn() {
        const btn2 = this.page.locator(`xpath=${this.saveChangesBtnXPath}`);
        await btn2.click();
    }

    async verifyLuggageInputOptionUpdated() {
        const successMsg = this.page.getByText('Luggage Input Option Updated', { exact: true });
        await expect(successMsg).toBeVisible({ timeout: 5000 });
    }

}
