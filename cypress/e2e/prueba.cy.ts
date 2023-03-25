
describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('host'))
  })
  it('login', () => {
    cy.login("melenas_doblaktocas@hotmail.com","12345678")
  })
})

