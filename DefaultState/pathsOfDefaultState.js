import {expect} from "@playwright/test";
import path from "path";

export class DefaultStatePage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.configurationFilterBtnXPath = '/html/body/main/div[1]/div/div/div/div[1]/div[2]/button[3]'
        this.manageDefaultStateBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[1]/div[2]/div[2]'
        this.stateDropdownID = 'stateSelect'
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

    async clickManageDefaultStateBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageDefaultStateBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(4000);
    }

    async selectStateDropdown(stateIndex) {
        await this.page.waitForTimeout(4000);
        const sel = this.page.locator(`id=${this.stateDropdownID}`);
        await sel.waitFor({state: 'visible'});
        await sel.selectOption({index: Number(stateIndex)});
    }

    async clickSaveChangesBtn() {
        const btn2 = this.page.locator(`xpath=${this.saveChangesBtnXPath}`);
        await btn2.click();
    }

    async verifyDefaultStateUpdated() {
        const successMsg = this.page.getByText('Default State Updated', { exact: true });
        await expect(successMsg).toBeVisible({ timeout: 5000 });
    }

}
