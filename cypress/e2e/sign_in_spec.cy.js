describe('Sign In', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000')

        cy.contains('Login').click()

    })
 })
