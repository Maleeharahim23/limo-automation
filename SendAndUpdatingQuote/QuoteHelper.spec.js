const SendQuotes = require('./pathsofSendingQuote');

class QuoteHelper {
    constructor(page) {
        this.page = page;
        this.sendQuote = new SendQuotes(page);
    }

    async searchLead(order_id_text = 2167) {
        await this.sendQuote.waitAndEnterLeadOrderID(order_id_text);
        await this.sendQuote.clickViewDetailsBtn();
    }

    async test_01_createQuoteForSingleTrips() {
        await this.sendQuote.clickSendQuoteManuallyBtn();
        await this.sendQuote.removeMainPrice();
        await this.sendQuote.enterMainPrice("10");
        await this.sendQuote.clickAdditionalChargesBtn();
        await this.sendQuote.enterPayment("10");
        await this.sendQuote.enterPaymentLabel("Payment Label");
        await this.sendQuote.clickNextButtonAfterEnteringPriceDetails();
        await this.sendQuote.clickNoteToggleBtn();
        await this.sendQuote.enterClientNoteInput("Note to Client");
        await this.sendQuote.clickSubmitButton();
        const isQuoteCreated = await this.sendQuote.checkEmailSentToastTextForSingleTrips();
        await this.page.waitForTimeout(2000);
        return isQuoteCreated;
    }

    async test_02_createQuoteForRoundTrips() {
        await this.sendQuote.clickSendQuoteManuallyBtn();
        await this.sendQuote.removeMainPrice();
        await this.sendQuote.enterMainPrice("100");
        await this.sendQuote.clickAdditionalChargesBtn();
        await this.sendQuote.enterPayment("10");
        await this.sendQuote.enterPaymentLabel("Payment Label 1");
        await this.sendQuote.clickNextButtonAfterEnteringPriceDetails();
        await this.sendQuote.clickLeg2TabBtn();
        await this.sendQuote.removeMainPrice();
        await this.sendQuote.enterMainPrice("200");
        await this.sendQuote.clickAdditionalChargesBtn();
        await this.sendQuote.enterPayment("20");
        await this.sendQuote.enterPaymentLabel("Payment Label 2");
        await this.sendQuote.clickNextButtonAfterEnteringPriceDetails();
        await this.sendQuote.clickNoteToggleBtn();
        await this.sendQuote.enterClientNoteInput("Note to Client");
        await this.sendQuote.clickSubmitButton();
        const isQuoteCreated = await this.sendQuote.checkEmailSentToastTextForRoundTrips();
        await this.page.waitForTimeout(2000);
        return isQuoteCreated;
    }

    async test_03_updateQuoteForSingleTrips() {
        await this.sendQuote.clickChangePriceBtn();
        await this.sendQuote.removeMainPrice();
        await this.sendQuote.enterMainPrice("200");
        await this.sendQuote.clickAdditionalChargesBtn();
        await this.sendQuote.enterPayment2("20");
        await this.sendQuote.enterPaymentLabel2("Payment Label 2");
        await this.sendQuote.clickNextButtonAfterEnteringPriceDetails2();
        await this.sendQuote.clickNoteToggleBtn();
        await this.sendQuote.enterClientNoteInput("Note to Client");
        await this.sendQuote.clickSubmitButton();
        const isQuoteCreated = await this.sendQuote.checkEmailUpdateToastTextForSingleTrips();
        await this.page.waitForTimeout(2000);
        return isQuoteCreated;
    }

    async test_04_markLeadAsPaid() {
        await this.sendQuote.clickCrossIconOfLeadsDetailPopup();
        // await this.sendQuote.removeMainPrice();
        // await this.sendQuote.enterMainPrice("200");
        // await this.sendQuote.clickAdditionalChargesBtn();
        // await this.sendQuote.enterPayment2("20");
        // await this.sendQuote.enterPaymentLabel2("Payment Label 2");
        // await this.sendQuote.clickNextButtonAfterEnteringPriceDetails2();
        // await this.sendQuote.clickNoteToggleBtn();
        // await this.sendQuote.enterClientNoteInput("Note to Client");
        // await this.sendQuote.clickSubmitButton();
        // const isQuoteCreated = await this.sendQuote.checkEmailUpdateToastTextForSingleTrips();
        // await this.page.waitForTimeout(2000);
        // return isQuoteCreated;
    }

    async test_05_updateQuoteForRoundTrips() {
        await this.sendQuote.clickChangePriceBtn();
        await this.sendQuote.removeMainPrice();
        await this.sendQuote.enterMainPrice("100");
        await this.sendQuote.clickAdditionalChargesBtn();
        await this.sendQuote.enterPayment2("10");
        await this.sendQuote.enterPaymentLabel2("Payment Label 3");
        await this.sendQuote.clickNextButtonAfterEnteringPriceDetails2();
        await this.sendQuote.clickLeg2TabBtn();
        await this.sendQuote.removeMainPrice();
        await this.sendQuote.enterMainPrice("300");
        await this.sendQuote.clickAdditionalChargesBtn();
        await this.sendQuote.enterPayment2("20");
        await this.sendQuote.enterPaymentLabel2("Payment Label 4");
        await this.sendQuote.clickNextButtonAfterEnteringPriceDetails2();
        await this.sendQuote.clickNoteToggleBtn();
        await this.sendQuote.enterClientNoteInput("Note to Client");
        await this.sendQuote.clickSubmitButton();
        const isQuoteCreated = await this.sendQuote.checkEmailUpdateToastTextForRoundTrips();
        await this.page.waitForTimeout(2000);
        return isQuoteCreated;
    }

}

module.exports = QuoteHelper;
