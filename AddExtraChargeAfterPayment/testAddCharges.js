const AddChargesAfterPayment = require('./pathsOfAddCharges');

class AddChargesOfLeads {
    constructor(page) {
        this.page = page;
        this.addCharges = new AddChargesAfterPayment(page);
    }

    async test_01_ExtraChargesOfPaidLeadForOneWayTripsAdditionFailed() {
        await this.addCharges.clickViewDetailsBtn();
        await this.addCharges.clickAddChargeBtn();
        await this.addCharges.clickAddAndSendInvoiceBtn();
        await this.addCharges.clickCrossIconOfAddAdditionalChargesModal();
    }


    async test_03_ExtraChargesOfPaidLeadForRoundWayTripsAdditionFailed() {
        await this.addCharges.clickViewDetails2Btn();
        await this.addCharges.clickAddChargeBtn();
        await this.addCharges.clickAddAndSendInvoiceBtn();
        await this.addCharges.clickCrossIconOfAddAdditionalChargesModal();
    }

    async test_02_ExtraChargesOfPaidLeadForOneWayTripsAddedSuccessfully() {
        // await this.addCharges.clickViewDetailsBtn();
        await this.addCharges.clickAddChargeBtn();
        await this.addCharges.enterDescriptionOfExtraChargesForOneWayTripsInput("Extra Charges");
        await this.addCharges.enterAmountOfExtraChargesForOneWayTripsInput("20");
        await this.addCharges.clickAddAndSendInvoiceBtn();
        const isChargeAdded = await this.addCharges.checkAddChargesToastText();
        await this.page.waitForTimeout(2000);
        await this.addCharges.verifyBalancedOwedAmountForOneWayTrips();
        await this.addCharges.clickCrossIconOfLeadsDetailPopup();
        return isChargeAdded;
    }

    async test_04_ExtraChargesOfPaidLeadForRoundWayTripsAddedSuccessfully() {
        // await this.addCharges.clickViewDetailsBtn();
        await this.addCharges.clickAddChargeBtn();
        await this.addCharges.enterDescriptionOfExtraChargesForOneWayTripsInput("Extra Charges");
        await this.addCharges.enterAmountOfExtraChargesForRoundTripsMainInput("20");
        await this.addCharges.clickAddAndSendInvoiceBtn();
        await this.addCharges.checkAddChargesToastText();
        await this.addCharges.verifyBalancedOwedMainValue();
        await this.addCharges.clickAddChargeBtn();
        await this.addCharges.clickReturnTabBtn();
        await this.addCharges.enterDescriptionOfExtraChargesForOneWayTripsInput("Extra Charges");
        await this.addCharges.enterAmountOfExtraChargesForRoundTripsReturnInput("20");
        await this.addCharges.clickAddAndSendInvoiceBtn();
        const isChargeAdded = await this.addCharges.checkAddChargesToastText();
        await this.page.waitForTimeout(6000);
        await this.addCharges.verifyBalancedOwedReturnValue();
        await this.addCharges.clickCrossIconOfLeadsDetailPopup();
        await this.page.waitForTimeout(2000);
        return isChargeAdded;
    }


}

module.exports = AddChargesOfLeads;

