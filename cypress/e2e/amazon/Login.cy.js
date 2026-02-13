/// <reference types="cypress" />
import LoginPage from"../../pageObject/amazon/login.page";


const loginPage = new LoginPage();

describe('Amazon Login Test', () => {

    beforeEach(() => {
    cy.navigateToAmazon();
    cy.rejectAmazonCookies();
 
   
  });

    it('Erfolgreiche Anmeldung eines registrierten Benutzers', () => {
        
        cy.hoverAccountMenu();
        cy.clickSignInLink();
        const email = Cypress.env("amazonEmail");
        const password = Cypress.env("amazonPassword");
        loginPage.clickInputEmail(email);
        loginPage.clickInputPassword(password);
        loginPage.verifyLoginSuccess();
        

    });

    




});