describe('Form layout page', () => {
    it('Type data in Horizontal form', () => {
        cy.visit('/pages/forms/layouts');
        cy.get('.form-horizontal .col-sm-9 .input-full-width.size-medium.shape-rectangle[type="email"]').clear().type('test@email.com')
        cy.get('.form-horizontal .col-sm-9 .input-full-width.size-medium.shape-rectangle[type="password"]').clear().type('123456)')
        
        cy.get('.checkbox .label .custom-checkbox').click()
        cy.get('.appearance-filled.size-medium.status-warning.shape-rectangle.transitions').click()
    });
});