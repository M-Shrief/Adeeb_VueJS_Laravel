import Navbar from './Navbar.vue'

describe('<Navbar />', () => {
  it('renders logo and 4 nav items', () => {
    cy.mount(Navbar)
    cy.get('[href="/"][id="logo"]').should('be.visible')

    cy.get('[class="nav-item"]').should('have.length', 4)
    cy.get('[href="/printing"]').should('be.visible')
    cy.get('[href="/orders"]').should('be.visible')
    cy.get('[href="/about"]').should('be.visible')
    cy.get('[href="/partners"]').should('be.visible')
  })
})