/// <reference types="cypress" />

import LoginPage from '../../support/pages/login_pages'

describe('Testes de Login', () => {
  let usuarioFake // Variável para armazenar os dados do usuário

  // Carrega os dados da fixture antes de rodar os testes
  before(() => {
    cy.fixture('usuarioFake').then((usuario) => {
      usuarioFake = usuario // Salva os dados na variável
    })
  })

  it('Login com usuário válido', () => {
    // Verifica se os dados do usuário foram carregados corretamente
    expect(usuarioFake).to.not.be.undefined

    // Acessa a página de login e realiza o login
    LoginPage.visitarPaginaDeLogin()
    LoginPage.preencherFormulario(usuarioFake.email, usuarioFake.senha)
    LoginPage.submeterFormulario()

  })

  it('Login com usuário invalido', () => {
    // Acessa a pagina de login
    LoginPage.visitarPaginaDeLogin()

    // Tentativa de login com usuário inexistente
    cy.get('[data-testid="email"]').type('usuario_invalido@teste.com')
    cy.get('[data-testid="senha"]').type('senhainvalidateste')
    cy.get('[data-testid="entrar"]').click()

    // Valida mensagem de erro
    cy.get('.alert > :nth-child(2)').should('have.text', 'Email e/ou senha inválidos')
  })
})
