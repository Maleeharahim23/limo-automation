class DriverDispatchingPage {
    constructor(page) {
        this.page = page;
        this.dispatchBtnXPath = '/html/body/main/div[1]/header/nav/div/div[2]/a[3]'
        this.allTabBtnXPath = '/html/body/main/div[1]/div/div/div[3]/nav/button[1]'
        this.searchLeadInputXPath = '/html/body/main/div[1]/div/div/div[2]/div[1]/div[1]/input'
        this.assignDriverBtnXPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div/div/div/div/div[1]/table/tbody/tr/td[7]/button'
        this.assignDriverBtn2XPath = '/html/body/main/div[1]/div/div/div[4]/div[2]/div/div/div/div/div[1]/table/tbody/tr[1]/td[7]/button'
        this.saveBtnXPath = '/html/body/div[3]/div/div[3]/div/button[2]'
        this.cancelBtnXPath = '/html/body/div[3]/div/div[3]/div/button[1]'
    }

    async clickDispatchingBtn() {
        const btn1 = this.page.locator(`xpath=${this.dispatchBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickAllTabBtn() {
        const btn1 = this.page.locator(`xpath=${this.allTabBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async waitAndEnterLeadOrderID(inputOrderID) {
        await this.page.waitForTimeout(6000);
        const loc = this.page.locator(`xpath=${this.searchLeadInputXPath}`);
        await loc.waitFor({state: 'visible', timeout: 20000});
        await loc.fill(String(inputOrderID));
    }

    async clickAssignDriverBtn() {
        const btn1 = this.page.locator(`xpath=${this.assignDriverBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickAssignDriver2Btn() {
        const btn1 = this.page.locator(`xpath=${this.assignDriverBtn2XPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async selectDropdownOption(dropdownLabel, optionIndex) {
        const dropdownButton = this.page.locator(`//button[@role='combobox'][.//span[normalize-space(text())='${dropdownLabel}']]`);
        await dropdownButton.waitFor({ state: 'visible', timeout: 20000 });
        await dropdownButton.scrollIntoViewIfNeeded();
        await dropdownButton.click();
        await this.page.waitForSelector('//button[@role="combobox" and @data-state="open"]', { timeout: 5000 });
        const options = this.page.locator('//*[@role="option" or self::div[contains(@class, "option")]]');
        await options.first().waitFor({ state: 'visible', timeout: 10000 });
        const optionToSelect = options.nth(optionIndex);
        await optionToSelect.scrollIntoViewIfNeeded();
        await optionToSelect.click();
        await this.page.waitForTimeout(500);
    }

    async clickSaveBtn() {
        const btn2 = this.page.locator(`xpath=${this.saveBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(500);
    }

    async clickCancelBtn() {
        const btn2 = this.page.locator(`xpath=${this.cancelBtnXPath}`);
        await btn2.click();
        await this.page.waitForTimeout(500);
    }

    async checkDriverAssignedToastText() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'The assignment is successfully done!')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('The assignment is successfully done!');
    }

    async checkDriverAssignFailedMessage() {
        const toast = this.page.locator(`xpath=//span[contains(text(), 'Please select driver!')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Please select driver!');
    }

}

module.exports = DriverDispatchingPage;
