function navigateToURL(endpoint) {
    cy.visit(endpoint);
}
function verifyLandedURLisCorrect(endpoint) {
    cy.url().should('contain', endpoint);
}
export { navigateToURL, verifyLandedURLisCorrect }