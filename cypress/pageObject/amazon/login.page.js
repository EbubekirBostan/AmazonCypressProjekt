import { loginSelectors } from "../../utils/selectors";
import { amazonSelectors } from "../../utils/selectors";

class LoginPage{
    clickInputEmail(email){
        cy.get(loginSelectors.inputEmail).type(email);
        cy.get(loginSelectors.buttonContinue).click();
    }
    clickInputPassword(password){
        cy.get(loginSelectors.inputPassword).type(password,{log:false});
        cy.get(loginSelectors.buttonSignIn).click();
    }
    verifyLoginSuccess(){
         cy.url().should("not.include", "/ap/signin");

  cy.get("#nav-link-accountList")
    .should("contain", "Hallo");

  cy.get("#nav-link-accountList")
    .trigger("mouseover");

  cy.get("#nav-item-signout")
    .should("exist");
    }
    verifyLoginFailed() {

            // Error state
            cy.get("body").then(($body) => {

             const hasInvalidFormat =
             $body.find(".a-alert-content").length > 0;

             const hasIntentConfirmation =
             $body.find("#intent-confirmation-container").length > 0;

             expect(
                 hasInvalidFormat || hasIntentConfirmation,
                 "Login sollte fehlschlagen"
                ).to.be.true;

        });

 
}











}
export default LoginPage;