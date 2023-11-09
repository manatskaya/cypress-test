describe('first test suite', () => {
        it('first test', () => {
                cy.visit('pages/forms/layouts');
                cy.get(".form-inline .appearance-filled.size-medium.status-primary.shape-rectangle.transitions").should("contain.text", "Submit")
        });
});