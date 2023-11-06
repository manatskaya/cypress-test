describe('first test suite', () => {

    context('Check Step component', () => {
        it('Verify section title and buttons are clickable', () => {
            cy.visit('/pages/layout/stepper');
            cy.get('.horizontal .step-content h3.ng-star-inserted').should('contain.text', 'Step content #1')
            cy.get('.horizontal .ng-star-inserted.appearance-filled.size-medium.status-primary.shape-rectangle.ng-star-inserted.transitions').eq(1).click()

            cy.get('.horizontal .step-content h3.ng-star-inserted').should('contain.text', 'Step content #2')
            cy.get('.horizontal .step-content .ng-star-inserted.appearance-filled.size-medium.status-primary.shape-rectangle.transitions.ng-star-inserted').eq(1).click() 

            cy.get('.horizontal .step-content h3.ng-star-inserted').should('contain.text', 'Step content #3')
            cy.get('.horizontal .step-content .ng-star-inserted.appearance-filled.size-medium.status-primary.shape-rectangle.transitions.ng-star-inserted').eq(1).click() 

            cy.get('.horizontal .step-content h3.ng-star-inserted').should('contain.text', 'Step content #4')
            cy.get('.horizontal .step-content .ng-star-inserted.appearance-filled.size-medium.status-primary.shape-rectangle.transitions.ng-star-inserted').eq(0).click() 

        });
    });
});