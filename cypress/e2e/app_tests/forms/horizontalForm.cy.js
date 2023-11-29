import { clearEmailField, typeEmailInEmailField, clearPasswordField, typePasswordInPasswordField, clickRememberMeCheckbox, clickSignInButton,} from "../../../models/formsModel/horizontalFormModel";
import { navigateToURL } from "../../../models/helpers";

describe('Verify Form layout page', () => {
    it('Clear and fill data in Horizontal form', () => {
            navigateToURL('/pages/forms/layouts');
            clearEmailField();
            typeEmailInEmailField('test@email.com');
            clearPasswordField();
            typePasswordInPasswordField('123456');
            clickRememberMeCheckbox();
            clickSignInButton();
    });
});