const waitingForVisiblity = 10000;

import locators from "../pageObjects/locators"

module.exports = {

    getHomePageButton() {

        return cy.xpath(locators.HOMEPAGETAB, { timeout: waitingForVisiblity })
    },

    getSavings() {

        return cy.xpath(locators.SAVINGS, { timeout: waitingForVisiblity })
    }
}
