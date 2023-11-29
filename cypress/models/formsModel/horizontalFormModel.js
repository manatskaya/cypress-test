import { HorizontalFormPage } from "../../pageObject/formsPage/horizontalFormPage";

const formPage = new HorizontalFormPage();

function clearEmailField() {
    formPage.getEmailInHorizontalFrom().clear();
}

function typeEmailInEmailField(data) {
    formPage.getEmailInHorizontalFrom().type(data);
}

function clearPasswordField() {
    formPage.getPasswordInHorizontalForm().clear();
}

function typePasswordInPasswordField(value) {
    formPage.getPasswordInHorizontalForm().type(value);
}

function clickRememberMeCheckbox() {
    formPage.getRememberMeCheckbox().click();
}
function clickSignInButton() {
    formPage.getSignInButton().click();
}
export { clearEmailField, typeEmailInEmailField, clearPasswordField , typePasswordInPasswordField, clickRememberMeCheckbox, clickSignInButton };