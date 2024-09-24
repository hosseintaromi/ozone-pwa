const { defineConfig } = require('cypress');
const tsconfigPaths = require('tsconfig-paths');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      tsconfigPaths.register({
        baseUrl: './',
        paths: {
          '@/*': ['./src/*'],
          '~/*': ['./public/*'],
        },
      });
    },
    baseUrl: 'http://localhost:6854',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
