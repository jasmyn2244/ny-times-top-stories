describe('User can select a section and browse articles', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/Science.json?api-key=8ZDg0yzMYeR4UjC2L9XmjGheLsAz7rJA', { fixture: 'articles.json' }).as('getArticles')
  })

  it('Should render cards to the page when users click a section button', () => {
    cy.get('[data-cy=section-button')
      .eq(2).contains('Science').click()
    cy.wait('@getArticles')
    cy.get('[data-cy=card]').should('have.length', 3)
    cy.get('[data-cy=title]').should('have.length', 3)
    cy.get('[data-cy=card]')
      .eq(0).click()
  })
})