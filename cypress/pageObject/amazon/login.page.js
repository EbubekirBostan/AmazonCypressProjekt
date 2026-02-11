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
        cy.get(amazonSelectors.accountLinks).should("contain", "Hallo, Mkemal");
    }
    verifyLoginError() {
    cy.get(loginSelectors.textLoginNeuBenutzer)
  .should("be.visible")
  .invoke("text")
  .then((text) => {
    expect(text.trim()).to.include("Sign in");
  });

  }










}
export default LoginPage;