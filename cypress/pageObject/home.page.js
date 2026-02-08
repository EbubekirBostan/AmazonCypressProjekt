import homeData from"../fixtures/home.data.json"
class HomePage {
    navigateUrl() {
     cy.visit(homeData.amazonUrl);
    }}
export default HomePage;