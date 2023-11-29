export class HeaderRegistrationFrom {
    getHeaderTitleOnRegistrationForm() {
        return cy.get('h1#title.title');
    }
    getNameInputTitle() {
        return cy.get('[for="input-name"]');
    }
    getEmailInputTitle() {
        return cy.get('[for="input-email"]');
    }
    getPasswordInputTitle() {
        return cy.get('[for="input-password"]');
    }
    getConfirmPasswordInputTitle() {
        return cy.get('[for="input-re-password"]');
    }
    getAgreeToCheckboxText() {
        return cy.get('.label .text');
    }
    getTermsAndConditionsText() {
        return cy.get('a[target="_blank"] strong');
    }

}