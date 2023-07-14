describe('Home Page', () => {
    it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('a:contains(Sign Up)').click()

    cy.get('#user_email').type('fakeemail@fake.com')

    cy.get('#user_password').type('foobar')

    cy.get('#user_password_confirmation').type('foobar')

    cy.contains('Sign up').click()

    cy.clean_db()

    })
})
