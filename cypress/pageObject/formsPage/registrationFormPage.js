export class RegistrationFormPage {
    getNameInput() {
        return cy.get('form')
        .find('#input-name');
    }
    getEmailInput() {
        return cy.get('form')
        .find('#input-email');
    }
    getPasswordInput() {
        return cy.get('form')
        .find('#input-password');
    }
    getConfirmPasswordInput() {
        return cy.get('form')
        .find('#input-re-password');
    }
    getNameInputFilled() {
        return cy.get('form')
        .find('input#input-name[ng-reflect-model]');
    }
    getEmailInputFilled() {
        return cy.get('form')
        .find('input#input-email[ng-reflect-model]');
    }
    getPasswordInputFilled() {
        return cy.get('form')
        .find('input#input-password[ng-reflect-model]');
    }
    getConfirmPasswordFilled() {
        return cy.get('form')
        .find('input#input-re-password[ng-reflect-model]');
    }
    getAgreeToTermsCheckbox() {
        return cy.get('.label .custom-checkbox');
    }
    getRegisterButton() {
        return cy.get('.appearance-filled.full-width.size-large.status-primary.shape-rectangle.transitions');
    }

}