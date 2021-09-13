context ('Landing page buttons working fine', () => {
  
  beforeEach(() => {
    cy.visit('https://capstone-q2.vercel.app/')
  })

  it('Login button should be able to click, and redirect to /login', () => {
    cy.get('.bOirPQ').click()
    cy.url().should('contain', 'login')
  })

  it('Register button should be able to click, and redirect to /choosePage', () => {
    cy.get('.bwHgJh').click()
    cy.url().should('contain', 'choosePage')
  })
})

context ('Choose Page button working as spected', () => {

  beforeEach(() => {
    cy.visit('https://capstone-q2.vercel.app/choosePage')
  })

  it ('Patient button should be able to click, and redirect to /patient', () => {
    cy.get('.bOirPQ').click()
    cy.url().should('contain', 'patient')
  })

  it ('Professional button should be able to click, and redirect to /professional', () => {
    cy.get('.bwHgJh').click()
    cy.url().should('contain', 'professional')
  })
})
