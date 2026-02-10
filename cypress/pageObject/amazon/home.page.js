import homeData from"../../fixtures/amazon/home.data.json"
import { amazonSelectors } from "../../utils/selectors";
class HomePage {
    navigateUrl() {
     cy.visit(homeData.amazonUrl);
    }

     rejectCookies() {
        cy.get(amazonSelectors.rejectCookies).click();
        
    }

    hoverAccountMenu(){
        cy.get(amazonSelectors.accountLinks).trigger('mouseover');
       
    }
    clickSignInLink(){
        cy.get(amazonSelectors.signInLink).click();
    }




}
 export default HomePage;