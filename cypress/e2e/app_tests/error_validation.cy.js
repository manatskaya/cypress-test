describe('Verify fields validation', () => {
    it('Verify header content', () => {
            cy.visit('/auth/register');

            cy.get('#input-name').focus().realType('N');
            cy.get("body").click();
            cy.get('.form-control-group .caption.status-danger').as('error');
            cy.get('@error').eq(0).should('contain', ' Full name should contains from 4 to 50 characters ');

            cy.get('#input-email').focus().realType('test.com');
            cy.get("body").click();
            cy.get('@error').eq(1).should('contain', ' Email should be the real one! ');

            cy.get('#input-password').focus().realType('1');
            cy.get("body").click();
            cy.get('@error').eq(2).should('contain', ' Password should contain from 4 to 50 characters ');
    });
});