export class HorizontalFormPage {

    getEmailInHorizontalFrom() {
        return cy.get('.form-horizontal [type="email"]');
    }
    getPasswordInHorizontalForm() {
        return cy.get('.form-horizontal [type="password"]');
    }
    getRememberMeCheckbox() {
        return cy.get('.checkbox .label .custom-checkbox');
    }
    getSignInButton() {
        return cy.get('.form-horizontal').contains('Sign in').eq(0);
    }
}