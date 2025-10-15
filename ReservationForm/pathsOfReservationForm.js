// const {expect} = require('@playwright/test');
//
// class ReservationFormPage {
//     constructor(page) {
//         this.page = page;
//         this.iframeID = "formFrame"
//         this.pickupCityID = "pickupCity"
//         this.carID = "67468d86820bc06903f23627"
//         this.pickUpDateName = "pickupDate"
//         this.pickUpTimeID = "pickupTime"
//         this.returnTimeID = "returnTime"
//         this.airlineID = "airlineName"
//         this.dropOffAirlineName = "dropoffAirline"
//         this.returnAirlineName = "returnAirline"
//         this.numberOFPassengersID = "numberOfPassengers"
//         this.passengerNamesID = "passengerNames"
//         this.lugageID = "lugage"
//         this.nameID = "name"
//         this.emailID = "email"
//         this.phoneNumberName = "phone"
//         this.additionalNotesID = "additionalNotes"
//         this.airlineDeparturetimeID = "airlineDepartureTime"
//         this.departuretimeID = "departureTime"
//         this.dropOffCityID = "dropoffCity"
//         this.flightNumberID = "flightNumber"
//         this.returnFlightNumberID = "returnFlightNumber"
//         this.airlineArrivalTimeID = "airlineArrivalTime"
//         this.dropOffDepartureTimeID = "dropOffDepartureTime"
//         this.consentSmsCheckboxID = "consent-sms"
//         this.pickupStateXPath = "/html/body/main/div[2]/div[2]/form/div/div[2]/div[1]/div[2]/select"
//         this.dropOffAirportDropdownXPath = "/html/body/main/div[2]/div[2]/form/div/div[2]/div[2]/select"
//         this.dropOffAirportDropdownXPath2 = "/html/body/main/div[2]/div[2]/form/div/div[3]/div[2]/select"
//         this.returnPickupAirport = "/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[4]/select"
//         this.nextBtn1 = "/html/body/main/div[2]/div[2]/form/button"
//         this.returnDateXPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[1]/div[1]/div/div[1]/div/input"
//         this.returnDateXPath2 = "/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[1]/div[1]/div/div[1]/div/input"
//         this.serviceTypeDropdownXPath = "/html/body/main/div[2]/div[2]/form/div/div[1]/select"
//         this.pickUpAirportDropdownXPath = "/html/body/main/div[2]/div[2]/form/div/div[3]/div[1]/select"
//         this.pickUpAirportDropdown2XPath = "/html/body/main/div[2]/div[2]/form/div/div[2]/div[1]/select"
//         this.pickUpAddressXPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[2]/div/div/div/input"
//         this.stopBtn1XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[4]/div[2]/div/button"
//         this.stopAddress1XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[4]/div[2]/div[1]/div[2]/div/div/div/input"
//         this.stopBtn2XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[7]/div[2]/div/button"
//         this.stopAddress2XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[7]/div[2]/div[1]/div[2]/div/div/div/input"
//         this.stopBtn3XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[5]/div[2]/div[2]/div/button"
//         this.stopAddress3XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[5]/div[2]/div[2]/div[1]/div[2]/div/div/div/input"
//         this.stopBtn4XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[3]/div[2]/div/button"
//         this.stopAddress4XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[3]/div[2]/div[1]/div[2]/div/div/div/input"
//         this.stopBtn5XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[6]/div[2]/div[2]/div/button"
//         this.stopAddress5XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[6]/div[2]/div[2]/div[1]/div[2]/div/div/div/input"
//         this.stopBtn6XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[4]/div[2]/div[2]/div/button"
//         this.stopAddress6XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[4]/div[2]/div[2]/div[1]/div[2]/div/div/div/input"
//         this.useSameStopsForLeg2CheckBoxID = "useSameStopsForLeg2"
//         this.returnPickUpAddress = "/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[2]/div/div/div/input"
//         this.returnPickUpAddress2 = "/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[2]/div/div/div/input"
//         this.dropOffAddress1XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[5]/div/div/div/input"
//         // this.dropOffAddress2XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[4]/div/div/div/input"
//         this.dropOffAddress2XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[5]/div/div/div/input"
//         this.dropOffAddress3XPath = "/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[1]/div/div/input"
//         this.returnDropOffAirport = "/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[3]/select"
//         this.returnDropOffAddress2 = "/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[3]/div/div/div/input"
//         this.legDropdownForRoundTripXPath = "//*[@id='myForm']/div[2]/form/div/div[2]/select"
//         this.nextBtn2 = "/html/body/main/div[2]/div[2]/form/div[2]/button[2]"
//         this.getQuoteBtn1XPath = "/html/body/main/div[2]/div[2]/form/div/div[7]/div/button"
//         this.dropOffStateXPath = "/html/body/main/div[2]/div[2]/form/div/div[2]/div[2]/div[2]/select"
//         this.getQuoteBtn2XPath = "/html/body/main/div[2]/div[2]/form/div/div[6]/div/button"
//         this.getQuoteBtn3XPath = "/html/body/main/div[2]/div[2]/form/div/div[8]/div/button"
//         this.getQuoteBtn4XPath = "/html/body/main/div[2]/div[2]/form/div/div[8]/div/button"
//         this.getQuoteBtn5XPath = "/html/body/main/div[2]/div[2]/form/div/div[6]/div/button"
//         this.tripDurationXPath = "/html/body/main/div[2]/div[2]/form/div/div[2]/select"
//     }
//
//     async switchToReservationIframe() {
//         await this.page.waitForSelector(`iframe#${this.iframeID}`, {timeout: 10000});
//         this.frame = this.page.frameLocator(`iframe#${this.iframeID}`);
//         await this.page.waitForTimeout(300);
//     }
//
//     async selectServiceType(serviceTypeIndex) {
//         const sel = this.frame.locator(`xpath=${this.serviceTypeDropdownXPath}`);
//         await sel.waitFor({state: 'visible'});
//         await sel.selectOption({index: Number(serviceTypeIndex)});
//     }
//
//     async selectTripDuration(tripDurationIndex) {
//         const sel = this.frame.locator(`xpath=${this.tripDurationXPath}`);
//         await sel.waitFor({state: 'visible'});
//         await sel.selectOption({index: Number(tripDurationIndex)});
//     }
//
//     async enterPickupCity(inputPickupCity) {
//         const el = this.frame.locator(`#${this.pickupCityID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(inputPickupCity);
//     }
//
//     async enterDropOffCity(inputDropOffCity) {
//         const el = this.frame.locator(`#${this.dropOffCityID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(inputDropOffCity);
//     }
//
//     async enterFlightNumber(inputFlightNumber) {
//         const el = this.frame.locator(`#${this.flightNumberID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(inputFlightNumber);
//     }
//
//     async enterReturnFlightNumber(returnFlightNumberInput) {
//         const el = this.frame.locator(`#${this.returnFlightNumberID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(returnFlightNumberInput);
//     }
//
//     async selectPickUpAirportDropdown(index) {
//         const dropdown = this.frame.locator(`xpath=${this.pickUpAirportDropdownXPath}`);
//         await dropdown.waitFor({state: 'visible'});
//         await dropdown.selectOption({index});
//         await this.page.waitForTimeout(1000);
//     }
//
//     async selectPickUpAirportDropdown2(index) {
//         const dropdown = this.frame.locator(`xpath=${this.pickUpAirportDropdown2XPath}`);
//         await dropdown.waitFor({state: 'visible'});
//         await dropdown.selectOption({index});
//         await this.page.waitForTimeout(1000);
//     }
//
//     async selectReturnPickupAirport(index) {
//         const dropdown = this.frame.locator(`xpath=${this.returnPickupAirport}`);
//         await dropdown.waitFor({state: 'visible'});
//         await dropdown.selectOption({index});
//         await this.page.waitForTimeout(1000);
//     }
//
//     async selectLeg1ForRoundTrip(index) {
//         const dropdown = this.frame.locator(`xpath=${this.legDropdownForRoundTripXPath}`);
//         if (index === 0) {
//             await dropdown.selectOption({index: 1});
//             await dropdown.selectOption({index: 0});
//         } else {
//             await dropdown.selectOption({index});
//         }
//         await this.page.waitForTimeout(1000);
//     }
//
//     async selectLeg2ForRoundTrip(index) {
//         const dropdown = this.frame.locator(`xpath=${this.legDropdownForRoundTripXPath}`);
//         if (index === 0) {
//             await dropdown.selectOption({index: 1});
//             await dropdown.selectOption({index: 0});
//         } else {
//             await dropdown.selectOption({index});
//         }
//         await this.page.waitForTimeout(1000);
//     }
//
//     async selectPickupState(index) {
//         const el = this.frame.locator(`xpath=${this.pickupStateXPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.selectOption({index: Number(index)});
//     }
//
//     async selectDropoffAirport() {
//         const el = this.frame.locator(`xpath=${this.dropOffAirportDropdownXPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.selectOption({index: 1});
//     }
//
//     async selectDropoffAirport2() {
//         const el = this.frame.locator(`xpath=${this.dropOffAirportDropdownXPath2}`);
//         await el.waitFor({state: 'visible'});
//         await el.selectOption({index: 1});
//     }
//
//     async selectReturnDropOffAirport() {
//         const el = this.frame.locator(`xpath=${this.returnDropOffAirport}`);
//         await el.waitFor({state: 'visible'});
//         await el.selectOption({index: 1});
//     }
//
//     async enterReturnDropOffAddress2(returnDropOffAddress2Input) {
//         const input = this.frame.locator(`xpath=${this.returnDropOffAddress2}`);
//         await input.fill(returnDropOffAddress2Input);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[3]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//         await this.page.waitForTimeout(1000);
//     }
//
//     async selectDropOffState(index) {
//         const el = this.frame.locator(`xpath=${this.dropOffStateXPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.selectOption({index: Number(index)});
//     }
//
//     async clickNextBtn1() {
//         const btn = this.frame.locator(`xpath=${this.nextBtn1}`);
//         await btn.waitFor({state: 'visible'});
//         await btn.click();
//     }
//
//     async selectCar() {
//         const el = this.frame.locator(`[id="${this.carID}"]`);
//         await el.waitFor({state: 'visible'});
//         await el.click();
//     }
//
//     async selectPickupDate() {
//         const dateInput = this.frame.locator(`[name="${this.pickUpDateName}"]`);
//         await dateInput.waitFor({state: 'visible', timeout: 10000});
//         await dateInput.click();
//
//         const calendarPopup = this.frame.locator('.react-datepicker');
//         await calendarPopup.waitFor({state: 'visible', timeout: 5000});
//
//         const today = new Date();
//         today.setDate(today.getDate() + 1);
//         const day = String(today.getDate()).padStart(2, '0');
//         const month = today.toLocaleString('en-US', {month: 'long'});
//         const weekday = today.toLocaleString('en-US', {weekday: 'long'});
//         const year = today.getFullYear();
//
//         const daySuffix = (d => {
//             if (d > 3 && d < 21) return 'th';
//             switch (d % 10) {
//                 case 1:
//                     return 'st';
//                 case 2:
//                     return 'nd';
//                 case 3:
//                     return 'rd';
//                 default:
//                     return 'th';
//             }
//         })(today.getDate());
//
//         const ariaLabel = `Choose ${weekday}, ${month} ${today.getDate()}${daySuffix}, ${year}`;
//
//         const dateCell = this.frame.locator(`div[aria-label="${ariaLabel}"]`);
//         await dateCell.waitFor({state: 'visible', timeout: 10000});
//         await dateCell.click();
//     }
//
//     async selectReturnDate(daysAhead = 10) {
//         const dateInput = this.frame.locator(`xpath=${this.returnDateXPath}`);
//         await dateInput.waitFor({state: 'visible', timeout: 10000});
//         await dateInput.click();
//
//         const calendarPopup = this.frame.locator('.react-datepicker');
//         await calendarPopup.waitFor({state: 'visible', timeout: 5000});
//
//         // Calculate target date
//         const today = new Date();
//         today.setDate(today.getDate() + daysAhead);
//
//         const targetDay = today.getDate();
//         const targetMonth = today.toLocaleString('en-US', {month: 'long'});
//         const targetWeekday = today.toLocaleString('en-US', {weekday: 'long'});
//         const targetYear = today.getFullYear();
//
//         const daySuffix = (d => {
//             if (d > 3 && d < 21) return 'th';
//             switch (d % 10) {
//                 case 1:
//                     return 'st';
//                 case 2:
//                     return 'nd';
//                 case 3:
//                     return 'rd';
//                 default:
//                     return 'th';
//             }
//         })(targetDay);
//
//         const ariaLabel = `Choose ${targetWeekday}, ${targetMonth} ${targetDay}${daySuffix}, ${targetYear}`;
//         let dateCell = this.frame.locator(`div[aria-label="${ariaLabel}"]`);
//
//         // If date not visible, click next month until found
//         const nextMonthBtn = this.frame.locator('.react-datepicker__navigation--next');
//         let attempts = 0;
//         while (!(await dateCell.isVisible()) && attempts < 2) {
//             await nextMonthBtn.click();
//             await this.page.waitForTimeout(500); // ✅ use page, not frame
//             attempts++;
//             dateCell = this.frame.locator(`div[aria-label="${ariaLabel}"]`);
//         }
//         await dateCell.waitFor({state: 'visible', timeout: 5000});
//         await dateCell.click();
//     }
//
//     async selectReturnDate2(daysAhead = 10) {
//         const dateInput = this.frame.locator(`xpath=${this.returnDateXPath2}`);
//         await dateInput.waitFor({state: 'visible', timeout: 10000});
//         await dateInput.click();
//
//         const calendarPopup = this.frame.locator('.react-datepicker');
//         await calendarPopup.waitFor({state: 'visible', timeout: 5000});
//
//         // Calculate target date
//         const today = new Date();
//         today.setDate(today.getDate() + daysAhead);
//
//         const targetDay = today.getDate();
//         const targetMonth = today.toLocaleString('en-US', {month: 'long'});
//         const targetWeekday = today.toLocaleString('en-US', {weekday: 'long'});
//         const targetYear = today.getFullYear();
//
//         const daySuffix = (d => {
//             if (d > 3 && d < 21) return 'th';
//             switch (d % 10) {
//                 case 1:
//                     return 'st';
//                 case 2:
//                     return 'nd';
//                 case 3:
//                     return 'rd';
//                 default:
//                     return 'th';
//             }
//         })(targetDay);
//
//         const ariaLabel = `Choose ${targetWeekday}, ${targetMonth} ${targetDay}${daySuffix}, ${targetYear}`;
//         let dateCell = this.frame.locator(`div[aria-label="${ariaLabel}"]`);
//
//         // If date not visible, click next month until found
//         const nextMonthBtn = this.frame.locator('.react-datepicker__navigation--next');
//         let attempts = 0;
//         while (!(await dateCell.isVisible()) && attempts < 2) {
//             await nextMonthBtn.click();
//             await this.page.waitForTimeout(500); // ✅ use page, not frame
//             attempts++;
//             dateCell = this.frame.locator(`div[aria-label="${ariaLabel}"]`);
//         }
//         await dateCell.waitFor({state: 'visible', timeout: 5000});
//         await dateCell.click();
//     }
//
//     async enterReturnTime(timeInput) {
//         const el = this.frame.locator(`#${this.returnTimeID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(timeInput);
//     }
//
//     async enterPickupAddress(addr) {
//         const el = this.frame.locator(`xpath=${this.pickUpAddressXPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(addr);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[2]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//     }
//
//     async enterDropOffAddress1(dropOffAddress1Input) {
//         const input = this.frame.locator(`xpath=${this.dropOffAddress1XPath}`);
//         await input.fill(dropOffAddress1Input);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[5]/div/div/div[2]/div/ul/li[2]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//         await this.page.waitForTimeout(1000);
//     }
//
//     async enterDropOffAddress2(dropOffAddress2Input) {
//         const input = this.frame.locator(`xpath=${this.dropOffAddress2XPath}`);
//         await input.fill(dropOffAddress2Input);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[5]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//         await this.page.waitForTimeout(1000);
//     }
//
//     async enterDropOffAddress3(dropOffAddress3Input) {
//         const input = this.frame.locator(`xpath=${this.dropOffAddress3XPath}`);
//         await input.fill(dropOffAddress3Input);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[1]/div/div[2]/div/ul/li[2]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//         await this.page.waitForTimeout(1000);
//     }
//
//     async enterReturnPickupAddress(returnPickupAddressInput) {
//         const input = this.frame.locator(`xpath=${this.returnPickUpAddress}`);
//         await input.fill(returnPickupAddressInput);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[2]/div/div/div[2]/div/ul/li[2]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//         await this.page.waitForTimeout(1000);
//     }
//
//     async enterReturnPickupAddress2(returnPickupAddress2Input) {
//         const input = this.frame.locator(`xpath=${this.returnPickUpAddress2}`);
//         await input.fill(returnPickupAddress2Input);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[2]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//         await this.page.waitForTimeout(1000);
//     }
//
//     async clickStopBtn1() {
//         const el = this.frame.locator(`xpath=${this.stopBtn1XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.click();
//     }
//
//     async enterStopAddress1(stopAddressInput) {
//         const el = this.frame.locator(`xpath=${this.stopAddress1XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(stopAddressInput);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[4]/div[2]/div[1]/div[2]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//     }
//
//     async clickStopBtn2() {
//         const el = this.frame.locator(`xpath=${this.stopBtn2XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.click();
//     }
//
//     async enterStopAddress2(stopAddressInput) {
//         const el = this.frame.locator(`xpath=${this.stopAddress2XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(stopAddressInput);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[2]/div[7]/div[2]/div[1]/div[2]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//     }
//
//     async clickUseSameStopsForLeg2CheckBox() {
//         const el = this.frame.locator(`#${this.useSameStopsForLeg2CheckBoxID}`);
//         await el.waitFor({state: 'visible'});
//         await el.click();
//     }
//
//     async clickStopBtn3() {
//         const el = this.frame.locator(`xpath=${this.stopBtn3XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.click();
//     }
//
//     async enterStopAddress3(stopAddressInput) {
//         const el = this.frame.locator(`xpath=${this.stopAddress3XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(stopAddressInput);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[5]/div[2]/div[2]/div[1]/div[2]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//     }
//
//     async clickStopBtn4() {
//         const el = this.frame.locator(`xpath=${this.stopBtn4XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.click();
//     }
//
//     async enterStopAddress4(stopAddressInput) {
//         const el = this.frame.locator(`xpath=${this.stopAddress4XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(stopAddressInput);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[3]/div[2]/div[1]/div[2]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//     }
//
//     async clickStopBtn5() {
//         const el = this.frame.locator(`xpath=${this.stopBtn5XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.click();
//     }
//
//     async enterStopAddress5(stopAddressInput) {
//         const el = this.frame.locator(`xpath=${this.stopAddress5XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(stopAddressInput);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[5]/div[6]/div[2]/div[2]/div[1]/div[2]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//     }
//
//     async clickStopBtn6() {
//         const el = this.frame.locator(`xpath=${this.stopBtn6XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.click();
//     }
//
//     async enterStopAddress6(stopAddressInput) {
//         const el = this.frame.locator(`xpath=${this.stopAddress6XPath}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(stopAddressInput);
//         const suggestion = this.frame.locator(`xpath=/html/body/main/div[2]/div[2]/form/div[1]/div[4]/div[4]/div[2]/div[2]/div[1]/div[2]/div/div/div[2]/div/ul/li[1]`);
//         await suggestion.waitFor({state: 'visible'});
//         await suggestion.click();
//     }
//
//     async enterAirlineName(airlineName) {
//         const el = this.frame.locator(`#${this.airlineID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(airlineName);
//     }
//
//     async enterDropOffAirlineName(dropOffAirlineNameInput) {
//         const el = this.frame.locator(`[name="${this.dropOffAirlineName}"]`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(dropOffAirlineNameInput);
//     }
//
//     async enterReturnAirlineName(returnAirlineNameInput) {
//         const el = this.frame.locator(`[name="${this.returnAirlineName}"]`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(returnAirlineNameInput);
//     }
//
//     async enterName(name) {
//         const el = this.frame.locator(`#${this.nameID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(name);
//     }
//
//     async enterEmail(email) {
//         const el = this.frame.locator(`#${this.emailID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(email);
//     }
//
//     async enterPhoneNumber(phoneNumber) {
//         const el = this.frame.locator(`[name="${this.phoneNumberName}"]`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(phoneNumber);
//     }
//
//     async clickNextBtn2() {
//         const btn = this.frame.locator(`xpath=${this.nextBtn2}`);
//         await btn.waitFor({state: 'visible'});
//         await btn.click();
//     }
//
//     async clickConsentSmsCheckbox() {
//         const btn = this.frame.locator(`#${this.consentSmsCheckboxID}`);
//         await btn.waitFor({state: 'visible'});
//         await btn.click();
//     }
//
//     async clickGetQuoteBtn1() {
//         const btn = this.frame.locator(`xpath=${this.getQuoteBtn1XPath}`);
//         await btn.waitFor({state: 'visible'});
//         await btn.click();
//     }
//
//     async clickGetQuoteBtn2() {
//         const btn = this.frame.locator(`xpath=${this.getQuoteBtn2XPath}`);
//         await btn.waitFor({state: 'visible'});
//         await btn.click();
//     }
//
//     async clickGetQuoteBtn3() {
//         const btn = this.frame.locator(`xpath=${this.getQuoteBtn3XPath}`);
//         await btn.waitFor({state: 'visible'});
//         await btn.click();
//     }
//
//     async clickGetQuoteBtn4() {
//         const btn = this.frame.locator(`xpath=${this.getQuoteBtn4XPath}`);
//         await btn.waitFor({state: 'visible'});
//         await btn.click();
//     }
//
//     async clickGetQuoteBtn5() {
//         const btn = this.frame.locator(`xpath=${this.getQuoteBtn5XPath}`);
//         await btn.waitFor({state: 'visible'});
//         await btn.click();
//     }
//
//     async enterNumberOfPassengers(numberOFPassengers) {
//         const el = this.frame.locator(`#${this.numberOFPassengersID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(numberOFPassengers);
//     }
//
//     async enterPassengerNames(passengerName) {
//         const el = this.frame.locator(`#${this.passengerNamesID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(passengerName);
//     }
//
//     async enterLugage(lugage) {
//         const el = this.frame.locator(`#${this.lugageID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(lugage);
//     }
//
//     async enterPakPhoneNumber(phoneNumberInput) {
//         const dropdown = this.frame.locator('.selected-flag');
//         await dropdown.click();
//         const searchInput = this.frame.locator(`xpath=//input[@type='tel' or @type='text']`);
//         await searchInput.waitFor({state: 'visible'});
//         await searchInput.fill('Pakistan');
//         const pakistanOption = this.frame.locator(`xpath=//li[contains(@class, 'country') and contains(., 'Pakistan')]`);
//         await pakistanOption.waitFor({state: 'visible'});
//         await pakistanOption.click();
//         const phoneInput = this.frame.locator(`[name="${this.phoneNumberName}"]`);
//         await phoneInput.fill(phoneNumberInput);
//         await this.page.waitForTimeout(1000); // replace time.sleep(1)
//     }
//
//     async enterAdditionalNotes(additionalNotesInput) {
//         const el = this.frame.locator(`#${this.additionalNotesID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(additionalNotesInput);
//     }
//
//     async enterPickUpTime(departureTimeInput) {
//         const el = this.frame.locator(`#${this.pickUpTimeID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(departureTimeInput);
//         await this.page.waitForTimeout(1000);
//     }
//
//     async enterDeparturetime(departureTimeInput) {
//         const el = this.frame.locator(`#${this.departuretimeID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(departureTimeInput);
//         await this.page.waitForTimeout(1000);
//     }
//
//     async enterDropOffDepartureTime(dropOffDepartureTimeInput) {
//         const el = this.frame.locator(`#${this.dropOffDepartureTimeID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(dropOffDepartureTimeInput);
//         await this.page.waitForTimeout(1000);
//     }
//
//     async enterAirlineArrivalTime(airlineArrivalTimeInput) {
//         const el = this.frame.locator(`#${this.airlineArrivalTimeID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(airlineArrivalTimeInput);
//         await this.page.waitForTimeout(1000); // replaces time.sleep(1)
//     }
//
//     async enterAirlineDeparturetime(departureTimeInput) {
//         const el = this.frame.locator(`#${this.airlineDeparturetimeID}`);
//         await el.waitFor({state: 'visible'});
//         await el.fill(departureTimeInput);
//         await this.page.waitForTimeout(1000); // replaces time.sleep(1)
//     }
//
//     async fetchOrderId() {
//         const h3 = this.page.locator(`xpath=//h3[contains(text(), 'Order ID')]`).first();
//         await h3.waitFor({state: 'visible'});
//         const txt = (await h3.textContent()) || '';
//         return parseInt(txt.split('#')[1], 10);
//     }
//
//     async checkValidationErrorsForOneWayTrips() {
//         try {
//             // Wait for at least one error <p> to appear
//             await this.frame.locator('div[aria-live="assertive"] p.text-red-500')
//                 .first()
//                 .waitFor({state: 'visible', timeout: 5000});
//
//             const errors = await this.frame.locator('div[aria-live="assertive"] p.text-red-500').allTextContents();
//
//             if (errors.length > 0) {
//                 console.log("Validation errors found:");
//                 errors.forEach((err, i) => console.log(`${i + 1}. ${err}`));
//                 return errors;
//             } else {
//                 console.log("No validation errors captured.");
//                 return [];
//             }
//         } catch (e) {
//             console.log("Validation errors were expected but not found within timeout.");
//             return [];
//         }
//     }
//
//     async checkValidationErrorsForRoundTrips() {
//         try {
//             await this.frame.locator('div[aria-live="assertive"] p.text-red-500')
//                 .first()
//                 .waitFor({state: 'visible', timeout: 5000});
//
//             const errors = await this.frame.locator('div[aria-live="assertive"] p.text-red-500').allTextContents();
//
//             if (errors.length > 0) {
//                 console.log("Validation errors found:");
//                 errors.forEach((err, i) => console.log(`${i + 1}. ${err}`));
//                 return errors;
//             } else {
//                 console.log("No validation errors captured.");
//                 return [];
//             }
//         } catch (e) {
//             console.log("Validation errors were expected but not found within timeout.");
//             return [];
//         }
//     }
//
// }
//
// module.exports = ReservationFormPage;
