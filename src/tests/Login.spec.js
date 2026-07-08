import { test, expect }
from '../fixtures/baseFixture.js';

import loginData
from '../data/loginData.json';

test.describe('Login Module', () => {

    test('@smoke Verify Valid Login',
        async ({ pages }) => {

        const loginPage =
            pages.getLoginPage();

        const homePage =
            pages.getHomePage();

        await loginPage.open();

        await loginPage.login(

            loginData.validUser.username,

            loginData.validUser.password
        );

        await homePage.verifyHomePage();

        await expect(

            await homePage.getPageTitle()

        ).toBe('Products');
    });

    test('@regression Verify Invalid Login',
        async ({ pages }) => {

        const loginPage =
            pages.getLoginPage();

        await loginPage.open();

        await loginPage.login(

            loginData.invalidUser.username,

            loginData.invalidUser.password
        );

        const errorMessage =
            await loginPage.getErrorMessage();

        expect(errorMessage)
            .toContain('Epic sadface');
    });
});