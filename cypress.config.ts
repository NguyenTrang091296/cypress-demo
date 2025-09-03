import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'xwf64n',
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
