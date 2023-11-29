import { HeaderRegistrationFrom } from "../../pageObject/formsPage/headerVerificationRegistrationPage";

const headerRegistrationPage = new HeaderRegistrationFrom();

function verifyHeaderTitle(title) {
    headerRegistrationPage.getHeaderTitleOnRegistrationForm()
    .should('contain', title);
}
function verifyNameInputTitle(nameTitle) {
    headerRegistrationPage.getNameInputTitle()
    .should('have.text', nameTitle);
}
function verifyEmailInputTitle(emailTitle) {
    headerRegistrationPage.getEmailInputTitle()
    .should('have.text', emailTitle); 
}
function verifyPasswordInputTitle(passwordTitle) {
    headerRegistrationPage.getPasswordInputTitle()
    .should('have.text', passwordTitle);
}
function verifyConfirmPasswordInputTitle(confirmTitle) {
    headerRegistrationPage.getConfirmPasswordInputTitle()
    .should('have.text', confirmTitle);
}
function verifyAgreeToTerms(agreeText) {
    headerRegistrationPage.getAgreeToCheckboxText()
    .should('contain', agreeText);
}
function verifyTermsAndConditionsText(termsText) {
    headerRegistrationPage.getTermsAndConditionsText()
    .should('contain', termsText);
}
export { verifyHeaderTitle, verifyNameInputTitle, verifyEmailInputTitle, verifyPasswordInputTitle, verifyConfirmPasswordInputTitle, verifyAgreeToTerms, verifyTermsAndConditionsText };