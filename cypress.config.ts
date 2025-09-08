import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Kích hoạt Allure plugin
      allureWriter(on, config);

      // Luôn return config
      return config;
    },
    baseUrl: "https://www.saucedemo.com", // URL mặc định
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.ts",
    env: {
      API_KEY: process.env.API_KEY || "default-local-key",
    },
  },
  env: {
    allure: true,
  },
});
