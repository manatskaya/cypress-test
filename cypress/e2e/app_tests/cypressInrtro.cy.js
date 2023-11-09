describe('first test suite', () => {
        it('first test', () => {
                cy.visit('pages/forms/layouts');
                cy.get(".form-inline .appearance-filled.size-medium.status-primary.shape-rectangle.transitions").should("contain.text", "Submit")
        });
});
describe('second test suite', () => {
        it('first test',() => {
                cy.visit('/pages/forms/layouts');
                cy.get('.inner-circle').eq(0).prev();
        })
        it('Verify real event',() => {
                cy.visit('/pages/forms/layouts');
                cy.get('span:contains("Option 1")').realClick({pointer:'mouse'});
                cy.get('#inputEmail1').focus().realType('Some text {enter}');
        })
        it('Verify tooltip',() => {
                cy.visit('pages/modal-overlays/tooltip');
                cy.contains('Show Tooltip').eq(0).realHover();
        })
})