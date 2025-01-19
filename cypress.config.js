const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    //baseUrl: 'https://serverest.dev',
    viewportWidth: 1280, // Largura da janela
    viewportHeight: 720, // Altura da janela
 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/e2e.js'
  },
});
