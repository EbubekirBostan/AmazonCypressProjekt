/// <reference types="cypress" />
import LoginPage from"../../pageObject/amazon/login.page";
import loginData from "../../fixtures/amazon/login.data.json";




const loginPage = new LoginPage();

describe('Amazon Login - Negative Scenarios', () => {
loginData.invalidEmails.forEach((email) => {

  it('Benutzer sollten sich mit ${email} nicht anmelden können', () => {

    cy.navigateToAmazon();
    cy.rejectAmazonCookies();
    cy.hoverAccountMenu();
    cy.clickSignInLink();

    loginPage.clickInputEmail(email);
    loginPage.verifyLoginError();
  });

});

});