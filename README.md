# testetecnicoQA
Teste técnico


# Cypress Test Automation Project

Este projeto contém testes automatizados utilizando o framework [Cypress](https://www.cypress.io/). Ele inclui testes de API e frontend para validar diferentes funcionalidades do sistema.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
cypress/
├── e2e/
│   ├── api/
│   │   └── usuarios_API.cy.js
│   ├── frontend/
│   │   ├── cadastro_usuario.cy.js
│   │   ├── lista_de_compras.cy.js
│   │   └── login.cy.js
├── fixtures/
│   └── usuarioFake.json
├── screenshots/│       
├── support/
│   ├── API/
│   │   └── cadastro_pages.js
│   ├── pages/
│   │   ├── login_pages.js
│   ├── commands.js
│   └── e2e.js
├── cypress.config.js
├── package.json
└── package-lock.json
```

## Configuração do Ambiente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
2. Clone este repositório:
   ```bash
   git clone https://github.com/Guibarna/testetecnicoQA
   ```
3. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```
4. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Executando os Testes

### Testes de Interface (Frontend)

1. Para abrir a interface do Cypress, execute:
   ```bash
   npx cypress open
   ```
2. Na interface, selecione o arquivo de teste desejado para executar.

### Testes Automatizados via Terminal

Para rodar os testes diretamente no terminal, use o seguinte comando:
```bash
npx cypress run
```

## Testes e Arquivos Importantes

### Testes de API
Os testes de API estão localizados no diretório `cypress/e2e/api/`.
- Exemplo: `usuarios_API.cy.js` testa o endpoint de usuários.

### Testes de Frontend
Os testes de frontend estão localizados no diretório `cypress/e2e/frontend/`.
- `cadastro_usuario.cy.js`: Cadastra um usuário para ele ser usado em outros testes.
- `lista_de_compras.cy.js`: Valida a funcionalidade da lista de compras.
- `login.cy.js`: Testa o processo de login.

### Dados Fake
Os dados mockados para testes estão armazenados em `cypress/fixtures/usuarioFake.json`.

### Screenshots
Screenshots de falhas em testes serão armazenadas em `cypress/screenshots/`.

## Personalização

Se necessário, atualize o arquivo `cypress.config.js` para alterar as configurações globais, como a URL base ou o tempo limite padrão.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch para sua feature/bugfix:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m "Descrição das mudanças"
   ```
4. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.


