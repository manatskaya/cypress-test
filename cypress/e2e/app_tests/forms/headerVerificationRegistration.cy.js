import { verifyAgreeToTerms, verifyConfirmPasswordInputTitle, verifyEmailInputTitle, verifyHeaderTitle, verifyNameInputTitle, verifyPasswordInputTitle, verifyTermsAndConditionsText } from "../../../models/formsModel/headerVerificationRegistrationModel";

describe('Verify header and titles', () => {
    beforeEach(() => {
        cy.visit('/auth/register');
    })
        it('Verify header title contains correct text', () => {
            verifyHeaderTitle('Register');
        });
        it('Verify form fields titles', () => {
            verifyNameInputTitle('Full name:');
            verifyEmailInputTitle('Email address:');
            verifyPasswordInputTitle('Password:');
            verifyConfirmPasswordInputTitle('Repeat password:');
            verifyAgreeToTerms( ' Agree to ');
            verifyTermsAndConditionsText('Terms & Conditions');
        });
});