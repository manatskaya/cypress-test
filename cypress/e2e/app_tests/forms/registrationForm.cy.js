import { fillNameInput, fillEmailInput, fillPasswordInput, fillConfirmPassword, tickAgreeToTermsCheckbox, verifyAgreeToTermsChecked, verifyNameInputFilled, verifyEmailInputFilled, verifyPasswordInputFilled, verifyConfirmPasswordFilled, clickOnRegistrationButton } from "../../../models/formsModel/registrationFormModel";

describe('Verify form filling', () => {
    beforeEach(() => {
        cy.visit('/auth/register');
    })
    it('Verify form filling and data is correct', () => {

        fillNameInput('Name');
        fillEmailInput('email@gmail.com');
        fillPasswordInput('123456');
        fillConfirmPassword('123456');
        tickAgreeToTermsCheckbox();
        verifyAgreeToTermsChecked('custom-checkbox checked');
        verifyNameInputFilled('Name');
        verifyEmailInputFilled('email@gmail.com');
        verifyPasswordInputFilled('123456');
        verifyConfirmPasswordFilled('123456');
        clickOnRegistrationButton();
    });
});
           
            
    