import homePage from"../pageObject/home.page"
const home = new homePage;
Cypress.Commands.add("navigateToAmazon",()=>{
        home.navigateUrl();
})