/// <reference types="Cypress" />

import articles from '../support/pages/articles'

describe('', () => {
  // HOOK -> trechos que devem ser executados antes ou depois do teste
  beforeEach(() => {
    // Arrange
    cy.login()
    cy.visit('/')
  })
  it('Cadastro de um novo artigo', () => {
    articles.acessarOFormulario()
    articles.preencherOFormulario()
    articles.submeterFormulario()
    articles.artigoCriado()
  })
})
// AAA -> Arrange, act, assert
// Preparar, Executar/Agir, validar
