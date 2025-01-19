/// <reference types="cypress" />

class LoginPage {
    visitarPaginaDeLogin() {
      cy.visit('/login')
    }
  
    preencherFormulario(email, senha) {
      cy.get('[data-testid="email"]').type(email)
      cy.get('[data-testid="senha"]').type(senha)
    }
  
    submeterFormulario() {
      cy.get('[data-testid="entrar"]').click()
    }
  
  }
  
  export default new LoginPage()
  