declare namespace Cypress {
    interface Chainable {
  
        //Arquivo com comandos customizados
      /**
       * @example cy.login()
       */
      login(): void
  
      /**
       * @example cy.token()
       */
  
      token(): void
  
    }
  }