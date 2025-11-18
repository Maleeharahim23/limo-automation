import {expect} from "@playwright/test";
import path from "path";

export class MinimumHoursPage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.configurationFilterBtnXPath = '/html/body/main/div[1]/div/div/div/div[1]/div[2]/button[3]'
        this.manageMinimumHoursBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[2]/div[2]/div[2]'
        this.saveChangesBtnXPath = '/html/body/main/div[1]/div/div/div/div/form/div[8]/button'
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

    async clickManageMinimumHoursBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageMinimumHoursBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(4000);
    }

    async enterMinimumHoursInput(amount, index = 0) {
        await this.page.waitForTimeout(2000);
        const inputs = this.page.locator('input[type="number"][placeholder="Minimum hours"]');
        await inputs.nth(index).waitFor({ state: 'visible' });
        await inputs.nth(index).fill('');
        await inputs.nth(index).fill(amount);
    }

    async clickSaveChangesBtn() {
        const btn2 = this.page.locator(`xpath=${this.saveChangesBtnXPath}`);
        await btn2.click();
    }

    async checkMinimumHoursSavedToastText() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'Minimum Number of hours updated successfully!')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Minimum Number of hours updated successfully!');
    }

}
