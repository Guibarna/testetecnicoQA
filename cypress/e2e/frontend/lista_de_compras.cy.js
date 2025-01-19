/// <reference types="cypress" />

import LoginPage from '../../support/pages/login_pages'
import { faker } from '@faker-js/faker'


describe('Lista de compra', () => {
  let usuarioFake // Variável para armazenar os dados do usuário

  // Carrega os dados da fixture antes de rodar os testes
  before(() => {
    cy.fixture('usuarioFake').then((usuario) => {
      usuarioFake = usuario // Salva os dados na variável
    })
  })


  it('Validando lista de compras', () => {

    expect(usuarioFake).to.not.be.undefined

    // Acessa a página de login e realiza o login
    LoginPage.visitarPaginaDeLogin()
    LoginPage.preencherFormulario(usuarioFake.email, usuarioFake.senha)
    LoginPage.submeterFormulario()
    cy.url().should('eq', 'https://front.serverest.dev/home')//validando redirecionamento à url home

    cy.get(':nth-child(1) > .card-body > .card-title')
    .invoke('text')
    .then((nomeProduto) => {
      expect(nomeProduto.trim()).to.not.be.empty // Valida que o texto não está vazio
      cy.wrap(nomeProduto.trim()).as('nomeProduto') // Armazena o nome do produto sem espaços extras
    })

    // Clica no botão Adicionar a Lista do primeiro item da lista
    cy.get('[data-testid="adicionarNaLista"]').first().click()

    // Valida o nome do produto, se esta armazenado corretamente  
    cy.get('@nomeProduto').then((nomeProduto) => {
      cy.log(`Produto adicionado à lista: ${nomeProduto}`) // Exibe o nome capturado no log do Cypress
    })
    
    cy.get('[data-testid="home"]').click()
    cy.get('[data-testid="lista-de-compras"]').click()
    cy.get('@nomeProduto').then((nomeProduto) => {
      cy.contains(nomeProduto).should('exist') // Valida que o produto está na lista
    })
    
    //-------------- BUG --------------
    // Aqui evidencio um BUG, pois ao fazer logout do usuario e login novamente com o mesmo usuário o produto "some" da lista de compras. Tratado como BUG

    cy.get('[data-testid="logout"]').click() // Faz logout do usuário

    // Recupero o login do usuário
    LoginPage.visitarPaginaDeLogin()
    LoginPage.preencherFormulario(usuarioFake.email, usuarioFake.senha)
    LoginPage.submeterFormulario()
    cy.get('[data-testid="lista-de-compras"]').click()
    cy.get('@nomeProduto').then((nomeProduto) => {      
      cy.contains(nomeProduto).should('exist') // Valida que o produto está na lista
           
    })
  })
})
