import { When,Then,Given } from "cypress-cucumber-preprocessor/steps";
import {deviceDescriptionPage} from "../pages";

When(/^User clicks on Next step Button to Proceed Checkout$/, () => {
    cy.get("div.product-receipt__footer").then($footer => {
        if ($footer.find(deviceDescriptionPage.nextStepButton.type1).length > 0) {
            cy.get(deviceDescriptionPage.nextStepButton.type1).then($buttonNext => {
                if ($buttonNext.is(':visible')) {
                    cy.get(deviceDescriptionPage.nextStepButton.type1).click();
                } else {
                    cy.get(deviceDescriptionPage.nextStepButton.type2).click();
                    cy.get(deviceDescriptionPage.nextStepButton.type1).click();
                }
            });
        }
    });
});

When(/^User clicks on Next step Button in Shopping Cart to Proceed$/, () => {
    cy.get(deviceDescriptionPage.shoppingCartNextStepButton).click();
});

When(/^User clicks on Next step Button in Data Page to Proceed$/, () => {
    cy.get(deviceDescriptionPage.dataPageNextStepButton).click();
});

When(/^User clicks on Next step Button in Number Portability page to Proceed$/, () => {
    cy.get(deviceDescriptionPage.numberPortabilityNextButton).click();
});

Then(/^User enters his personal details in Data page to Proceed$/, () => {
    cy.get(deviceDescriptionPage.personalDetails.payerEmail).type('mark.rutte@gmail.com');
    cy.get(deviceDescriptionPage.personalDetails.genderLabel).click();
    cy.get(deviceDescriptionPage.personalDetails.payerInitial).type('M');
    cy.get(deviceDescriptionPage.personalDetails.payerLastName).type('Dries van Agt');
    cy.get(deviceDescriptionPage.personalDetails.payerBirthday).type('02-02-1931');
    cy.get(deviceDescriptionPage.personalDetails.payerMobile).type('0703135400');
});

Then(/^User enters his address details in Data page to Proceed$/, () => {
    cy.get(deviceDescriptionPage.address.country).select('NLD');
    cy.get(deviceDescriptionPage.address.postalCode).type('2513AB');
    cy.get(deviceDescriptionPage.address.houseNumber).type('5');
});

Then(/^User enters his Identity details in Data page to Proceed$/, () => {
    cy.get(deviceDescriptionPage.identification.nationality).select('IN');
    cy.get(deviceDescriptionPage.identification.type).select('TYPE_I');
    cy.get(deviceDescriptionPage.identification.number).type('M7722222');
    cy.get(deviceDescriptionPage.identification.expiryDate).type('22-04-2022');
});

Then(/^User enters his Bank account details in Data page to Proceed$/, () => {
    cy.get(deviceDescriptionPage.paymentDetails.iban).type('NL91 ABNA 0417 1643 00')
});

Then(/^User enters his Income and Loan details to Proceed$/, () => {
    cy.get('div.wrapper >ul[class*=states]')
        .then($loanDetails => {
            if ($loanDetails.hasClass('six-states')) {
                cy.get(deviceDescriptionPage.monthlyLoanAndIncomeDetails.relationStatus).select('Single');
                cy.get(deviceDescriptionPage.monthlyLoanAndIncomeDetails.houseRentCost).type('1220');
                cy.get(deviceDescriptionPage.monthlyLoanAndIncomeDetails.monthlyIncome).type('4300');
                cy.get(deviceDescriptionPage.loanDataNextButton).click();
            }
        });
});


Then(/^Verify user is in Overview of the booking page$/, () => {
    cy.get(deviceDescriptionPage.overviewPage.cartBox).should('be.visible');
});
