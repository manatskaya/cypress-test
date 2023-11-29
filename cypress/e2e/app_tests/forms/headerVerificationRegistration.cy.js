import { verifyAgreeToTerms, verifyConfirmPasswordInputTitle, verifyEmailInputTitle, verifyHeaderTitle, verifyNameInputTitle, verifyPasswordInputTitle, verifyTermsAndConditionsText } from "../../../models/formsModel/headerVerificationRegistrationModel";
import { navigateToURL, verifyLandedURLisCorrect } from "../../../models/helpers";

describe('Verify header and titles', () => {
    beforeEach(() => {
        navigateToURL('/auth/register');
        verifyLandedURLisCorrect ('/auth/register');
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