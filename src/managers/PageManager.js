import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';

export class PageManager {

    constructor(page) {

        this.page = page;
    }

    getLoginPage() {

        return new LoginPage(this.page);
    }

    getHomePage() {

        return new HomePage(this.page);
    }
}