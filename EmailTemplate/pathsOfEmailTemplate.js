import {expect} from "@playwright/test";
import path from "path";

export class EmailTemplatePage {
    constructor(page) {
        this.page = page;
        this.settingBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[5]'
        this.configurationFilterBtnXPath = '/html/body/main/div[1]/div/div/div/div[1]/div[2]/button[3]'
        this.manageEmailTemplateBtnXPath = '/html/body/main/div[1]/div/div/div/div[2]/div[4]/div[2]/div[2]'
        this.sendTestBtnXPath = '/html/body/main/div[1]/div/div[1]/div/div[2]/button[1]'
        this.sendTestBtn2XPath = '/html/body/main/div[1]/div/div[4]/div/div[2]/button[2]'
        this.emailInputID = 'testEmail'
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

    async clickManageEmailTemplateBtn() {
        const btn2 = this.page.locator(`xpath=${this.manageEmailTemplateBtnXPath}`);
        await btn2.waitFor({ state: 'visible' });
        await btn2.click();
        await this.page.waitForTimeout(4000);
    }

    async dragAndDropElementsIntoTemplateForOneWayTripToTheAirport() {
        await this.page.waitForTimeout(4000);
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[1]/div[2]/div', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[1]/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[3]/div[2]/div[1]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[3]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[1]/table/tbody/tr[3]/td[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[8]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[9]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[6]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[4]/ul');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[1]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[5]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.waitForTimeout(4000);
    }

    async dragAndDropElementsIntoTemplateForOneWayTripFromTheAirport() {
        await this.page.waitForTimeout(4000);
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[1]/div[2]/div', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[1]/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[3]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[3]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[1]/table/tbody/tr[3]/td[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[5]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[3]/p');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[5]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[3]/p');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[5]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[3]/p');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[6]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[4]/ul');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[1]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[5]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.waitForTimeout(4000);
    }

    async dragAndDropElementsIntoTemplateForHourlyTrip() {
        await this.page.waitForTimeout(4000);
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[1]/div[2]/div', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[1]/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[3]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[1]/table/tbody/tr[3]/td[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[5]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[4]/ul');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[6]/div[2]/div[1]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[6]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[6]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.waitForTimeout(4000);
    }

    async dragAndDropElementsIntoTemplateForRoundTripInvolvingAnAirportOutboundFirst() {
        await this.page.waitForTimeout(4000);
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[1]/div[2]/div', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[1]/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[1]/table/tbody/tr[3]/td[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]/p[1]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[3]/ul');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[3]/ul', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[4]/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[3]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[8]/div[2]/div[1]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[8]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[8]/div[2]/div[5]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.waitForTimeout(4000);
    }

    async dragAndDropElementsIntoTemplateForRoundTripNotInvolvingAnAirport() {
        await this.page.waitForTimeout(4000);
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[1]/div[2]/div', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[2]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[1]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[3]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[1]/table/tbody/tr[3]/td[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[4]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[5]/div[2]/div[2]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[3]/p');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[5]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[3]/p');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[5]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[3]/p');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[6]/div[2]/div[5]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[4]/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[6]/div[2]/div[6]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[4]/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[7]/div[2]/div[3]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/div[5]/ul');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[8]/div[2]/div[1]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[8]/div[2]/div[4]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.dragAndDrop('xpath=/html/body/main/div[1]/div/div[3]/div[1]/div[2]/div/div[8]/div[2]/div[5]', 'xpath=/html/body/main/div[1]/div/div[3]/div[2]/div[2]/div/div[1]/div[2]/table[3]/tbody/tr/td/p[2]');
        await this.page.waitForTimeout(4000);
    }

    async clickSendTestBtn() {
        const btn2 = this.page.locator(`xpath=${this.sendTestBtnXPath}`);
        await btn2.click();
    }

    async clickSendTestBtn2() {
        const btn2 = this.page.locator(`xpath=${this.sendTestBtn2XPath}`);
        await btn2.click();
    }

    async enterEmailInput(email) {
        const el = this.page.locator(`id=${this.emailInputID}`);
        await el.waitFor({ state: 'visible' });
        await el.fill(email);
    }

    async selectServiceDropdown(optionValue = null) {
        const dropdown = this.page.locator('button[role="combobox"]');
        await dropdown.waitFor({ state: 'visible' });
        await dropdown.click({ force: true });
        if (optionValue) {
            await this.page.getByText(optionValue).click();
        } else {
            await this.page.getByRole('option').first().click();
        }
    }

    async verifyInvalidEmailTextError() {
        await expect(this.page.getByText('Invalid email format')).toBeVisible({ timeout: 10000 });
    }

}
