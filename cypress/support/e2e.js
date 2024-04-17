import userData from '../fixtures/userData.json'
import login from '../pageObjects/login'
import 'cypress-mochawesome-reporter/register';

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')
require("cypress-xpath")
//const qs = require('qs');
Cypress.on("uncaught:exception", (err, runnable) => false)

beforeEach(() => {
    cy.visit(Cypress.env('url'));
    cy.wait(3000);

    login.userEmail().type(userData.EmailID)
    login.userPassword().type(userData.Password)
    login.loginButton().click()
});