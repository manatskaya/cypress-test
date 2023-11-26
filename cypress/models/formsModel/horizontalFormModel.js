import { HorizontalFormPage } from "../../pageObject/formsPage/horizontalFormPage";

const formPage = new HorizontalFormPage();

function clearEmailField() {
    formPage.getEmailInHorizontalFrom().clear();
}

function typeEmailInEmailField(data) {
    formPage.getEmailInHorizontalFrom().type(data);

}
export {clearEmailField, typeEmailInEmailField};

function clearPasswordField() {
    formPage.getPasswordInHorizontalForm().clear();
}

function typePasswordInPasswordField(value) {
    formPage.getPasswordInHorizontalForm().type(value);

}

export {clearPasswordField , typePasswordInPasswordField};

export function clickRememberMeCheckbox() {
    formPage.getRememberMeCheckbox().click();
}
export function clickSignInButton() {
    formPage.getSignInButton().click();
}






 //cy.get('.form-horizontal [type="email"]').clear().type('test@email.com')
       // cy.get('.form-horizontal [type="password"]').clear().type('123456)')
        
       // cy.get('.checkbox .label .custom-checkbox').click()
       // cy.get('.form-horizontal').contains('Sign in').eq(0).click()