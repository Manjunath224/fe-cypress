import { When,Then,Given } from "cypress-cucumber-preprocessor/steps";
import {mobileDevicesPage} from "../pages";

When(/^User filters mobile devices brand to "(.+)"$/, function (brand) {
    cy.get(mobileDevicesPage.deviceBrandFilter(brand)).click().then(() => {
        cy.get(mobileDevicesPage.deviceBrandFilter(brand)).parent().should('have.class', 'active');
    });
});

When(/^User check for mobile device brand "(.+)" and model "(.+)"$/,  (brand, model) => {
    cy.get(mobileDevicesPage.deviceBlockHeaderName(brand, model)).should('be.visible');
});

When(/^User chooses colour "(.+)" in mobile device brand "(.+)" and model "(.+)"$/,  (colour, brand, model) => {
    cy.get(mobileDevicesPage.deviceColourButton(brand, model, colour)).click().then(() => {
        cy.get(mobileDevicesPage.deviceColourButton(brand, model, colour)).parent().should('have.class', 'active');
    });
});

When(/^User Selects mobile device brand "(.+)" and model "(.+)" in colour "(.+)"$/,  (brand, model, colour) => {
     cy.get(mobileDevicesPage.deviceSelectButton(brand, model, colour)).click();
});

