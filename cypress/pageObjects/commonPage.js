const waitingForVisiblity = 10000;

import locators from "../pageObjects/locators"

module.exports = {

    getLanguageSwitchButton(){

        return cy.xpath(locators.LANGUAGE_SWITCH, {timeout: waitingForVisiblity})
    }
}