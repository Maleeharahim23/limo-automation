import {test} from "@playwright/test";
import {EmailTemplatePage} from "./pathsOfEmailTemplate";
import LoginHelper from "../LoginPage/LoginHelper";

const baseURL = "https://test-admin-panel-git-staging-clever-coders-llc.vercel.app/";

// test.use({
//     headless: false,
//     viewport: null,
//     launchOptions: {
//         args: ['--start-maximized'],
//     },
// });

test.describe('Email Template Page Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto(baseURL);
    });

    test('test_01_EmailTemplateChangedSuccessfullyForOneWayTripToTheAirport', async ({page}) => {
        const emailTemplate = new EmailTemplatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await emailTemplate.clickSettingBtn();
        await emailTemplate.clickConfigurationFilterBtn();
        await emailTemplate.clickManageEmailTemplateBtn();
        await emailTemplate.dragAndDropElementsIntoTemplateForOneWayTripToTheAirport();
        await emailTemplate.clickSendTestBtn();
        await emailTemplate.enterEmailInput("maleeha.bhatti@theclevercoders.com");
        await emailTemplate.clickSendTestBtn2();
        console.log("\nEmail Template Changed and sent Successfully");
    });

    test('test_02_EmailTemplateChangedSuccessfullyForOneWayTripFromTheAirport', async ({page}) => {
        const emailTemplate = new EmailTemplatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await emailTemplate.clickSettingBtn();
        await emailTemplate.clickConfigurationFilterBtn();
        await emailTemplate.clickManageEmailTemplateBtn();
        await emailTemplate.selectServiceDropdown("One-Way Trip from the Airport");
        await emailTemplate.dragAndDropElementsIntoTemplateForOneWayTripFromTheAirport();
        await emailTemplate.clickSendTestBtn();
        await emailTemplate.enterEmailInput("maleeha.bhatti@theclevercoders.com");
        await emailTemplate.clickSendTestBtn2();
        console.log("\nEmail Template Changed and sent Successfully");
    });

    test('test_03_EmailTemplateChangedSuccessfullyForHourlyTrip', async ({page}) => {
        const emailTemplate = new EmailTemplatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await emailTemplate.clickSettingBtn();
        await emailTemplate.clickConfigurationFilterBtn();
        await emailTemplate.clickManageEmailTemplateBtn();
        await emailTemplate.selectServiceDropdown("Hourly Trip");
        await emailTemplate.dragAndDropElementsIntoTemplateForHourlyTrip();
        await emailTemplate.clickSendTestBtn();
        await emailTemplate.enterEmailInput("maleeha.bhatti@theclevercoders.com");
        await emailTemplate.clickSendTestBtn2();
        console.log("\nEmail Template Changed and sent Successfully");
    });

    test('test_04_EmailTemplateChangedSuccessfullyForRoundTripInvolvingAnAirport(OutboundFirst)', async ({page}) => {
        const emailTemplate = new EmailTemplatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await emailTemplate.clickSettingBtn();
        await emailTemplate.clickConfigurationFilterBtn();
        await emailTemplate.clickManageEmailTemplateBtn();
        await emailTemplate.selectServiceDropdown("Round Trip Involving an Airport (Outbound First)");
        await emailTemplate.dragAndDropElementsIntoTemplateForRoundTripInvolvingAnAirportOutboundFirst();
        await emailTemplate.clickSendTestBtn();
        await emailTemplate.enterEmailInput("maleeha.bhatti@theclevercoders.com");
        await emailTemplate.clickSendTestBtn2();
        console.log("\nEmail Template Changed and sent Successfully");
    });

    test('test_05_EmailTemplateChangedSuccessfullyForRoundTripInvolvingAnAirport(InboundFirst)', async ({page}) => {
        const emailTemplate = new EmailTemplatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await emailTemplate.clickSettingBtn();
        await emailTemplate.clickConfigurationFilterBtn();
        await emailTemplate.clickManageEmailTemplateBtn();
        await emailTemplate.selectServiceDropdown("Round Trip Involving an Airport (Inbound First)");
        await emailTemplate.dragAndDropElementsIntoTemplateForRoundTripInvolvingAnAirportOutboundFirst();
        await emailTemplate.clickSendTestBtn();
        await emailTemplate.enterEmailInput("maleeha.bhatti@theclevercoders.com");
        await emailTemplate.clickSendTestBtn2();
        console.log("\nEmail Template Changed and sent Successfully");
    });

    test('test_06_EmailTemplateChangedSuccessfullyForRoundTripNotInvolvingAnAirport', async ({page}) => {
        const emailTemplate = new EmailTemplatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await emailTemplate.clickSettingBtn();
        await emailTemplate.clickConfigurationFilterBtn();
        await emailTemplate.clickManageEmailTemplateBtn();
        await emailTemplate.selectServiceDropdown("Round Trip Not Involving an Airport");
        await emailTemplate.dragAndDropElementsIntoTemplateForRoundTripNotInvolvingAnAirport();
        await emailTemplate.clickSendTestBtn();
        await emailTemplate.enterEmailInput("maleeha.bhatti@theclevercoders.com");
        await emailTemplate.clickSendTestBtn2();
        console.log("\nEmail Template Changed and sent Successfully");
    });

    test('test_07_EmailTemplateChangedSuccessfullyForOneWayTripNotInvolvingAnAirport', async ({page}) => {
        const emailTemplate = new EmailTemplatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await emailTemplate.clickSettingBtn();
        await emailTemplate.clickConfigurationFilterBtn();
        await emailTemplate.clickManageEmailTemplateBtn();
        await emailTemplate.selectServiceDropdown("One-Way Trip Not Involving an Airport");
        await emailTemplate.dragAndDropElementsIntoTemplateForOneWayTripFromTheAirport();
        await emailTemplate.clickSendTestBtn();
        await emailTemplate.enterEmailInput("maleeha.bhatti@theclevercoders.com");
        await emailTemplate.clickSendTestBtn2();
        console.log("\nEmail Template Changed and sent Successfully");
    });

    test('test_08_EmailSentFailed', async ({page}) => {
        const emailTemplate = new EmailTemplatePage(page);
        const login_helper = new LoginHelper(page);
        const loginPage = await login_helper.perform_login();
        await emailTemplate.clickSettingBtn();
        await emailTemplate.clickConfigurationFilterBtn();
        await emailTemplate.clickManageEmailTemplateBtn();
        await emailTemplate.dragAndDropElementsIntoTemplate();
        await emailTemplate.clickSendTestBtn();
        await emailTemplate.enterEmailInput("maleeha.theclevercoders.com");
        await emailTemplate.clickSendTestBtn2();
        await emailTemplate.verifyInvalidEmailTextError();
        console.log("\nEmail cannot be sent due to Invalid Email");
    });

});
