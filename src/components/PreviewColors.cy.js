import PreviewColors from './PreviewColors.vue'

describe('<PreviewColors />', () => {
  it('renders visible colors ', () => {
    cy.mount(PreviewColors, {
      props: {
        colors: ['#f0f','#f00', '#2c3e50']
      }
    })
    cy.get('.color').should('be.visible')
  })
})