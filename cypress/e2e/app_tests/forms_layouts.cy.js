describe('Verify Form layout page', () => {
    it('Type data in Horizontal form', () => {
        cy.visit('/pages/forms/layouts');
        cy.get('.form-horizontal [type="email"]').clear().type('test@email.com')
        cy.get('.form-horizontal [type="password"]').clear().type('123456)')
        
        cy.get('.checkbox .label .custom-checkbox').click()
        cy.get('.form-horizontal').contains('Sign in').eq(0).click()
    });
});