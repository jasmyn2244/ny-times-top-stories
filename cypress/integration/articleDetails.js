describe('User can view article details', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/Science.json?api-key=8ZDg0yzMYeR4UjC2L9XmjGheLsAz7rJA', { fixture: 'articles.json' }).as('getArticles')
    cy.get('[data-cy=section-button')
      .eq(2).contains('Science').click()
    cy.wait('@getArticles')
    cy.get('[data-cy=card]')
      .eq(0).click()
  })

  it('Should show article details when a user visits the page', () => {
    cy.get('[data-cy="button"]').contains('Back to All Articles')
    cy.get('[data-cy="details-title"]')
    cy.get('[data-cy="byline"]')
    cy.get('[data-cy="published-date"]')
    cy.get('[data-cy="section"]')
    cy.get('[data-cy="abstract"]')
    // cy.get('.full-article-button > a').invoke('removeAttr', 'target').click()
    cy.get('[data-cy="full-article-button"]').click()
  })
})