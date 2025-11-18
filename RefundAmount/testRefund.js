const RefundAmountOfLeadsPage = require('./pathsOfRefund');

class RefundLeads {
    constructor(page) {
        this.page = page;
        this.refundLead = new RefundAmountOfLeadsPage(page);
    }

    async test_01_AmountRefundForOneWayTripLeadSuccessfully() {
        // await this.refundLead.clickViewDetailsBtn();
        await this.refundLead.clickRefundBtn();
        await this.refundLead.clickPartialRefundRaioBtnID();
        await this.refundLead.enterPartialRefundAmountInput("20");
        await this.refundLead.clickProcessRefundBtn();
        const isRefundSuccessful = await this.refundLead.checkRefundToastText();
        await this.refundLead.clickCrossIconOfLeadsDetailPopup();
        await this.page.waitForTimeout(2000);
        return isRefundSuccessful;
    }

    async test_02_AmountRefundForOneWayTripLeadFailed() {
        await this.refundLead.clickViewDetailsBtn();
        await this.refundLead.clickRefundBtn();
        await this.refundLead.clickPartialRefundRaioBtnID();
        // await this.refundLead.enterPartialRefundAmountInput("20");
        await this.refundLead.clickProcessRefundBtn();
        const isRefundFailed = await this.refundLead.checkRefundFailedMessageText();
        await this.refundLead.clickCancelBtn();
        await this.page.waitForTimeout(2000);
        return isRefundFailed;
    }

    async test_03_AmountRefundForRoundTripLeadSuccessfully() {
        // await this.refundLead.clickViewDetailsBtn();
        await this.refundLead.clickRefundBtn();
        await this.refundLead.clickPartialRefundRaioBtnID();
        await this.refundLead.clickPartialRefundRaioBtnForLeg1ID();
        await this.refundLead.enterPartialRefundAmountForLeg1Input("10");
        await this.refundLead.clickPartialRefundRaioBtnForLeg2ID();
        await this.refundLead.enterPartialRefundAmountForLeg2Input("10");
        await this.refundLead.clickProcessRefundBtn();
        const isRefundSuccessful = await this.refundLead.checkRefundToastText();
        await this.refundLead.clickCrossIconOfLeadsDetailPopup();
        await this.page.waitForTimeout(2000);
        return isRefundSuccessful;
    }

    async test_04_AmountRefundForRoundTripLeadFailed() {
        await this.refundLead.clickViewDetails2Btn();
        await this.refundLead.clickRefundBtn();
        await this.refundLead.clickPartialRefundRaioBtnID();
        await this.refundLead.clickPartialRefundRaioBtnForLeg1ID();
        await this.refundLead.clickPartialRefundRaioBtnForLeg2ID();
        await this.refundLead.clickProcessRefundBtn();
        const isRefundFailedForLeg1 = await this.refundLead.checkRefundFailedMessageTextForLeg1();
        const isRefundFailedForLeg2 = await this.refundLead.checkRefundFailedMessageTextForLeg2();
        await this.refundLead.clickCancelBtn();
        await this.page.waitForTimeout(2000);
        return { isRefundFailedForLeg1, isRefundFailedForLeg2 };
    }


}

module.exports = RefundLeads;

