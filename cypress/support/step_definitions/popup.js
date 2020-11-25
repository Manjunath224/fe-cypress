import { When,Then,Given } from "cypress-cucumber-preprocessor/steps";
import {informationPopup} from '../pages';

When(/^User accepts he is not Ziggo Customer$/,()=>{
    cy.get(informationPopup.popUpButtonNo).click();
});

When(/^User accepts he is Ziggo Customer$/,()=>{
    cy.get(informationPopup.popUpButtonYes).click();
});

When(/^User closes Ziggo Customer verification popup$/,()=>{
    cy.get(informationPopup.closePopUp).click();
});

