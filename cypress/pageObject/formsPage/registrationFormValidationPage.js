export class RegistrationFormValidation {
    getNameInput() {
        return cy.get('#input-name');
    }
    getEmailInput() {
        return cy.get('#input-email');
    }
    getPassword() {
        return cy.get('#input-password');
    }
    getBodySelector() {
        return cy.get('body');
    }
    getErrorMessage(errorIndex){
        return cy.get('.form-control-group .caption.status-danger').eq(errorIndex);
    }

}