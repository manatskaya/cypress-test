describe('Editing table', () => {
    it('Verify edit of the row in table', () => {
            cy.visit('/pages/tables/smart-table');
            
            cy.get('ng2-smart-table tbody > tr:nth-child(1)').as('firstRow');

            cy.get('@firstRow')
                .find('i.nb-edit')
                .realClick();

            cy.get('@firstRow')
                .find('input[placeholder="ID"]')
                .clear()
                .type('edited')

            cy.get('@firstRow')
                .find('i.nb-checkmark')
                .realClick();

            cy.get('@firstRow')
                .find('div.ng-star-inserted')
                .should('contain.text', 'edited')
    });
});
