describe('first test suite',() =>{
    context('some test case',()=>{
        it('first test',()=>{
cy.visit('layout/accordion');
cy.url().should('contain', 'layout/accordion')
            });
        });
    describe('second describe inside of describe', ()=>{
        it('second test should fail', ()=>{
cy.visit('layout/accordion');
cy.url().should('contain', 'layout/accordion');
cy.get("button.appearance-filled.size-medium.status-primary.shape-rectangle.transitions").should("contain.text", "Toggle First Items")
        });
            });
});