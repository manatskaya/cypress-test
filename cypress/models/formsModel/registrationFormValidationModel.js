import { RegistrationFormValidation } from "../../pageObject/formsPage/registrationFormValidationPage"; 

const registrationFormValidation = new RegistrationFormValidation();

const initializeFormInput = (formInput, value) => {

    formInput.focus();
    
    formInput.click();
    
    formInput.realType(value);
    
}

function specifyNameInput(value) {
    const nameInput = registrationFormValidation.getNameInput();
    initializeFormInput(nameInput, value);
}

function specifyEmailInput(value) {
    const emailInput = registrationFormValidation.getEmailInput();
    initializeFormInput(emailInput, value);
}

function specifyPasswordInput(value) {
    const passwordInput = registrationFormValidation.getPassword();
    initializeFormInput(passwordInput, value);
}

function verifyNameErrorMessage(errorIndex, errorMessage) {
    registrationFormValidation.getErrorMessage(errorIndex)
    .should('contain', errorMessage);
}

function verifyEmailErrorMessage(errorIndex, errorMessage) {
    registrationFormValidation.getErrorMessage(errorIndex)
    .should('contain', errorMessage);
}

function verifyPasswordErrorMessage(errorIndex, errorMessage) {
    registrationFormValidation.getErrorMessage(errorIndex)
    .should('contain', errorMessage);
}
export{ specifyNameInput, specifyEmailInput, specifyPasswordInput, verifyNameErrorMessage, verifyEmailErrorMessage, verifyPasswordErrorMessage };