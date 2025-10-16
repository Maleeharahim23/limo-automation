class SendQuotes {
    constructor(page) {
        this.page = page;
        this.mainPriceID = 'price'
        this.clientNoteInputID = "note"
        this.noteToggleBtn = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[3]/label/div"
        this.password = "/html/body/main/div[2]/div/div/form/div[2]/div/input"
        this.viewDetailsBtn = "/html/body/main/div[1]/div/div/div[2]/div[3]/table/tbody/tr[1]"
        this.sendQuoteManuallyBtn = "/html/body/main/div[1]/div/div/div[3]/div/div[2]/div[2]/button"
        this.changePriceBtn = "/html/body/main/div[1]/div/div/div[3]/div/div[3]/div[2]/div/div[3]/div[3]/div[1]/button"
        this.addAdditionalChargesBtn = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/form/button"
        this.paymentInput = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/form/div[2]/div[2]/input"
        this.paymentInput2 = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/form/div[3]/div[2]/input"
        this.paymentLabelInput = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/form/div[2]/input"
        this.paymentLabelInput2 = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/form/div[3]/input"
        this.nextButtonAfterEnteringPriceDetails = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/form/div[3]/button"
        this.nextButtonAfterEnteringPriceDetails2 = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div[2]/div/form/div[4]/button"
        this.led2tabButton = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/div[2]/div[1]/button[2]"
        this.searchLeadInputXPath = "/html/body/main/div[1]/div/div/div[2]/div[2]/div/div[1]/div[1]/input"
        this.submitQuoteBtnXPath = "/html/body/main/div[1]/div/div/div[3]/div[2]/div/button"
        this.crossIconOfLeadsDetailPopupXPath = "/html/body/main/div[1]/div/div/div[3]/div/div[1]/svg"
    }

    async waitAndEnterLeadOrderID(inputOrderID) {
        const loc = this.page.locator(`xpath=${this.searchLeadInputXPath}`);
        await loc.waitFor({state: 'visible', timeout: 20000});
        await loc.fill(String(inputOrderID));
    }

    async clickViewDetailsBtn() {
        await this.page.locator(`xpath=${this.viewDetailsBtn}`).waitFor({state: 'visible', timeout: 20000});
        await this.page.locator(`xpath=${this.viewDetailsBtn}`).click();
        await this.page.waitForTimeout(500);
    }

    async clickSendQuoteManuallyBtn() {
        await this.page.locator(`xpath=${this.sendQuoteManuallyBtn}`).click();
        await this.page.waitForTimeout(500);
    }

    async clickChangePriceBtn() {
        await this.page.locator(`xpath=${this.changePriceBtn}`).click();
        await this.page.waitForTimeout(500);
    }

    async enterMainPrice(mainPrice) {
        await this.page.locator(`#${this.mainPriceID}`).fill(mainPrice);
        await this.page.waitForTimeout(500);
    }

    async clickNoteToggleBtn() {
        await this.page.locator(`xpath=${this.noteToggleBtn}`).click();
        await this.page.waitForTimeout(500);
    }

    async enterClientNoteInput(clientNote) {
        await this.page.locator(`#${this.clientNoteInputID}`).fill(clientNote);
        await this.page.waitForTimeout(500);
    }

    async removeMainPrice() {
        await this.page.locator(`#${this.mainPriceID}`).fill('');
        await this.page.waitForTimeout(300);
    }

    async clickAdditionalChargesBtn() {
        await this.page.locator(`xpath=${this.addAdditionalChargesBtn}`).click();
        await this.page.waitForTimeout(500);
    }

    async clickNextButtonAfterEnteringPriceDetails() {
        await this.page.locator(`xpath=${this.nextButtonAfterEnteringPriceDetails}`).click();
        await this.page.waitForTimeout(500);
    }

    async clickNextButtonAfterEnteringPriceDetails2() {
        await this.page.locator(`xpath=${this.nextButtonAfterEnteringPriceDetails2}`).click();
        await this.page.waitForTimeout(500);
    }

    async clickLeg2TabBtn() {
        await this.page.locator(`xpath=${this.led2tabButton}`).click();
        await this.page.waitForTimeout(500);
    }

    async enterPayment(payment) {
        await this.page.locator(`xpath=${this.paymentInput}`).fill(payment);
        await this.page.waitForTimeout(300);
    }

    async enterPayment2(payment2) {
        await this.page.locator(`xpath=${this.paymentInput2}`).fill(payment2);
        await this.page.waitForTimeout(300);
    }

    async enterPaymentLabel(paymentLabel) {
        await this.page.locator(`xpath=${this.paymentLabelInput}`).fill(paymentLabel);
        await this.page.waitForTimeout(300);
    }

    async enterPaymentLabel2(paymentLabel2) {
        await this.page.locator(`xpath=${this.paymentLabelInput2}`).fill(paymentLabel2);
        await this.page.waitForTimeout(300);
    }

    async clickSubmitButton() {
        await this.page.locator(`xpath=${this.submitQuoteBtnXPath}`).waitFor({state: 'visible', timeout: 20000});
        await this.page.locator(`xpath=${this.submitQuoteBtnXPath}`).click();
        await this.page.waitForTimeout(500);
    }

    async checkEmailSentToastTextForSingleTrips() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'Email Sent Successfully!')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Email Sent Successfully!');
    }

    async checkEmailUpdateToastTextForSingleTrips() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'Price Updated & Email Sent Successfully!')]`);
        await toast.waitFor({state: 'visible', timeout: 20000});
        const txt = await toast.textContent();
        return txt && txt.includes('Price Updated & Email Sent Successfully!');
    }

    async checkEmailSentToastTextForRoundTrips() {
        const toast = this.page.locator('//div[@role="alert"]//div[contains(text(), "Email sent successfully")]');
        await toast.waitFor({state: 'visible', timeout: 20000});
        const txt = (await toast.textContent())?.trim();
        return txt && txt.toLowerCase().includes('email sent successfully');
    }

    async checkEmailUpdateToastTextForRoundTrips() {
        const toastMessage = this.page.locator('.Toastify__toast-body div:nth-of-type(2)');
        await toastMessage.waitFor({state: 'visible', timeout: 20000});
        const txt = (await toastMessage.textContent())?.trim();
        return txt && txt.toLowerCase().includes('price updated') && txt.toLowerCase().includes('email sent successfully');
    }

    async clickCrossIconOfLeadsDetailPopup() {
        const btn = this.page.locator(`xpath=${this.crossIconOfLeadsDetailPopupXPath}`);
        await btn.click();
    }
}
module.exports = SendQuotes;
