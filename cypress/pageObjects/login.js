const waitingForVisiblity = 5000;

module.exports = {
    userEmail() {
        return cy.xpath('//input[@id="email"]', { timeout: waitingForVisiblity })
    },
    userPassword() {
        return cy.xpath('//input[@id="outlined-adornment-password"]', { timeout: waitingForVisiblity })
    },
    loginButton() {
        return cy.xpath('//button[@type="submit"]', { timeout: waitingForVisiblity })
    }
};
