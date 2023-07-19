describe('Sign In', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000')

        cy.contains('Login').click()

        cy.get('#user_email').type('fakeemail@fake.com')

        cy.get('#user_password').type('foobar')

        cy.get("input[type='submit']").click()

        cy.contains('button', 'Log Out').click()

    })
 })
