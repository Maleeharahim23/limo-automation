class LogInPage {
    constructor(page) {
        this.page = page;
        this.username = "userName";
        this.password = "password";
        this.loginBtn = "/html/body/main/div[1]/div/div/form/div[3]/button";
        this.unhideBtn = "/html/body/main/div[1]/div/div/form/div[2]/div/button";
        this.loginFailedErrorText = "/html/body/main/div[1]/div/div/div";
        this.loginSuccessText = "/html/body/main/div[1]/div/div/div";
    }

    async enterUsername(inputusername) {
        await this.page.locator(`#${this.username}`).fill(inputusername);
        await this.page.waitForTimeout(300);
    }

    async enterPassword(inputPass) {
        await this.page.locator(`#${this.password}`).fill(inputPass);
        await this.page.waitForTimeout(300);
    }

    async clickUnhideBtn() {
        await this.page.locator(`xpath=${this.unhideBtn}`).click();
        await this.page.waitForTimeout(300);
    }

    async clickLoginBtn() {
        await this.page.locator(`xpath=${this.loginBtn}`).click();
        await this.page.waitForTimeout(500);
    }

    async verifyLoginFailed() {
        const txt = await this.page.locator(`xpath=${this.loginFailedErrorText}`).textContent();
        if ((txt || '').includes("Login failed")) {
            console.log("Unable to Login...Try Again");
        } else {
            throw new Error("Expected login failed text");
        }
    }

    async verifyLoginSuccessfull() {
        await this.page.waitForTimeout(1000);
        const txt = await this.page.locator(`xpath=${this.loginSuccessText}`).textContent();
        if ((txt || '').includes("Login successful")) {
            console.log("Logged in Successfull");
        } else {
            const dashboard = await this.page.locator('text=Dashboard').first().textContent().catch(() => null);
            if (dashboard && dashboard.includes('Dashboard')) {
                console.log("Logged in Successfull (Dashboard detected)");
            } else {
                throw new Error(`Login failed, actual text => ${txt}`);
            }
        }
    }
}

module.exports = LogInPage;
