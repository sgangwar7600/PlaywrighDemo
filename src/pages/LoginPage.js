import { BasePage } from './BasePage.js';
import { LoginPageLocators } from '../locators/LoginPageLocators.js';

export class LoginPage extends BasePage {

    constructor(page) {

        super(page);
    }

    async open() {

        await this.page.goto('/');
    }

    async login(username, password) {

        await this.type(
            LoginPageLocators.txtUsername,
            username
        );

        await this.type(
            LoginPageLocators.txtPassword,
            password
        );

        await this.click(
            LoginPageLocators.btnLogin
        );
    }

    async getErrorMessage() {

        return await this.getText(
            LoginPageLocators.lblError
        );
    }
}