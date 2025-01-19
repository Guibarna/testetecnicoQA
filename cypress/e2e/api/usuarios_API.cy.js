import { faker } from '@faker-js/faker'
let usuarioFake // Variável para armazenar os dados do usuário

describe('Teste de Login -', () => {

    it('Cadastra usuário com sucesso', () => {
        // Gera dados dinâmicos com faker
        const user = {
          nome: faker.name.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(8), // Gera uma senha de 8 caracteres
          administrador: faker.datatype.boolean() ? 'true' : 'false' // Aleatório entre true ou false
        }
      
        cy.request({
          method: 'POST',
          url: 'https://serverest.dev/usuarios',
          headers: {
            'Content-Type': 'application/json'
          },
          body: user
        }).then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
          expect(response.body).to.have.property('_id')

          usuarioFake = { ...user, id: response.body._id }
      
          // Exibe o nome, login e senha do usuário criado
          cy.log(`Usuário criado com sucesso:`)
          cy.log(`Nome: ${user.nome}`)
          cy.log(`Login (Email): ${user.email}`)
          cy.log(`Senha: ${user.password}`)
          cy.log(`Administrador: ${user.administrador}`)
        })
      })

    it('Login com usuário válido', () => {

      // Valida se o usuário armazenado existe na variável
      expect(usuarioFake).to.exist 

      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
          email: usuarioFake.email,
          password: usuarioFake.password,
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('authorization')

        // Mostra o usuário e senha usados no teste
        cy.log('Usuário logado com sucesso!')
        cy.log(`Email: ${usuarioFake.email}`)
        cy.log(`Senha: ${usuarioFake.password}`)
      })
    })
  

    it('Login com usuário inválido', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        failOnStatusCode: false, // Evita falha automática em status de erro
        body: {
          email: 'usuario_invalido@teste.com', // Insere um usuário inválido
          password: 'senhainvalidateste'  // Insere uma senha inválida
        }
      }).then((response) => {
        expect(response.status).to.eq(401)
        expect(response.body.message).to.eq('Email e/ou senha inválidos')
      })
    })
  })
  