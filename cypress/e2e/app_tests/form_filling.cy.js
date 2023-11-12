describe('Verify form filling', () => {
    it('Form filling and data filled', () => {
            cy.visit('/auth/register');
                function fillAndValidateFormData(selectorWithoutText, inputText, selectorWithText) {
                    cy.get(selectorWithoutText).focus().realType(inputText);
                    cy.get(selectorWithText).should('have.value', inputText);
                }

            fillAndValidateFormData('#input-name', 'Name', 'input#input-name[ng-reflect-model]');
            fillAndValidateFormData('#input-email', 'test@email.com', 'input#input-email[ng-reflect-model]');
            fillAndValidateFormData('#input-password', '123456', 'input#input-password[ng-reflect-model]');
            fillAndValidateFormData('#input-re-password', '123456', 'input#input-re-password[ng-reflect-model]');
            

            cy.get('.label .custom-checkbox').realClick()
                .should('have.class', 'custom-checkbox checked');
            
            cy.wait(1000);
            cy.get('.appearance-filled.full-width.size-large.status-primary.shape-rectangle.transitions').realClick();
    });
});