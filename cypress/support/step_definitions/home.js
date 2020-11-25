import { When,Then,Given } from "cypress-cucumber-preprocessor/steps";
import {homePage} from "../pages";

Given('User Navigates to Vodafone-Ziggo home page', async () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/', {
        onBeforeLoad: (win) => {
            win.sessionStorage.clear()
        }
    });
    cy.get(homePage.acceptCookieDisclaimerButton).click();
});

When('User clicks on mobile devices icon from home page', () => {
    cy.get(homePage.mobilePhoneButton).click();
});
