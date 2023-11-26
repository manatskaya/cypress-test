import { HeaderRegistrationFrom } from "../../pageObject/formsPage/headerVerificationRegistrationPage";

const headerRegistrationPage = new HeaderRegistrationFrom();

export function verifyHeaderTitle(title) {
    headerRegistrationPage.getHeaderTitleOnRegistrationForm()
    .should('contain', title);
}
export function verifyNameInputTitle(nameTitle) {
    headerRegistrationPage.getNameInputTitle()
    .should('have.text', nameTitle);
}
export function verifyEmailInputTitle(emailTitle) {
    headerRegistrationPage.getEmailInputTitle()
    .should('have.text', emailTitle); 
}
export function verifyPasswordInputTitle(passwordTitle) {
    headerRegistrationPage.getPasswordInputTitle()
    .should('have.text', passwordTitle);
}
export function verifyConfirmPasswordInputTitle(confirmTitle) {
    headerRegistrationPage.getConfirmPasswordInputTitle()
    .should('have.text', confirmTitle);
}
export function verifyAgreeToTerms(agreeText) {
    headerRegistrationPage.getAgreeToCheckboxText()
    .should('contain', agreeText);
}
export function verifyTermsAndConditionsText(termsText) {
    headerRegistrationPage.getTermsAndConditionsText()
    .should('contain', termsText);
}