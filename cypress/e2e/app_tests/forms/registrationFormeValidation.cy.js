import { specifyEmailInput, specifyNameInput, specifyPasswordInput, verifyEmailErrorMessage, verifyNameErrorMessage, verifyPasswordErrorMessage } from "../../../models/formsModel/registrationFormValidationModel";
import { navigateToURL, verifyLandedURLisCorrect } from "../../../models/helpers";

describe ('Verify fields validation', () => {
    beforeEach(() => {
        navigateToURL('/auth/register');
        verifyLandedURLisCorrect('/auth/register');
    })
    it('Verify header content', () => {
        specifyNameInput('N');
        specifyEmailInput('N');
        specifyPasswordInput('N');
        verifyNameErrorMessage(0, ' Full name should contains from 4 to 50 characters ');
        verifyEmailErrorMessage(1, ' Email should be the real one! ');
        verifyPasswordErrorMessage(2, ' Password should contain from 4 to 50 characters ');
    })
});