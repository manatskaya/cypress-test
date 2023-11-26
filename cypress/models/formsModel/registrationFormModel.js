import { RegistrationFormPage } from "../../pageObject/formsPage/registrationFormPage";

const registrationFormPage = new RegistrationFormPage();

const fillFormInput = (formInput, value) => {

    formInput.focus();
    
    formInput.realClick();
    
    formInput.clear();
    
    formInput.type(value);
    
}

export function fillNameInput (value)  {
    const nameInput = registrationFormPage.getNameInput();
    fillFormInput(nameInput, value);
}

export function fillEmailInput(value) {
    const emailInput = registrationFormPage.getEmailInput();
    fillFormInput(emailInput, value); 
}

export function fillPasswordInput(value) {
    const passwordInput = registrationFormPage.getPasswordInput();
    fillFormInput(passwordInput, value);
}

export function fillConfirmPassword(value) {
    const confirmPassword = registrationFormPage.getConfirmPasswordInput();
    fillFormInput(confirmPassword, value);
}

export function tickAgreeToTermsCheckbox() {
    registrationFormPage.getAgreeToTermsCheckbox().realClick();
}

export function verifyNameInputFilled(name) {
    registrationFormPage.getNameInputFilled()
    .should('have.value', name);
}

export function verifyEmailInputFilled(email) {
    registrationFormPage.getEmailInputFilled()
    .should('have.value', email);
}

export function verifyPasswordInputFilled(password) {
    registrationFormPage.getPasswordInputFilled()
    .should('have.value', password);
}

export function verifyConfirmPasswordFilled(confirmationPassword) {
    registrationFormPage.getConfirmPasswordFilled()
    .should('have.value', confirmationPassword);
}
export function verifyAgreeToTermsChecked(state) {
    registrationFormPage.getAgreeToTermsCheckbox()
    .should('have.class', state);
}   

export function clickOnRegistrationButton() {
    cy.wait(1000);
       registrationFormPage.getRegisterButton().realClick();
}
