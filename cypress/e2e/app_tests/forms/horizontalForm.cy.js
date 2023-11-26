import { clearEmailField, typeEmailInEmailField, clearPasswordField, typePasswordInPasswordField, clickRememberMeCheckbox, clickSignInButton,} from "../../../models/formsModel/horizontalFormModel";

describe('Verify Form layout page', () => {
    it('Clear and fill data in Horizontal form', () => {
        cy.visit('/pages/forms/layouts');
            clearEmailField();
            typeEmailInEmailField('test@email.com');
            clearPasswordField();
            typePasswordInPasswordField('123456');
            clickRememberMeCheckbox();
            clickSignInButton();
    });
});