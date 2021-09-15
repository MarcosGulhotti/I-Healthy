context ('Patient form working fine', () => {
  let randomNumber = Math.random() * (100000 - 1) + 1

  it ('User must be redirected to login page after submit the patient form', () => {
    cy.visit('https://capstone-q2.vercel.app/patient')

    cy.get(':nth-child(1) > input').type('Arthur')
    cy.get(':nth-child(2) > input').type(`${randomNumber}@email.net`)
    cy.get(':nth-child(3) > input').type('Arthur@123')
    cy.get(':nth-child(4) > input').type('1996-06-09')
    cy.get(':nth-child(5) > input').type('000.000.000-00')
    cy.get('select').select('Masculino')
    cy.get(':nth-child(7) > input').type('Rua teste, 203')

    cy.get('.box-left > .sc-dlfnuX').click()
    cy.url().should('contain', 'login')
  })

  it ('GET request should response with status 200 and registered email is a valid one', () => {
    cy.request({
      method: 'GET',
      url: 'https://apicapstone.herokuapp.com/users'
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.forEach(el => el.email === `${randomNumber}@email.net`))
    })
  })
})

context ('Professional form working fine', () => {
  let randomNumber = Math.random() * (100000 - 1) + 1

  it ('User must be redirected to login page after submit the professional form', () => {
    cy.visit('https://capstone-q2.vercel.app/professional')
  
    cy.get(':nth-child(1) > input').type('Teste', {force: true})
    cy.get(':nth-child(2) > input').type(`${randomNumber}@email.net`, {force: true})
    cy.get(':nth-child(3) > input').type('Arthur@123', {force: true})
    cy.get(':nth-child(4) > input').type('1996-06-09', {force: true})
    cy.get(':nth-child(5) > input').type('000.000.000-00', {force: true})
    cy.get(':nth-child(6) > select').select('Masculino', {force: true})
    cy.get(':nth-child(7) > input').type('Rua teste, 203', {force: true})
    cy.get(':nth-child(8) > input').type('12123', {force: true})
    cy.get(':nth-child(9) > select').select('Pediatria')
    cy.get(':nth-child(10) > select').select('Semanal', {force: true})
    cy.get(':nth-child(11) > select').select('Consulta Online', {force: true})
    cy.get(':nth-child(12) > select').select('Matutino', {force: true})

    cy.get('.box-left > .sc-dlfnuX').click()
    cy.url().should('contain', 'login')
  })
})