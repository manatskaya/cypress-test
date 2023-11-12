describe('Verify header and titles', () => {
    it('Verify header content', () => {
            cy.visit('/auth/register');
            cy.get('h1#title.title').should('contain', 'Register');
    });
    it('Verify fields titles', () => {
        cy.visit('/auth/register');
        cy.get('[for="input-name"]').should('contain', 'Full name:');
        cy.get('[for="input-email"]').should('have.text', 'Email address:');
        cy.get('[for="input-password"]').should('have.text','Password:');
        cy.get('[for="input-re-password"]').should('have.text', 'Repeat password:');
        cy.get('.label .text').should('contain', ' Agree to ');
        cy.get('a[target="_blank"] strong').should('contain', 'Terms & Conditions');
    });
});