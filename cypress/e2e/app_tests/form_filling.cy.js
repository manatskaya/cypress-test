describe('Verify form filling', () => {
    it.only('Form filling and data filled', () => {

        cy.visit('/auth/register');
            cy.get('form').within(($form) => {
                cy.get('#input-name').focus().realType('Name');
                cy.get('#input-email').focus().realType('test@email.com');
                cy.get('#input-password').focus().realType('123456');
                cy.get('#input-re-password').focus().realType('123456');

                cy.get('input#input-name[ng-reflect-model]').should('have.value', 'Name');
                cy.get('input#input-email[ng-reflect-model]').should('have.value', 'test@email.com');
                cy.get('input#input-password[ng-reflect-model]').should('have.value', '123456');
                cy.get('input#input-re-password[ng-reflect-model]').should('have.value', '123456');
            });
        cy.get('.label .custom-checkbox').realClick()
            .should('have.class', 'custom-checkbox checked');
            
        cy.wait(1000);
        cy.get('.appearance-filled.full-width.size-large.status-primary.shape-rectangle.transitions').realClick();
        });
    });
           
            
    