import {
    Given,
    Then,
    When
} from "@badeball/cypress-cucumber-preprocessor"
import '@4tw/cypress-drag-drop'
import homepage from "../../pageObjects/homePage"
import baseClass from "../../Utilities/baseClass"
import commonpage from "../../pageObjects/commonPage"


Given('user is on the homepage', () => {
    baseClass.waitTill(5000)
    homepage.getHomePageButton().should('have.attr', 'class').should('include', 'active');
});

When('user switches the {string}', (language) => {
    commonpage.getLanguageSwitchButton().should('be.visible');
    commonpage.getLanguageSwitchButton().click();
    cy.xpath('//span[text()="' + language + '"]').click();
});

Then('user should be able to verify the consistency of digits after the separator', () => {

    homepage.getSavings().scrollIntoView().invoke('text').then((text) => {
        // Extract the decimal part of the numeric value
        const modifiedText = text.replace('€', '').trim();

        if (modifiedText.includes('.')) {
            const roundedquantitiesPart = modifiedText.split('.')[1];
            // Assert that the decimal part has exactly two digits
            cy.wrap(roundedquantitiesPart).should('have.length', 3);
        }
        else if (modifiedText.includes(',')) {
            const roundedquantitiesPart = modifiedText.split(',')[1];
            // Assert that the decimal part has exactly two digits
            cy.wrap(roundedquantitiesPart).should('have.length', 3);
        }
    });
});