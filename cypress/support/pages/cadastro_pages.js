class CadastroPage {
    visitarPaginaDeCadastro() {
      cy.visit('/cadastrarusuarios') // Ajuste a URL conforme necessário
    }
  
    preencherFormulario(nome, email, senha) {
      cy.get('[data-testid="nome"]').type(nome)
      cy.get('[data-testid="email"]').type(email)
      cy.get('[data-testid="password"]').type(senha)
    }
  
    submeterFormulario() {
      cy.get('[data-testid="cadastrar"]').click()
    }
  
    validarCadastroSucesso() {
      cy.contains('Cadastro realizado com sucesso').should('be.visible')
    }
  }
  
  export default new CadastroPage()
  