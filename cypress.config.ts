import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.ts",

    // Setup Allure
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    env: {
      API_KEY: process.env.API_KEY || "default-local-key",
      allure: true,
    },
  },

  reporter: "allure-cypress",
  reporterOptions: {
    resultsDir: "allure-results",
    overwrite: true,
    useCypressSteps: true,
    useCypressLabels: true,
  },
});
