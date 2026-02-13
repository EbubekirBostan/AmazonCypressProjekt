/// <reference types="cypress" />
import LoginPage from"../../pageObject/amazon/login.page";
import loginData from "../../fixtures/amazon/login.data.json";

const loginPage = new LoginPage();

describe('Amazon Login - Negative Scenarios', () => {

  beforeEach(() => {
    cy.navigateToAmazon();
    cy.rejectAmazonCookies();
    cy.hoverAccountMenu();
    cy.clickSignInLink();
  });
  it('Benutzer sollten sich mit einer gültigen, aber nicht registrierten E-Mail nicht anmelden können', () => {
    
    const nonRegisteredEmail = `notregistered_${Date.now()}@example.com`;
    loginPage.clickInputEmail(nonRegisteredEmail);
    loginPage.verifyLoginFailed();
    
  });
  loginData.invalidEmails.forEach((email) => {

    it(`Benutzer sollten sich mit der ungültigen E-Mail "${email}" nicht anmelden können`, () => {

      loginPage.clickInputEmail(email);
      loginPage.verifyLoginFailed();

    });

  });



});
