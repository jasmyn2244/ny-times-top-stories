describe('Home page cypress test', () => {

  beforeEach(() => {
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=8ZDg0yzMYeR4UjC2L9XmjGheLsAz7rJA`,
      { fixture: 'articles.json' }).as('getArticles')

    cy.visit('http://localhost:3000/')
  })

  it('Should render elements to the page', () => {
    cy.get('[data-cy=icon]').should('have.attr', 'src', '/static/media/news.7a62bf59f9350746f279.png')
    cy.get('[data-cy=heading]').contains('New York Times Top Stories')
    cy.get('[data-cy=section-button')
      .eq(0).contains('Business')
    cy.get('[data-cy=section-button')
      .eq(1).contains('Politics')
    cy.get('[data-cy=section-button')
      .eq(2).contains('Science')
    cy.get('[data-cy=section-button')
      .eq(3).contains('Technology')
    cy.get('[data-cy=section-button')
      .eq(4).contains('World')
    cy.get('[data-cy=welcom-message]').contains('Select a news section that captures your interest to begin browsing news articles.')
  })
})