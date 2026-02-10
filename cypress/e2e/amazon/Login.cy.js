/// <reference types="cypress" />
describe('Amazon Login Test', () => {

    beforeEach(() => {
    cy.navigateToAmazon();
    cy.rejectAmazonCookies();
  });
    it('should navigate to Amazon and perform login', () => {
        
        cy.hoverAccountMenu();
        cy.clickSignInLink();
    });
});