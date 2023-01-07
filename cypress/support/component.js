// import './commands'
// import { mount } from 'cypress/vue'

// Cypress.Commands.add('mount', mount)

import { mount } from 'cypress/vue'
import { createWebHistory, createRouter } from 'vue-router'
import router from '../../src/router'

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.plugins = options.global.plugins || []

  // create router if one is not provided
  if (!options.router) {
    options.router = router
  }

  // Add router plugin
  options.global.plugins.push({
    install(app) {
      app.use(options.router)
    },
  })

  return mount(component, options)
})
