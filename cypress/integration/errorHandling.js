describe('User can view article details', () => {

  it('Should take user to a 402 error page if they type an incorrect url', () => {
    cy.visit('http://localhost:3000/ithinkimlost')
    cy.get('p').contains('Looks like you\'re lost. The URL entered doesn\'t exist. Let\'s get you back home. ')
    cy.get('.home-button').click()
    cy.get('[data-cy=section-button')
      .eq(0).contains('Business')
  })

  it('Should show an error page if there is an issue with the fetch call', () => {
    cy.visit('http://localhost:3000')
    cy.intercept({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/Science.json?api-key=8ZDg0yzMYeR4UjC2L9XmjGheLsAz7rJA'
    }, {
      forceNetworkError: true
    })

    cy.get('[data-cy=section-button')
      .eq(2).contains('Science').click()
    cy.get('p')
    cy.get('.home-button').click()
    cy.get('[data-cy=section-button')
      .eq(0).contains('Business')
  })
})