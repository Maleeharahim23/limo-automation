const DriverDispatchingPage = require('./pathsOfDispatch');

class DriverDispatch {
    constructor(page) {
        this.page = page;
        this.driverDispatch = new DriverDispatchingPage(page);
    }

    async test_01_DriverAssignedToOneWayTripLeadSuccessfully(order_id_text ) {
        // await this.driverDispatch.clickDispatchingBtn();
        // await this.driverDispatch.clickAllTabBtn();
        // await this.driverDispatch.waitAndEnterLeadOrderID(order_id_text);
        await this.driverDispatch.clickAssignDriverBtn();
        await this.driverDispatch.selectDropdownOption("Select Affiliate Company", 1);
        await this.driverDispatch.selectDropdownOption("Select Driver", 1);
        await this.driverDispatch.clickSaveBtn();
        const isAssigningSuccessful = await this.driverDispatch.checkDriverAssignedToastText();
        await this.page.waitForTimeout(2000);
        return isAssigningSuccessful;
    }

    async test_02_DriverAssigningFailedForOneWayTrip(order_id_text ) {
        await this.driverDispatch.clickDispatchingBtn();
        await this.driverDispatch.clickAllTabBtn();
        await this.driverDispatch.waitAndEnterLeadOrderID(order_id_text);
        await this.driverDispatch.clickAssignDriverBtn();
        await this.driverDispatch.clickSaveBtn();
        const isAssigningFailed = await this.driverDispatch.checkDriverAssignFailedMessage();
        await this.driverDispatch.clickCancelBtn();
        await this.page.waitForTimeout(2000);
        return isAssigningFailed;
    }

    async test_03_DriverAssignedToRoundWayTripLeadSuccessfully(order_id_text ) {
        // await this.driverDispatch.clickDispatchingBtn();
        // await this.driverDispatch.clickAllTabBtn();
        // await this.driverDispatch.waitAndEnterLeadOrderID(order_id_text);
        await this.driverDispatch.clickAssignDriver2Btn();
        await this.driverDispatch.selectDropdownOption("Select Affiliate Company", 1);
        await this.driverDispatch.selectDropdownOption("Select Driver", 1);
        await this.driverDispatch.clickSaveBtn();
        const isAssigningSuccessful = await this.driverDispatch.checkDriverAssignedToastText();
        await this.page.waitForTimeout(2000);
        return isAssigningSuccessful;
    }
    async test_04_DriverAssigningFailedForRoundTrips(order_id_text ) {
        await this.driverDispatch.clickDispatchingBtn();
        await this.driverDispatch.clickAllTabBtn();
        await this.driverDispatch.waitAndEnterLeadOrderID(order_id_text);
        await this.driverDispatch.clickAssignDriver2Btn();
        await this.driverDispatch.clickSaveBtn();
        const isAssigningFailed = await this.driverDispatch.checkDriverAssignFailedMessage();
        await this.driverDispatch.clickCancelBtn();
        await this.page.waitForTimeout(2000);
        return isAssigningFailed;
    }

}

module.exports = DriverDispatch;

