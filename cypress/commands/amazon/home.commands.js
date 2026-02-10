import homePage from"../../pageObject/amazon/home.page"
const home = new homePage;
Cypress.Commands.add("navigateToAmazon",()=>{
        home.navigateUrl();
})
Cypress.Commands.add("rejectAmazonCookies",()=>{
        home.rejectCookies();
})
Cypress.Commands.add("hoverAccountMenu",()=>{
        home.hoverAccountMenu();
})
Cypress.Commands.add("clickSignInLink",()=>{
        home.clickSignInLink();
})