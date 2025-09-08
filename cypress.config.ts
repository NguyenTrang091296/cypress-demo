import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.ts",

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    env: {
      allure: true,
      API_KEY: process.env.API_KEY || "default-local-key",
    },
  },
});
