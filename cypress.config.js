const { defineConfig } = require("cypress")
require("dotenv").config();

module.exports = defineConfig({
  

  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      amazonEmail: process.env.AMAZON_EMAIL,
      amazonPassword: process.env.AMAZON_PASSWORD
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
