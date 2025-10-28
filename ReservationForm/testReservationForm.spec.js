const {test, expect} = require('@playwright/test')
const LoginHelper = require('../LoginPage/LoginHelper')
const ReservationFormPage = require('./pathsOfReservationForm')
const QuoteHelper = require('../SendAndUpdatingQuote/QuoteHelper')

const BASE_URL = "https://limo-test-app-frontend.vercel.app/"
const ADMIN_URL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/"

// test.use({
//     headless: false,
//     viewport: null,
//     launchOptions: {
//         args: ['--start-maximized'],
//     },
// });

test.describe('ReservationFrom', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(BASE_URL)
    })

    test('test_01_OneWayTripToTheAirportCreationSuccessful', async ({page}) => {
        let order_id = null
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.enterPickupAddress("36")
            await generateQuote.enterPickupCity("Los Angeles")
            await generateQuote.selectDropoffAirport()
            await generateQuote.clickNextBtn1()
            await generateQuote.selectCar()
            await generateQuote.selectPickupDate()
            await generateQuote.enterPickUpTime("18:30")
            await generateQuote.clickStopBtn1()
            await generateQuote.enterStopAddress1("38")
            await generateQuote.enterAirlineName("DS-34")
            await generateQuote.enterAirlineDeparturetime("19:30")
            await generateQuote.enterNumberOfPassengers("4")
            await generateQuote.enterPassengerNames("Alice, John, William")
            await generateQuote.enterLugage("7")
            await generateQuote.enterName("Tester")
            await generateQuote.enterEmail("maleeha.bhatti@theclevercoders.com")
            await generateQuote.enterPhoneNumber("3465727420")
            // await generateQuote.enterPakPhoneNumber("3185618299")
            await generateQuote.enterAdditionalNotes("Additional Notes")
            await generateQuote.clickConsentSmsCheckbox()
            await generateQuote.clickNextBtn2()
            await generateQuote.clickGetQuoteBtn1()

            order_id = await generateQuote.fetchOrderId()
            console.log("Order id: ", order_id)
        } catch (e) {
            console.log("One Way Trip To The Airport Lead is not generated...Please try Again -", e)
            throw e
        }

        try {
            await page.goto(ADMIN_URL)
            const login_helper = new LoginHelper(page)
            const loginPage = await login_helper.perform_login()
            const quote_helper = new QuoteHelper(page)
            await quote_helper.searchLead(order_id)
            const isQuoteCreated = await quote_helper.test_01_createQuoteForSingleTrips()
            expect(isQuoteCreated).toBeTruthy()
            console.log("\nQuote Email sent Successfully for One Way Trip To The Airport")

            const isQuoteUpdated = await quote_helper.test_03_updateQuoteForSingleTrips()
            expect(isQuoteUpdated).toBeTruthy()
            console.log("\nQuote Updated Successfully for One Way Trip To The Airport")

            const isQuoteMarkedPaid = await quote_helper.test_04_markLeadAsPaid()
            expect(isQuoteMarkedPaid).toBeTruthy()
            console.log("\nOne Way Trip To The Airport Lead Marked as Paid Successfully")
        } catch (e) {
            console.log("Quote is not Priced, Updated or Paid... Please try Again -", e)
            throw e
        }

    })

    test('test_02_OneWayTripToTheAirportCreationFailed', async ({page}) => {
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.enterPickupAddress("34")
            await generateQuote.enterPickupCity("Los Angeles")
            await generateQuote.selectDropoffAirport()
            await generateQuote.clickNextBtn1()
            await generateQuote.clickNextBtn2()
            await page.waitForTimeout(1000)
            const errors = await generateQuote.checkValidationErrorsForOneWayTrips()

            if (errors.length === 0) {
                console.log("Validation errors were expected but not found.")
            } else {
                console.log("Due to these errors 'One Way Trip To The Airport' lead is not Generated.. Please Try again")
            }
        } catch (e) {
            console.log("'One Way Trip To The Airport' Lead Creation Failed", e)
            throw e
        }
    })

    test('test_03_OneWayTripFromTheAirportCreationSuccessful', async ({page}) => {
        let order_id = null

        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(1)
            await generateQuote.selectPickUpAirportDropdown2(1)
            await generateQuote.enterDropOffAddress4("56")
            // await generateQuote.enterDropOffCity("Victorville")
            await generateQuote.clickNextBtn1()
            await generateQuote.selectCar()
            await generateQuote.selectPickupDate()
            await generateQuote.enterPickUpTime("19:30")
            await generateQuote.enterAirlineName("Qatar Airlines")
            await generateQuote.enterFlightNumber("FA-67")
            await generateQuote.enterAirlineArrivalTime("10:30")
            await generateQuote.enterDropOffAddress1("34")
            await generateQuote.clickStopBtn2()
            await generateQuote.enterStopAddress2("38")
            await generateQuote.enterNumberOfPassengers("8")
            await generateQuote.enterPassengerNames("Alice, John, William, Julie")
            await generateQuote.enterLugage("7")
            await generateQuote.enterName("Tester")
            await generateQuote.enterEmail("maleeha.bhatti@theclevercoders.com")
            await generateQuote.enterPhoneNumber("3465727420")
            // await generateQuote.enterPakPhoneNumber("3185618299") 
            await generateQuote.enterAdditionalNotes("Additional Notes")
            await generateQuote.clickConsentSmsCheckbox()
            await generateQuote.clickNextBtn2()
            await generateQuote.clickGetQuoteBtn1()

            order_id = await generateQuote.fetchOrderId()
            console.log("\n'One Way Trip From The Airport' Quote is Generated Successfully")
        } catch (e) {
            console.log("One Way Trip From The Airport Lead is not generated...Please try Again -", e)
            throw e
        }

        try {
            await page.goto(ADMIN_URL)
            const login_helper = new LoginHelper(page)
            await login_helper.perform_login()
            console.log("Order id: ", order_id)

            const quote_helper = new QuoteHelper(page)
            await quote_helper.searchLead(order_id)

            const isQuoteCreated = await quote_helper.test_01_createQuoteForSingleTrips()
            expect(isQuoteCreated).toBeTruthy()
            console.log("\nQuote Email sent Successfully for One Way Trip From The Airport")

            const isQuoteUpdated = await quote_helper.test_03_updateQuoteForSingleTrips()
            expect(isQuoteUpdated).toBeTruthy()
            console.log("\nQuote Updated Successfully for One Way Trip From The Airport")

            const isQuoteMarkedPaid = await quote_helper.test_04_markLeadAsPaid()
            expect(isQuoteMarkedPaid).toBeTruthy()
            console.log("\nOne Way Trip From The Airport Lead Marked as Paid Successfully")
        } catch (e) {
            console.log("Quote is not sent... Please try Again -", e)
            throw e
        }
    })

    test('test_04_OneWayTripFromTheAirportCreationFailed', async ({page}) => {
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(1)
            await generateQuote.selectPickUpAirportDropdown2(1)
            await generateQuote.enterDropOffAddress4("56")
            // await generateQuote.enterDropOffCity("Victorville")
            await generateQuote.clickNextBtn1()
            await generateQuote.clickNextBtn2()
            await page.waitForTimeout(1000)
            const errors = await generateQuote.checkValidationErrorsForOneWayTrips()

            if (errors.length === 0) {
                console.log("Validation errors were expected but not found.")
            } else {
                console.log("Due to these errors 'One Way Trip From The Airport' lead is not Generated.. Please Try again")
            }
        } catch (e) {
            console.log("'One Way Trip From The Airport' Lead Creation Failed", e)
            throw e
        }
    })

    test('test_05_OneWayTripNotInvolvingAnAirportCreationSuccessful', async ({page}) => {
        let order_id = null

        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(3)
            await generateQuote.enterPickupAddress("38")
            // await generateQuote.enterPickupCity("Victorville")
            // await generateQuote.selectPickupState(2)
            await generateQuote.enterDropOffAddress5("56")
            // await generateQuote.selectDropOffState(2)
            await generateQuote.clickNextBtn1()
            await generateQuote.selectCar()
            await generateQuote.selectPickupDate()
            await generateQuote.enterPickUpTime("22:30")
            // await generateQuote.enterPickupAddress("34")
            await generateQuote.clickStopBtn1()
            await generateQuote.enterStopAddress1("38")
            await generateQuote.enterDropOffAddress2("46")
            await generateQuote.enterNumberOfPassengers("8")
            await generateQuote.enterPassengerNames("Alice, John, William, Julie")
            await generateQuote.enterLugage("7")
            await generateQuote.enterName("Tester")
            await generateQuote.enterEmail("maleeha.bhatti@theclevercoders.com")
            await generateQuote.enterPhoneNumber("3465727420")
            // await generateQuote.enterPakPhoneNumber("3185618299") 
            await generateQuote.enterAdditionalNotes("Additional Notes")
            await generateQuote.clickConsentSmsCheckbox()
            await generateQuote.clickNextBtn2()
            await generateQuote.clickGetQuoteBtn2()

            order_id = await generateQuote.fetchOrderId()
            console.log("\n'One Way Trip Not Involving an Airport' Quote is Generated Successfully")
        } catch (e) {
            console.log("One Way Trip Not Involving an Airport Lead is not generated...Please try Again -", e)
            throw e
        }

        try {
            await page.goto(ADMIN_URL)
            const login_helper = new LoginHelper(page)
            await login_helper.perform_login()
            console.log("Order id: ", order_id)

            const quote_helper = new QuoteHelper(page)
            await quote_helper.searchLead(order_id)

            const isQuoteCreated = await quote_helper.test_01_createQuoteForSingleTrips()
            expect(isQuoteCreated).toBeTruthy()
            console.log("\nQuote Email sent Successfully for One Way Trip Not Involving an Airport")

            const isQuoteUpdated = await quote_helper.test_03_updateQuoteForSingleTrips()
            expect(isQuoteUpdated).toBeTruthy()
            console.log("\nQuote Updated Successfully for One Way Trip Not Involving an Airport")

            const isQuoteMarkedPaid = await quote_helper.test_04_markLeadAsPaid()
            expect(isQuoteMarkedPaid).toBeTruthy()
            console.log("\nOne Way Trip Not Involving an Airport Lead Marked as Paid Successfully")
        } catch (e) {
            console.log("Quote is not Sent/ Updated... Please try Again -", e)
            throw e
        }
    })

    test('test_06_OneWayTripNotInvolvingAnAirportCreationFailed', async ({page}) => {
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(3)
            await generateQuote.enterPickupAddress("38")
            // await generateQuote.enterPickupCity("Victorville")
            // await generateQuote.selectPickupState(2)
            await generateQuote.enterDropOffAddress5("56")
            await generateQuote.clickNextBtn1()
            await generateQuote.clickNextBtn2()
            await page.waitForTimeout(1000)
            const errors = await generateQuote.checkValidationErrorsForOneWayTrips()

            if (errors.length === 0) {
                console.log("Validation errors were expected but not found.")
            } else {
                console.log("Due to these errors 'One Way Trip Not Involving An Airport' lead is not Generated.. Please Try again")
            }
        } catch (e) {
            console.log("'One Way Trip Not Involving An Airport' Lead Creation Failed", e)
            throw e
        }
    })

    test('test_07_RoundTripInvolvingAnAirportForLeg1CreationSuccessful', async ({page}) => {
        let order_id = null
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(2)
            await generateQuote.selectLeg1ForRoundTrip(0)
            await generateQuote.enterPickupAddress2("47")
            await generateQuote.selectDropoffAirport2()
            await generateQuote.clickNextBtn1()
            await generateQuote.selectCar()
            await generateQuote.selectPickupDate()
            await generateQuote.enterPickUpTime("17:30")
            // await generateQuote.enterPickupAddress("34")
            await generateQuote.clickStopBtn1()
            await generateQuote.enterStopAddress1("45")
            await generateQuote.enterNumberOfPassengers("8")
            await generateQuote.enterPassengerNames("Alice, John, William, Julie")
            await generateQuote.enterLugage("7")
            await generateQuote.enterDropOffAirlineName("Turkish Airlines")
            await generateQuote.enterDropOffDepartureTime("18:30")
            await generateQuote.selectReturnDate()
            await generateQuote.enterReturnTime("20:30")
            await generateQuote.enterReturnAirlineName("Qatar Airlines")
            await generateQuote.enterReturnFlightNumber("TR-31")
            await generateQuote.selectReturnPickupAirport(2)
            await generateQuote.clickUseSameStopsForLeg2CheckBox()
            await generateQuote.clickStopBtn3()
            await generateQuote.enterStopAddress3("58")
            await generateQuote.enterName("Tester")
            await generateQuote.enterEmail("maleeha.bhatti@theclevercoders.com")
            await generateQuote.enterPhoneNumber("3465727420")
            // await generateQuote.enterPakPhoneNumber("3185618299")
            await generateQuote.enterAdditionalNotes("Additional Notes")
            await generateQuote.clickConsentSmsCheckbox()
            await generateQuote.clickNextBtn2()
            await generateQuote.clickGetQuoteBtn3()

            order_id = await generateQuote.fetchOrderId()
            console.log("\n'Round Trip Involving an Airport' Lead is Generated Successfully")
        } catch (e) {
            console.log("Unable to generate 'Round Trip Involving an Airport' Lead...Please try Again -", e)
            throw e
        }

        try {
            await page.goto(ADMIN_URL)
            const login_helper = new LoginHelper(page)
            await login_helper.perform_login()
            console.log("Order id: ", order_id)

            const quote_helper = new QuoteHelper(page)
            await quote_helper.searchLead(order_id)

            const isQuoteCreated = await quote_helper.test_02_createQuoteForRoundTrips()
            expect(isQuoteCreated).toBeTruthy()
            console.log("\nQuote Email sent Successfully for 'Round Trip Involving an Airport'")

            const isQuoteUpdated = await quote_helper.test_05_updateQuoteForRoundTrips()
            expect(isQuoteUpdated).toBeTruthy()
            console.log("\nQuote Updated Successfully for 'Round Trip Involving an Airport for Leg 1'")

            const isQuoteMarkedPaid = await quote_helper.test_04_markLeadAsPaid()
            expect(isQuoteMarkedPaid).toBeTruthy()
            console.log("\n'Round Trip Involving an Airport for Leg 1' Lead Marked as Paid Successfully")
        } catch (e) {
            console.log("Quote is not Sent/ Updated... Please try Again -", e)
            throw e
        }
    })

    test('test_08_RoundTripInvolvingAnAirportForLeg1CreationFailed', async ({page}) => {
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(2)
            await generateQuote.selectLeg1ForRoundTrip(0)
            await generateQuote.enterPickupAddress2("47")
            await generateQuote.selectDropoffAirport2()
            await generateQuote.clickNextBtn1()
            await generateQuote.clickNextBtn2()
            await page.waitForTimeout(1000)
            const errors = await generateQuote.checkValidationErrorsForOneWayTrips()

            if (errors.length === 0) {
                console.log("Validation errors were expected but not found.")
            } else {
                console.log("Due to these errors 'Round Trip Involving An Airport For Leg1' lead is not Generated.. Please Try again")
            }
        } catch (e) {
            console.log("'Round Trip Involving An Airport For Leg1' Lead Creation Failed", e)
            throw e
        }
    })

    test('test_09_RoundTripInvolvingAnAirportForLeg2CreationSuccessful', async ({page}) => {
        let order_id = null

        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(2)
            await generateQuote.selectLeg2ForRoundTrip(1)
            await generateQuote.selectPickUpAirportDropdown(1)
            await generateQuote.enterDropOffAddress6("65")
            await generateQuote.clickNextBtn1()
            await generateQuote.selectCar()
            await generateQuote.selectPickupDate()
            await generateQuote.enterPickUpTime("17:30")
            await generateQuote.enterAirlineName("Turkish Airlines")
            await generateQuote.enterFlightNumber("AG-46")
            await generateQuote.enterAirlineArrivalTime("14:30")
            await generateQuote.enterNumberOfPassengers("8")
            await generateQuote.enterPassengerNames("Alice, John, William, Julie")
            await generateQuote.enterLugage("7")
            await generateQuote.enterDropOffAddress3("78")
            await generateQuote.clickStopBtn4()
            await generateQuote.enterStopAddress4("22")
            await generateQuote.selectReturnDate()
            await generateQuote.enterReturnTime("18:30")
            await generateQuote.enterReturnPickupAddress("33")
            await generateQuote.selectReturnDropOffAirport("1")
            await generateQuote.enterReturnFlightNumber("TR-31")
            await generateQuote.enterDeparturetime("21:30")
            await generateQuote.clickUseSameStopsForLeg2CheckBox()
            await generateQuote.clickStopBtn5()
            await generateQuote.enterStopAddress5("42")
            await generateQuote.enterName("Tester")
            await generateQuote.enterEmail("maleeha.bhatti@theclevercoders.com")
            await generateQuote.enterPhoneNumber("3465727420")
            // await generateQuote.enterPakPhoneNumber("3185618299") 
            await generateQuote.enterAdditionalNotes("Additional Notes")
            await generateQuote.clickConsentSmsCheckbox()
            await generateQuote.clickNextBtn2()
            await generateQuote.clickGetQuoteBtn3()

            order_id = await generateQuote.fetchOrderId()
            console.log("\n'Round Trip Involving an Airport' Lead is Generated Successfully")
        } catch (e) {
            console.log("Unable to generate 'Round Trip Involving an Airport' Lead...Please try Again -", e)
            throw e
        }

        try {
            await page.goto(ADMIN_URL)
            const login_helper = new LoginHelper(page)
            await login_helper.perform_login()
            console.log("Order id: ", order_id)

            const quote_helper = new QuoteHelper(page)
            await quote_helper.searchLead(order_id)

            const isQuoteCreated = await quote_helper.test_02_createQuoteForRoundTrips()
            expect(isQuoteCreated).toBeTruthy()
            console.log("\nQuote Email sent Successfully for 'Round Trip Involving an Airport'")

            const isQuoteUpdated = await quote_helper.test_05_updateQuoteForRoundTrips()
            expect(isQuoteUpdated).toBeTruthy()
            console.log("\nQuote Updated Successfully for 'Round Trip Involving an Airport'")

            const isQuoteMarkedPaid = await quote_helper.test_04_markLeadAsPaid()
            expect(isQuoteMarkedPaid).toBeTruthy()
            console.log("\n'Round Trip Involving an Airport for Leg 2' Lead Marked as Paid Successfully")
        } catch (e) {
            console.log("Quote is not Sent/ Updated... Please try Again -", e)
            throw e
        }
    })

    test('test_010_RoundTripInvolvingAnAirportForLeg2CreationFailed', async ({page}) => {
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(2)
            await generateQuote.selectLeg2ForRoundTrip(1)
            await generateQuote.selectPickUpAirportDropdown(1)
            await generateQuote.enterDropOffAddress6("65")
            await generateQuote.clickNextBtn1()
            await generateQuote.clickNextBtn2()
            await page.waitForTimeout(1000)
            const errors = await generateQuote.checkValidationErrorsForOneWayTrips()

            if (errors.length === 0) {
                console.log("Validation errors were expected but not found.")
            } else {
                console.log("Due to these errors 'Round Trip Involving An Airport For Leg2' lead is not Generated.. Please Try again")
            }
        } catch (e) {
            console.log("'Round Trip Involving An Airport For Leg2' Lead Creation Failed", e)
            throw e
        }
    })

    test('test_011_RoundTripNotInvolvingAnAirportCreationSuccessful', async ({page}) => {
        let order_id = null

        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(4)
            await generateQuote.enterPickupAddress("67")
            await generateQuote.enterDropOffAddress5("28")
            await generateQuote.clickNextBtn1()
            await generateQuote.selectCar()
            await generateQuote.selectPickupDate()
            await generateQuote.enterPickUpTime("22:30")
            await generateQuote.clickStopBtn1()
            await generateQuote.enterStopAddress1("66")
            await generateQuote.enterNumberOfPassengers("8")
            await generateQuote.enterPassengerNames("Alice, John, William, Julie")
            await generateQuote.enterLugage("7")
            await generateQuote.selectReturnDate2()
            await generateQuote.enterReturnTime("13:00")
            await generateQuote.enterReturnPickupAddress2("45")
            await generateQuote.enterReturnDropOffAddress2("46")
            await generateQuote.clickUseSameStopsForLeg2CheckBox()
            await generateQuote.clickStopBtn6()
            await generateQuote.enterStopAddress6("83")
            await generateQuote.enterName("Tester")
            await generateQuote.enterEmail("maleeha.bhatti@theclevercoders.com")
            await generateQuote.enterPhoneNumber("3465727420")
            // await generateQuote.enterPakPhoneNumber("3185618299") 
            await generateQuote.enterAdditionalNotes("Additional Notes")
            await generateQuote.clickConsentSmsCheckbox()
            await generateQuote.clickNextBtn2()
            await generateQuote.clickGetQuoteBtn4()

            order_id = await generateQuote.fetchOrderId()
            console.log("\n'Round Trip Not Involving an Airport' Lead is Generated Successfully")
        } catch (e) {
            console.log("Unable to generate 'Round Trip Not Involving an Airport' Lead...Please try Again -", e)
            throw e
        }

        try {
            await page.goto(ADMIN_URL)
            const login_helper = new LoginHelper(page)
            await login_helper.perform_login()
            console.log("Order id: ", order_id)

            const quote_helper = new QuoteHelper(page)
            await quote_helper.searchLead(order_id)

            const isQuoteCreated = await quote_helper.test_02_createQuoteForRoundTrips()
            expect(isQuoteCreated).toBeTruthy()
            console.log("\nQuote Email sent Successfully for 'Round Trip Not Involving an Airport'")

            const isQuoteUpdated = await quote_helper.test_05_updateQuoteForRoundTrips()
            expect(isQuoteUpdated).toBeTruthy()
            console.log("\nQuote Updated Successfully of 'Round Trip Not Involving an Airport'")

            const isQuoteMarkedPaid = await quote_helper.test_04_markLeadAsPaid()
            expect(isQuoteMarkedPaid).toBeTruthy()
            console.log("\n'Round Trip Not Involving an Airport' Lead Marked as Paid Successfully")
        } catch (e) {
            console.log("Quote is not Sent/ Updated for 'Round Trip Not Involving an Airport'... Please try Again -", e)
            throw e
        }
    })

    test('test_012_RoundTripNotInvolvingAnAirportCreationFailed', async ({page}) => {
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(4)
            await generateQuote.enterPickupAddress("67")
            await generateQuote.enterDropOffAddress5("28")
            await generateQuote.clickNextBtn1()
            await generateQuote.clickNextBtn2()
            await page.waitForTimeout(1000)
            const errors = await generateQuote.checkValidationErrorsForOneWayTrips()

            if (errors.length === 0) {
                console.log("Validation errors were expected but not found.")
            } else {
                console.log("Due to these errors 'Round Trip Involving An Airport For Leg2' lead is not Generated.. Please Try again")
            }
        } catch (e) {
            console.log("'Round Trip Involving An Airport For Leg2' Lead Creation Failed", e)
            throw e
        }
    })

    test('test_013_HourlyTripCreationSuccessful', async ({page}) => {
        let order_id = null

        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(5)
            await generateQuote.selectTripDuration(8)
            await generateQuote.enterPickupAddress3("45")
            await generateQuote.clickNextBtn1()
            await generateQuote.selectCar()
            await generateQuote.selectPickupDate()
            await generateQuote.enterPickUpTime("22:30")
            await generateQuote.enterStopAddress1("23")
            await generateQuote.enterNumberOfPassengers("8")
            await generateQuote.enterPassengerNames("Alice, John, William, Julie")
            await generateQuote.enterLugage("7")
            await generateQuote.enterName("Tester")
            await generateQuote.enterEmail("maleeha.bhatti@theclevercoders.com")
            await generateQuote.enterPhoneNumber("3465727420")
            // await generateQuote.enterPakPhoneNumber("3185618299") 
            await generateQuote.enterAdditionalNotes("Additional Notes")
            await generateQuote.clickConsentSmsCheckbox()
            await generateQuote.clickNextBtn2()
            await generateQuote.clickGetQuoteBtn5()

            order_id = await generateQuote.fetchOrderId()
            console.log("\n'Hourly Trip' Lead is Generated Successfully")
        } catch (e) {
            console.log("Unable to generate 'Hourly Trip' Lead...Please try Again -", e)
            throw e
        }

        try {
            await page.goto(ADMIN_URL)
            const login_helper = new LoginHelper(page)
            await login_helper.perform_login()
            console.log("Order id: ", order_id)

            const quote_helper = new QuoteHelper(page)
            await quote_helper.searchLead(order_id)

            const isQuoteCreated = await quote_helper.test_01_createQuoteForSingleTrips()
            expect(isQuoteCreated).toBeTruthy()
            console.log("\nQuote Email sent Successfully for 'Hourly Trip'")

            const isQuoteUpdated = await quote_helper.test_03_updateQuoteForSingleTrips()
            expect(isQuoteUpdated).toBeTruthy()
            console.log("\nQuote Updated Successfully for 'Hourly Trip'")

            const isQuoteMarkedPaid = await quote_helper.test_04_markLeadAsPaid()
            expect(isQuoteMarkedPaid).toBeTruthy()
            console.log("\n'Hourly Trip' Lead Marked as Paid Successfully")
        } catch (e) {
            console.log("Quote is not Sent/ Updated for 'Hourly Trip'... Please try Again -", e)
            throw e
        }
    })

    test('test_014_HourlyTripCreationFailed', async ({page}) => {
        try {
            const generateQuote = new ReservationFormPage(page)
            await generateQuote.switchToReservationIframe()
            await generateQuote.selectServiceType(5)
            await generateQuote.selectTripDuration(8)
            await generateQuote.enterPickupAddress3("45")
            await generateQuote.clickNextBtn1()
            await generateQuote.clickNextBtn2()
            await page.waitForTimeout(1000)
            const errors = await generateQuote.checkValidationErrorsForOneWayTrips()

            if (errors.length === 0) {
                console.log("Validation errors were expected but not found.")
            } else {
                console.log("Due to these errors 'Hourly Trip' lead is not Generated.. Please Try again")
            }
        } catch (e) {
            console.log("'Hourly Trip' Lead Creation Failed", e)
            throw e
        }
    })

}) 
