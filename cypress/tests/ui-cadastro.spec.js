/// <reference types="Cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      // path = api/users
      method: 'POST',
      // hostname= https://api.realworld.io/
      path: '/api/users'
    }, {
      fixture: 'cadastro'
    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('Chapter V agilizei')
    cy.get('[placeholder=Email]').type('chap@mail.com')
    cy.get('[placeholder=Password]').type('@chapterv')
    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('E-mail ja existente', () => {
    cy.intercept({
      method: 'POST',
      // hostname= https://api.realworld.io/
      // path = api/users
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'email-existente'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type('Chapter V agilizei')
    cy.get('[placeholder=Email]').type('chapterv@mail.com')
    cy.get('[placeholder=Password]').type('@chapterv')
    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })

  it('Username ja existente', () => {
    cy.intercept({
      method: 'POST',
      // hostname= https://api.realworld.io/
      // path = api/users
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'usuario-existente'
    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type('Chapter V agilizei')
    cy.get('[placeholder=Email]').type('chapterv@mail.com')
    cy.get('[placeholder=Password]').type('@chapterv')
    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })
})
