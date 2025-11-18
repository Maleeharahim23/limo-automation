class SendQuotes {
    constructor(page) {
        this.page = page;
        this.mainPriceID = 'price'
        this.enteredMainPrice = 0
        this.clientNoteInputID = "note"
        this.noteToggleBtn = "/html/body/main/div[1]/div/div/div[4]/div/div[3]/label/div"
        this.password = "/html/body/main/div[2]/div/div/form/div[2]/div/input"
        this.viewDetailsBtn = "/html/body/main/div[1]/div/div/div[2]/div[4]/table/tbody/tr"
        this.viewDetailsBtn2 = "/html/body/main/div[1]/div/div/div[2]/div[4]/table/tbody/tr[1]"
        this.sendQuoteManuallyBtn = "/html/body/main/div[1]/div/div/div[3]/div/div[2]/div[2]/button"
        this.changePriceBtn = "/html/body/main/div[1]/div/div/div[3]/div/div[3]/div[2]/div/div[3]/div[3]/div[1]/div/button"
        this.addAdditionalChargesBtn = "/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/div/form/button"
        this.paymentInput = "/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/div/form/div[2]/div[2]/input"
        this.additionalCharges1AmountInput = 0
        this.paymentInput2 = "/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/div/form/div[3]/div[2]/input"
        this.additionalCharges2AmountInput = 0
        this.paymentLabelInput = "/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/div/form/div[2]/input"
        this.paymentLabelInput2 = "/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/div/form/div[3]/input"
        this.nextButtonAfterEnteringPriceDetails = "/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/div/form/div[3]/button"
        this.nextButtonAfterEnteringPriceDetails2 = "/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[2]/div/form/div[4]/button"
        this.led2tabButton = "/html/body/main/div[1]/div/div/div[4]/div/div[2]/div[1]/button[2]"
        this.searchLeadInputXPath = "/html/body/main/div[1]/div/div/div[2]/div[2]/div/div[1]/div[1]/input"
        this.submitQuoteBtnXPath = "/html/body/main/div[1]/div/div/div[4]/div/button"
        this.crossIconOfLeadsDetailPopupXPath = "/html/body/main/div[1]/div/div/div[3]/div/div[1]"
        this.statusBtnXPath = "/html/body/main/div[1]/div/div/div[2]/div[4]/table/tbody/tr/td[3]/button"
        this.statusBtn2XPath = "/html/body/main/div[1]/div/div/div[2]/div[4]/table/tbody/tr[1]/td[3]/button"
        this.selectPaymentMethodDropdownXPath = "/html/body/main/div[1]/div/div/div[3]/div/form/div[1]/select"
        this.saveBtnOfPaymentMethodXPath = "/html/body/main/div[1]/div/div/div[3]/div/form/div[3]/button[2]"
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

    async clickViewDetailsBtn2() {
        await this.page.locator(`xpath=${this.viewDetailsBtn2}`).waitFor({state: 'visible', timeout: 20000});
        await this.page.locator(`xpath=${this.viewDetailsBtn2}`).click();
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
        this.enteredMainPrice = parseFloat(mainPrice);
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
        this.additionalCharges1AmountInput = parseFloat(payment);
    }

    async enterPayment2(payment2) {
        await this.page.locator(`xpath=${this.paymentInput2}`).fill(payment2);
        await this.page.waitForTimeout(300);
        this.additionalCharges2AmountInput = parseFloat(payment2);
        console.log(this.additionalCharges1AmountInput)
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

    async checkLeadMarkedPricedToastText() {
        const toast = this.page.locator(`xpath=//div[contains(text(), 'Payment Method updated successfully!')]`);
        await toast.waitFor({state: 'visible', timeout: 20000});
        const txt = await toast.textContent();
        return txt && txt.includes('Payment Method updated successfully!');
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

    async clickStatusBtn() {
        const btn = this.page.locator(`xpath=${this.statusBtnXPath}`);
        await btn.click();
    }

    async clickStatusBtn2() {
        const btn = this.page.locator(`xpath=${this.statusBtn2XPath}`);
        await btn.click();
    }

    async selectDropdownOption(dropdownLabel, optionText) {
        const dropdownButton = this.page.locator(`//*[normalize-space(text())='${dropdownLabel}']`);
        await dropdownButton.waitFor({ state: 'visible', timeout: 20000 });
        await dropdownButton.click();
        await this.page.waitForTimeout(1000);
        const optionLocator = this.page.locator(`//*[contains(normalize-space(text()), '${optionText}')]`);
        await this.page.waitForTimeout(500);
    }

    async selectPaymentMethodDropdownOption(serviceTypeIndex) {
        const sel = this.page.locator(`xpath=${this.selectPaymentMethodDropdownXPath}`);
        await sel.waitFor({state: 'visible'});
        await sel.selectOption({index: Number(serviceTypeIndex)});
    }

    async clickSaveBtnOfPaymentMethod() {
        const btn = this.page.locator(`xpath=${this.saveBtnOfPaymentMethodXPath}`);
        await btn.click();
    }

    async calculateGrandTotalAmountForOneWayTrips() {
        // For Main Price
        const mainPriceDiv = this.page.locator('div', { hasText: /^Main Price:/ });
        const discountedSpan = mainPriceDiv.locator('span').nth(1);
        await discountedSpan.waitFor({ state: 'visible', timeout: 5000 });
        const discountedPriceText = (await discountedSpan.textContent())?.trim();
        const discountedMainPrice = parseFloat(discountedPriceText.replace(/[^0-9.]/g, ''));
        console.log("Discounted Main Price:", discountedMainPrice);

        // For Discount
        const discountDiv = this.page.locator('div', { hasText: /^Discount:/ });
        await discountDiv.waitFor({ state: 'visible', timeout: 5000 });
        const discountText = (await discountDiv.textContent())?.trim();
        const discountValue = parseFloat(discountText.replace(/[^0-9.]/g, ''));
        console.log("Discount Value:", discountValue);

        // For GST
        const quoteModal = this.page.locator('div.space-y-1.text-sm');
        const gstText = await quoteModal.locator('div:has-text("GST:")').textContent();
        const gstValue = parseFloat(gstText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("GST Value:", gstValue);

        // For Gratuity
        const quoteModal2 = this.page.locator('div.space-y-1.text-sm');
        const gratuityText = await quoteModal2.locator('div:has-text("Gratuity:")').textContent();
        const gratuityValue = parseFloat(gratuityText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("Gratuity Value:", gratuityValue);

        // For Grand Total
        const grandTotalText = await quoteModal.locator('div:has-text("Grand Total")').textContent();
        const grandTotalUI = parseFloat(grandTotalText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("UI Grand Total:", grandTotalUI);

        // Additional Charges (from class property)
        console.log("Additional Charges 1:", this.additionalCharges1AmountInput);

        // Calculate Grand Total
        const calculatedGrandTotal = discountedMainPrice + this.additionalCharges1AmountInput + gstValue + gratuityValue;
        console.log("Calculated Grand Total:", calculatedGrandTotal);

        if (Math.abs(calculatedGrandTotal - grandTotalUI) < 0.01) {
            console.log("Grand Total is correct!");
        } else {
            console.log("Grand Total mismatch!");
        }

    }

    async calculateGrandTotalAmount2ForOneWayTrips() {
        // For Main Price
        const mainPriceDiv = this.page.locator('div', { hasText: /^Main Price:/ });
        const discountedSpan = mainPriceDiv.locator('span').nth(1);
        await discountedSpan.waitFor({ state: 'visible', timeout: 5000 });
        const discountedPriceText = (await discountedSpan.textContent())?.trim();
        const discountedMainPrice = parseFloat(discountedPriceText.replace(/[^0-9.]/g, ''));
        console.log("Discounted Main Price:", discountedMainPrice);

        // For Discount
        const discountDiv = this.page.locator('div', { hasText: /^Discount:/ });
        await discountDiv.waitFor({ state: 'visible', timeout: 5000 });
        const discountText = (await discountDiv.textContent())?.trim();
        const discountValue = parseFloat(discountText.replace(/[^0-9.]/g, ''));
        console.log("Discount Value:", discountValue);

        // For GST
        const quoteModal = this.page.locator('div.space-y-1.text-sm');
        const gstText = await quoteModal.locator('div:has-text("GST:")').textContent();
        const gstValue = parseFloat(gstText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("GST Value:", gstValue);

        // For Gratuity
        const quoteModal2 = this.page.locator('div.space-y-1.text-sm');
        const gratuityText = await quoteModal2.locator('div:has-text("Gratuity:")').textContent();
        const gratuityValue = parseFloat(gratuityText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("Gratuity Value:", gratuityValue);

        // For Grand Total
        const grandTotalText = await quoteModal.locator('div:has-text("Grand Total")').textContent();
        const grandTotalUI = parseFloat(grandTotalText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("UI Grand Total:", grandTotalUI);

        // Additional Charges (from class property)
        console.log("Additional Charges 1:", this.additionalCharges1AmountInput);
        console.log("Additional Charges 2:", this.additionalCharges2AmountInput);

        // Calculate Grand Total
        const calculatedGrandTotal = discountedMainPrice + this.additionalCharges1AmountInput + this.additionalCharges2AmountInput + gstValue + gratuityValue;
        console.log("Calculated Grand Total:", calculatedGrandTotal);

        if (Math.abs(calculatedGrandTotal - grandTotalUI) < 0.01) {
            console.log("Grand Total is correct!");
        } else {
            console.log("Grand Total mismatch!");
        }

    }

    async calculateGrandTotalAmountForRoundTrips() {
        // For Main Price
        const mainPriceDiv = this.page.locator('div', { hasText: /^Main Price:/ });
        const discountedSpan = mainPriceDiv.locator('span').nth(1);
        await discountedSpan.waitFor({ state: 'visible', timeout: 5000 });
        const discountedPriceText = (await discountedSpan.textContent())?.trim();
        const discountedMainPrice = parseFloat(discountedPriceText.replace(/[^0-9.]/g, ''));
        console.log("Discounted Main Price:", discountedMainPrice);

        // For Discount
        const discountDiv = this.page.locator('div', { hasText: /^Discount:/ });
        await discountDiv.waitFor({ state: 'visible', timeout: 5000 });
        const discountText = (await discountDiv.textContent())?.trim();
        const discountValue = parseFloat(discountText.replace(/[^0-9.]/g, ''));
        console.log("Discount Value:", discountValue);

        // For GST
        const quoteModal = this.page.locator('div.space-y-1.text-sm');
        const gstText = await quoteModal.locator('div:has-text("GST:")').textContent();
        const gstValue = parseFloat(gstText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("GST Value:", gstValue);

        // For Gratuity
        const quoteModal2 = this.page.locator('div.space-y-1.text-sm');
        const gratuityText = await quoteModal2.locator('div:has-text("Gratuity:")').textContent();
        const gratuityValue = parseFloat(gratuityText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("Gratuity Value:", gratuityValue);

        // For Grand Total
        const grandTotalText = await quoteModal.locator('div:has-text("Grand Total")').textContent();
        const grandTotalUI = parseFloat(grandTotalText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("UI Grand Total:", grandTotalUI);

        // Additional Charges (from class property)
        console.log("Additional Charges 1:", this.additionalCharges1AmountInput);

        // Calculate Grand Total
        const calculatedGrandTotal = discountedMainPrice + this.additionalCharges1AmountInput + gstValue + gratuityValue;
        console.log("Calculated Grand Total:", calculatedGrandTotal);

        if (Math.abs(calculatedGrandTotal - grandTotalUI) < 0.01) {
            console.log("Grand Total is correct!");
        } else {
            console.log("Grand Total mismatch!");
        }

    }

    async calculateGrandTotalAmount2ForRoundTrips() {
        // For Main Price
        const mainPriceDiv = this.page.locator('div', { hasText: /^Main Price:/ });
        const discountedSpan = mainPriceDiv.locator('span').nth(1);
        await discountedSpan.waitFor({ state: 'visible', timeout: 5000 });
        const discountedPriceText = (await discountedSpan.textContent())?.trim();
        const discountedMainPrice = parseFloat(discountedPriceText.replace(/[^0-9.]/g, ''));
        console.log("Discounted Main Price:", discountedMainPrice);

        // For Discount
        const discountDiv = this.page.locator('div', { hasText: /^Discount:/ });
        await discountDiv.waitFor({ state: 'visible', timeout: 5000 });
        const discountText = (await discountDiv.textContent())?.trim();
        const discountValue = parseFloat(discountText.replace(/[^0-9.]/g, ''));
        console.log("Discount Value:", discountValue);

        // For GST
        const quoteModal = this.page.locator('div.space-y-1.text-sm');
        const gstText = await quoteModal.locator('div:has-text("GST:")').textContent();
        const gstValue = parseFloat(gstText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("GST Value:", gstValue);

        // For Gratuity
        const quoteModal2 = this.page.locator('div.space-y-1.text-sm');
        const gratuityText = await quoteModal2.locator('div:has-text("Gratuity:")').textContent();
        const gratuityValue = parseFloat(gratuityText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("Gratuity Value:", gratuityValue);

        // For Grand Total
        const grandTotalText = await quoteModal.locator('div:has-text("Grand Total")').textContent();
        const grandTotalUI = parseFloat(grandTotalText.match(/[\d,.]+/)[0].replace(',', ''));
        console.log("UI Grand Total:", grandTotalUI);

        // Additional Charges (from class property)
        console.log("Additional Charges 1:", this.additionalCharges1AmountInput);
        console.log("Additional Charges 2:", this.additionalCharges2AmountInput);

        // Calculate Grand Total
        const calculatedGrandTotal = discountedMainPrice + this.additionalCharges1AmountInput + this.additionalCharges2AmountInput + gstValue + gratuityValue;
        console.log("Calculated Grand Total:", calculatedGrandTotal);

        if (Math.abs(calculatedGrandTotal - grandTotalUI) < 0.01) {
            console.log("Grand Total is correct!");
        } else {
            console.log("Grand Total mismatch!");
        }

    }


}

module.exports = SendQuotes;

