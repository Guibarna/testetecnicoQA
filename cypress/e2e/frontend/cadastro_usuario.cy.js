/// <reference types="cypress" />

import CadastroPage from '../../support/pages/cadastro_pages'
import { faker } from '@faker-js/faker'

describe('Cadastro de Usuário / Massa de dados', () => {
  
  
  it('Cadastra um novo usuário e salva os dados em uma fixture', () => {
    
    // Gera dados do usuário fake 
    const usuarioFake = {
      nome: faker.name.fullName(),
      email: faker.internet.email(),
      senha: faker.internet.password(),
    }

    // Cadastro do usuário
    CadastroPage.visitarPaginaDeCadastro()
    CadastroPage.preencherFormulario(usuarioFake.nome, usuarioFake.email, usuarioFake.senha)
    CadastroPage.submeterFormulario()
    CadastroPage.validarCadastroSucesso()

    // Salva dados do usuário em uma fixture para uso em cenários
    cy.writeFile('cypress/fixtures/usuarioFake.json', usuarioFake)
  })
})
