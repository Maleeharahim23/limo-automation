const LogInPage = require('./pathsOfLoginPage');

class LoginHelper {
    constructor(page) {
        this.page = page;
    }

    async perform_login(username = 'Test', password = 'Admin@123') {
    // async perform_login(username = 'limoflowproduction', password = 'Admin@123') {
        const login_page = new LogInPage(this.page);
        await login_page.enterUsername(username);
        await login_page.enterPassword(password);
        await login_page.clickUnhideBtn();
        await login_page.clickLoginBtn();
        // wait a bit for login result
        await this.page.waitForTimeout(1000);
        return login_page;
    }
}

module.exports = LoginHelper;
