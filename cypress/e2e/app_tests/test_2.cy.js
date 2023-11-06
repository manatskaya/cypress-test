describe('Modal overlays page', () => {
    it('Verify modal dialog', () => {
        cy.visit('/pages/modal-overlays/dialog');
        cy.get('.result-from-dialog .appearance-filled.size-medium.status-primary.shape-rectangle.transitions').click()

        cy.get('[data-cy="modal-window"]').should('be.visible').should('have.text', 'Enter your name')
        cy.get('.appearance-filled.size-medium.status-success.shape-rectangle.transitions').should('have.text', 'Submit')
        cy.get('.cancel.appearance-filled.size-medium.status-danger.shape-rectangle.transitions').should('have.text', 'Cancel')
    });
});