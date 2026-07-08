import { expect } from '@playwright/test';

import { BasePage } from './BasePage.js';

import { HomePageLocators }
from '../locators/HomePageLocators.js';

export class HomePage extends BasePage {

    constructor(page) {

        super(page);
    }

    async verifyHomePage() {

        await expect(

            this.page.locator(
                HomePageLocators.lblProductsTitle
            )

        ).toBeVisible();
    }

    async getPageTitle() {

        return await this.getText(
            HomePageLocators.lblProductsTitle
        );
    }

    async logout() {

        await this.click(
            HomePageLocators.btnMenu
        );

        await this.click(
            HomePageLocators.btnLogout
        );
    }
}