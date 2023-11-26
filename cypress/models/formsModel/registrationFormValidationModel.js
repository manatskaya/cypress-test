import { RegistrationFormValidation } from "../../pageObject/formsPage/registrationFormValidationPage"; 

const registrationFormValidation = new RegistrationFormValidation();

const initializeFormInput = (formInput, value) => {

    formInput.focus();
    
    formInput.click();
    
    formInput.realType(value);
    
}

export function specifyNameInput(value) {
    const nameInput = registrationFormValidation.getNameInput();
    initializeFormInput(nameInput, value);
}

export function specifyEmailInput(value) {
    const emailInput = registrationFormValidation.getEmailInput();
    initializeFormInput(emailInput, value);
}

export function specifyPasswordInput(value) {
    const passwordInput = registrationFormValidation.getPassword();
    initializeFormInput(passwordInput, value);
}

export function verifyNameErrorMessage(errorIndex, errorMessage) {
    registrationFormValidation.getErrorMessage(errorIndex)
    .should('contain', errorMessage);
}

export function verifyEmailErrorMessage(errorIndex, errorMessage) {
    registrationFormValidation.getErrorMessage(errorIndex)
    .should('contain', errorMessage);
}

export function verifyPasswordErrorMessage(errorIndex, errorMessage) {
    registrationFormValidation.getErrorMessage(errorIndex)
    .should('contain', errorMessage);
}