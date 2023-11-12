describe('Verify fields validation', () => {
    it('Verify header content', () => {

        cy.visit('/auth/register');
        function verifyHeaderContent(selector, index, errorMessage) {
            cy.get(selector).focus().realType('N');
            cy.get('body').click();
            cy.get('.form-control-group .caption.status-danger').as('error');
            cy.get('@error').eq(index).should('contain', errorMessage);
        }
            
        verifyHeaderContent('#input-name', 0, ' Full name should contains from 4 to 50 characters ');
        verifyHeaderContent('#input-email', 1, ' Email should be the real one! ');
        verifyHeaderContent('#input-password', 2, ' Password should contain from 4 to 50 characters ');

    });
});