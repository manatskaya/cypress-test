import { RegistrationFormPage } from "../../pageObject/formsPage/registrationFormPage";

const registrationFormPage = new RegistrationFormPage();

const fillFormInput = (formInput, value) => {

    formInput.focus();
    
    formInput.realClick();
    
    formInput.clear();
    
    formInput.type(value);
    
}

function fillNameInput (value)  {
    const nameInput = registrationFormPage.getNameInput();
    fillFormInput(nameInput, value);
}

function fillEmailInput(value) {
    const emailInput = registrationFormPage.getEmailInput();
    fillFormInput(emailInput, value); 
}

function fillPasswordInput(value) {
    const passwordInput = registrationFormPage.getPasswordInput();
    fillFormInput(passwordInput, value);
}

function fillConfirmPassword(value) {
    const confirmPassword = registrationFormPage.getConfirmPasswordInput();
    fillFormInput(confirmPassword, value);
}

function tickAgreeToTermsCheckbox() {
    registrationFormPage.getAgreeToTermsCheckbox().realClick();
}

function verifyNameInputFilled(name) {
    registrationFormPage.getNameInputFilled()
    .should('have.value', name);
}

function verifyEmailInputFilled(email) {
    registrationFormPage.getEmailInputFilled()
    .should('have.value', email);
}

function verifyPasswordInputFilled(password) {
    registrationFormPage.getPasswordInputFilled()
    .should('have.value', password);
}

function verifyConfirmPasswordFilled(confirmationPassword) {
    registrationFormPage.getConfirmPasswordFilled()
    .should('have.value', confirmationPassword);
}
function verifyAgreeToTermsChecked(state) {
    registrationFormPage.getAgreeToTermsCheckbox()
    .should('have.class', state);
}   

function clickOnRegistrationButton() {
    cy.wait(1000);
       registrationFormPage.getRegisterButton().realClick();
}
export {fillNameInput, fillEmailInput, fillPasswordInput, fillConfirmPassword, tickAgreeToTermsCheckbox, verifyNameInputFilled, verifyEmailInputFilled, verifyPasswordInputFilled, verifyConfirmPasswordFilled, verifyAgreeToTermsChecked, clickOnRegistrationButton};