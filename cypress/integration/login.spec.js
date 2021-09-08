const { createTypeReferenceDirectiveResolutionCache } = require('typescript')
const data = require('../fixtures/example.json')

context ('User login', () => {
  
  beforeEach(() => {
    cy.visit('https://capstone-q2.vercel.app/')
  })

  it('If user already have register, he will be able to do login', () => {
    cy.get('.bOirPQ').click()
  })
})