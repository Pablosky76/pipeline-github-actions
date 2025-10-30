describe('Página de ejemplo de Cypress', () => {
  it('carga correctamente', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})
