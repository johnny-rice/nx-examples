import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      webServerCommands: {
        default: 'nx serve products',
      },
      ciWebServerCommand: 'nx run products:serve',
      webServerConfig: {
        timeout: 45000,
      },
    }),
    baseUrl: 'http://localhost:4200',
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    video: true,
    videosFolder: '../../dist/cypress/apps/products-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/products-e2e/screenshots',
    chromeWebSecurity: false,
    specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    testIsolation: false,
    // Please ensure you use `cy.origin()` when navigating between domains and remove this option.
    // See https://docs.cypress.io/app/references/migration-guide#Changes-to-cyorigin
    injectDocumentDomain: true,
  },
});
