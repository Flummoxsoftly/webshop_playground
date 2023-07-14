describe('Home Page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('a:contains(About)').click()

    cy.get('a:contains(Home)').click()

    cy.get('a:contains(Contact)').click()

    cy.get('a:contains(Home)').click()

    cy.get('a:contains(Male)').click()

    cy.get('img').should('have.length',9)


  })
})
