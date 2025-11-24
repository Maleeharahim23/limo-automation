import { expect } from '@playwright/test';

class AddChargesAfterPayment {
    constructor(page) {
        this.page = page;
        this.viewDetailsBtn = "/html/body/main/div[1]/div/div/div[2]/div[4]/table/tbody/tr/td[1]"
        this.viewDetails2Btn = "/html/body/main/div[1]/div/div/div[2]/div[4]/table/tbody/tr[1]"
        this.addChargeBtnXPath = '/html/body/main/div[1]/div/div/div[3]/div/div[3]/div[2]/div/div[3]/div[3]/div[1]/div/button[1]'
        this.returnTabBtnXPath = '/html/body/div[2]/div/form/div[1]/div[1]/div/button[2]'
        this.descriptionOfExtraChargesForOneWayTripsInputID = 'description'
        this.amountOfExtraChargesForOneWayTripsInputID = 'amount'
        this.partialRefundAmountInputForLeg1ID = 'leg1Amount'
        this.partialRefundAmountInputForLeg2ID = 'leg2Amount'
        this.addAndSendInvoiceBtnXPath = '/html/body/div[2]/div/form/div[2]/button[2]'
        this.crossIconOfAddAdditionalChargesModalXPath = '/html/body/div[2]/div/div/div/button'
        this.saveBtnXPath = '/html/body/div[3]/div/div[3]/div/button[2]'
        this.cancelBtnXPath = '/html/body/div[3]/div[4]/button[1]'
        this.crossIconOfLeadsDetailPopupXPath = "/html/body/main/div[1]/div/div/div[3]/div/div[1]"
        this.extraChargesValue = null;
        this.extraChargesMainValue = null;
        this.extraChargesReturnValue = null;
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

    async clickAddChargeBtn() {
        const btn1 = this.page.locator(`xpath=${this.addChargeBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickReturnTabBtn() {
        const btn1 = this.page.locator(`xpath=${this.returnTabBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async enterDescriptionOfExtraChargesForOneWayTripsInput(description) {
        const input = this.page.locator(`id=${this.descriptionOfExtraChargesForOneWayTripsInputID}`);
        await input.waitFor({state: 'visible'});
        await input.fill(String(description));
    }

    async enterAmountOfExtraChargesForOneWayTripsInput(amount) {
        const input = this.page.locator(`id=${this.amountOfExtraChargesForOneWayTripsInputID}`);
        await input.waitFor({ state: 'visible' });
        await input.fill(String(amount));
        this.extraChargesValue = String(amount);
    }

    async verifyBalancedOwedAmountForOneWayTrips() {
        const label = this.page.getByText("Balanced Owed", { exact: true });
        const amountLocator = label.locator('xpath=../span[2]');
        await amountLocator.waitFor({ state: 'visible' });
        const displayedText = await amountLocator.innerText();
        const displayedNumber = displayedText.replace(/[^\d.]/g, "");
        expect(Number(displayedNumber)).toBe(Number(this.extraChargesValue));
        console.log(`Balanced Owed verification passed → ${displayedNumber} == ${this.extraChargesValue}`
        );
    }

    async enterAmountOfExtraChargesForRoundTripsMainInput(amount) {
        const input = this.page.locator(`id=${this.amountOfExtraChargesForOneWayTripsInputID}`);
        await input.waitFor({ state: 'visible' });
        await input.fill(String(amount));
        this.extraChargesMainValue = String(amount);
    }

    async enterAmountOfExtraChargesForRoundTripsReturnInput(amount) {
        const input = this.page.locator(`id=${this.amountOfExtraChargesForOneWayTripsInputID}`);
        await input.waitFor({ state: 'visible' });
        await input.fill(String(amount));
        this.extraChargesReturnValue = String(amount);
    }

    // async verifyBalancedOwedAmountForRoundTrips() {
    //     // ---- 1️⃣ Locate the row containing "Balanced Owed" ----
    //     const rowLocator = this.page.locator('.balancedOwed .table-custom-row', {
    //         hasText: 'Balanced Owed',
    //     });
    //
    //     await rowLocator.waitFor({ state: 'visible' });
    //
    //     // ---- 2️⃣ Get all spans in that row ----
    //     const spans = rowLocator.locator('span');
    //
    //     // Wait for both numeric spans to be visible
    //     const mainSpan = spans.nth(1);
    //     const returnSpan = spans.nth(2);
    //
    //     await mainSpan.waitFor({ state: 'visible' });
    //     await returnSpan.waitFor({ state: 'visible' });
    //
    //     // ---- 3️⃣ Extract numeric values ----
    //     const mainText = await mainSpan.innerText();   // e.g. "€ 20.00"
    //     const returnText = await returnSpan.innerText(); // e.g. "€ 40.00"
    //
    //     const mainNumber = Number(mainText.replace(/[^\d.]/g, ""));
    //     const returnNumber = Number(returnText.replace(/[^\d.]/g, ""));
    //
    //     // ---- 4️⃣ Compare with stored class values ----
    //     expect(mainNumber).toBe(Number(this.extraChargesMainValue));
    //     expect(returnNumber).toBe(Number(this.extraChargesReturnValue));
    //
    //     console.log(
    //         `Balanced Owed verification passed → Main: ${mainNumber} == ${this.extraChargesMainValue}, Return: ${returnNumber} == ${this.extraChargesReturnValue}`
    //     );
    // }

    // Method to verify the Main Value
    async verifyBalancedOwedMainValue() {
        const rowLocator = this.page.locator('.balancedOwed .table-custom-row', {
            hasText: 'Balanced Owed',
        });
        await rowLocator.waitFor({ state: 'visible' });

        const mainSpan = rowLocator.locator('span').nth(1);
        await mainSpan.waitFor({ state: 'visible' });

        const mainText = await mainSpan.innerText();
        const mainNumber = Number(mainText.replace(/[^\d.]/g, ""));

        expect(mainNumber).toBe(Number(this.extraChargesMainValue));
        console.log(
            `Balanced Owed Main verification passed → ${mainNumber} == ${this.extraChargesMainValue}`
        );
    }

    // Method to verify the Return Value
    async verifyBalancedOwedReturnValue() {
        const rowLocator = this.page.locator('.balancedOwed .table-custom-row', {
            hasText: 'Balanced Owed',
        });

        // Wait for the row to appear
        await rowLocator.waitFor({ state: 'visible' });

        const returnSpan = rowLocator.locator('span').nth(2);

        // Wait until the innerText contains a digit
        await returnSpan.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(500); // small delay to allow text to render

        let returnText = await returnSpan.textContent();
        let attempts = 0;

        // Poll until the span has a numeric value or timeout
        while (!/\d/.test(returnText) && attempts < 10) {
            await this.page.waitForTimeout(200); // wait 200ms
            returnText = await returnSpan.textContent();
            attempts++;
        }

        const returnNumber = Number(returnText.replace(/[^\d.]/g, ""));

        expect(returnNumber).toBe(Number(this.extraChargesReturnValue));

        console.log(
            `Balanced Owed Return verification passed → ${returnNumber} == ${this.extraChargesReturnValue}`
        );
    }

    async clickAddAndSendInvoiceBtn() {
        const btn1 = this.page.locator(`xpath=${this.addAndSendInvoiceBtnXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async clickCrossIconOfAddAdditionalChargesModal() {
        const btn1 = this.page.locator(`xpath=${this.crossIconOfAddAdditionalChargesModalXPath}`);
        await btn1.waitFor({state: 'visible'});
        await btn1.click();
    }

    async checkAddChargesToastText() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'Additional charge added and invoice sent to customer!')]`);
        const txt = await toast.textContent();
        return txt && txt.includes('Additional charge added and invoice sent to customer!');
    }

    async clickCrossIconOfLeadsDetailPopup() {
        const btn = this.page.locator(`xpath=${this.crossIconOfLeadsDetailPopupXPath}`);
        await btn.click();
    }

}

module.exports = AddChargesAfterPayment;
