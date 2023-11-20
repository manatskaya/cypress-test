describe('Working with tables', () => {
    it('Verify adding new row in the table', () => {
            cy.visit('/pages/tables/smart-table');
            cy.get('a .nb-plus').realClick();
            cy.wait(1000);
            cy.get('ng2-smart-table tr:nth-child(3) td input').each(($el) =>{   
                cy.wrap($el).type('text');
            });
            cy.get('i.nb-checkmark').realClick();
            cy.wait(1000);
            
            cy.get('th.ng2-smart-th.id.ng-star-inserted input')
                .realClick()
                .type('text')
            cy.wait(100);
            cy.get('ng2-smart-table tbody tr')
                .should('have.length', 1)
                .and('contain.text', 'text')
    });
});
