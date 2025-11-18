class RefundAmountOfLeadsPage {
    constructor(page) {
        this.page = page;
        this.viewDetailsBtn = "/html/body/main/div[1]/div/div/div[2]/div[4]/table/tbody/tr"
        this.viewDetails2Btn = "/html/body/main/div[1]/div/div/div[2]/div[4]/table/tbody/tr[1]"
        this.refundBtnXPath = '/html/body/main/div[1]/div/div/div[3]/div/div[3]/div[2]/div/div[3]/div[1]/div/div/div[1]/button[1]'
        this.partialRefundRaioBtnID = 'partial'
        this.partialRefundRaioBtnForLeg1ID = 'leg1-partial'
        this.partialRefundRaioBtnForLeg2ID = 'leg2-partial'
        this.partialRefundAmountInputID = 'amount'
        this.partialRefundAmountInputForLeg1ID = 'leg1Amount'
        this.partialRefundAmountInputForLeg2ID = 'leg2Amount'
        this.processRefundBtnXPath = '/html/body/div[3]/div[4]/button[2]'
        this.saveBtnXPath = '/html/body/div[3]/div/div[3]/div/button[2]'
        this.cancelBtnXPath = '/html/body/div[3]/div[4]/button[1]'
        this.crossIconOfLeadsDetailPopupXPath = "/html/body/main/div[1]/div/div/div[3]/div/div[1]"
    }

    async clickViewDetailsBtn() {
        await this.page.locator(`xpath=${this.viewDetailsBtn}`).waitFor({state: 'visible', timeout: 20000});
        await this.page.locator(`xpath=${this.viewDetailsBtn}`).click();
        await this.page.waitForTimeout(500);
    }

    async clickViewDetails2Btn() {
        await this.page.locator(`xpath=${this.viewDetails2Btn}`).waitFor({state: 'visible', timeout: 20000});
        await this.page.locator(`xpath=${this.viewDetails2Btn}`).click();
        await this.page.waitForTimeout(500);
    }

    async clickRefundBtn() {
        const btn1 = this.page.locator(`xpath=${this.refundBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickPartialRefundRaioBtnID() {
        const loc = this.page.locator(`id=${this.partialRefundRaioBtnID}`);
        await loc.waitFor({state: 'visible', timeout: 20000});
        await loc.click();
    }

    async clickPartialRefundRaioBtnForLeg1ID() {
        const loc = this.page.locator(`id=${this.partialRefundRaioBtnForLeg1ID}`);
        await loc.waitFor({state: 'visible', timeout: 20000});
        await loc.click();
    }

    async clickPartialRefundRaioBtnForLeg2ID() {
        const loc = this.page.locator(`id=${this.partialRefundRaioBtnForLeg2ID}`);
        await loc.waitFor({state: 'visible', timeout: 20000});
        await loc.click();
    }

    async enterPartialRefundAmountInput(amount) {
        const input = this.page.locator(`id=${this.partialRefundAmountInputID}`);
        await input.waitFor({state: 'visible'});
        await input.fill(String(amount));
    }

    async enterPartialRefundAmountForLeg1Input(amount) {
        const input = this.page.locator(`id=${this.partialRefundAmountInputForLeg1ID}`);
        await input.waitFor({state: 'visible'});
        await input.fill(String(amount));
    }

    async enterPartialRefundAmountForLeg2Input(amount) {
        const input = this.page.locator(`id=${this.partialRefundAmountInputForLeg2ID}`);
        await input.waitFor({state: 'visible'});
        await input.fill(String(amount));
    }

    async clickProcessRefundBtn() {
        const btn1 = this.page.locator(`xpath=${this.processRefundBtnXPath}`);
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

    async checkRefundToastText() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'Refund processed successfully!')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Refund processed successfully!');
    }

    async checkRefundFailedMessageText() {
        const toast = this.page.locator(`xpath=//p[contains(text(), 'Refund amount must be a valid positive number')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Refund amount must be a valid positive number');
    }

    async checkRefundFailedMessageTextForLeg1() {
        const toast = this.page.locator(`xpath=//p[contains(text(), 'Leg 1 refund amount must be a valid positive number')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Leg 1 refund amount must be a valid positive number');
    }

    async checkRefundFailedMessageTextForLeg2() {
        const toast = this.page.locator(`xpath=//p[contains(text(), 'Leg 2 refund amount must be a valid positive number')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Leg 2 refund amount must be a valid positive number');
    }

    async clickCrossIconOfLeadsDetailPopup() {
        const btn = this.page.locator(`xpath=${this.crossIconOfLeadsDetailPopupXPath}`);
        await btn.click();
    }

}

module.exports = RefundAmountOfLeadsPage;
