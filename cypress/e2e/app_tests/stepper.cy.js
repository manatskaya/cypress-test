describe('Verify Stepper page', () => {

    context('Check Step component', () => {
        it('Verify section title and buttons are clickable', () => {
            cy.visit('/pages/layout/stepper');
            const testData = ['Step content #1', 'Step content #2', 'Step content #3', 'Step content #4']
                cy.get('.horizontal .step-content h3.ng-star-inserted').as('header')
                cy.get('.horizontal .ng-star-inserted.appearance-filled.size-medium.status-primary.shape-rectangle.ng-star-inserted.transitions').eq(1).as("next")

                for (let index = 0; index < testData.length; index++) {
                    cy.get('@header').should('contain.text', testData[index])
                    index !==3 ? cy.get('@next').click() : "Finish"
            
                }

        });
    });
});