describe('Smoke', () => {
  it('abre la página de ejemplo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})
