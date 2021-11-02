// açoes da página

const el = require('./elements').ELEMENTS
const articleName = 'New Article' + new Date().getTime()
class Articles {
  // act
  // acesso ao form
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  // preencher o formulario
  preencherOFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Article Description')
    cy.get(el.inputBody).type('Article Body')
    cy.get(el.inputTag).type('Article tags')
  }

  // submeter formulario
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  // assert
  // verificar se foi criado com sucesso
  artigoCriado () {
    cy.contains(articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
