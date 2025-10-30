const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    setupNodeEvents: async (on, config) => {
      // Configura el plugin de Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Configura esbuild para manejar .feature
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    baseUrl: "https://todomvc.com/examples/react/dist/",
  },
  // Configuración para el preprocesador de Cucumber.
  // Mover la configuración stepDefinitions al nivel cucumber permite
  // que el plugin la lea correctamente.
  cucumber: {
    // Buscar en cualquier carpeta step_definitions bajo cypress/e2e y en support
    stepDefinitions: [
      "cypress/e2e/**/step_definitions/**/*.{js,ts}",
      "cypress/support/step_definitions/**/*.{js,ts}"
    ]
  },
  // No establecer env.cucumber: permitir que el plugin use la configuración 'cucumber' global.
});