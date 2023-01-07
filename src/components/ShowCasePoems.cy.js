import ShowCasePoems from './ShowCasePoems.vue'

describe('<ShowCasePoems />', () => {
  it('renders poems(poet, intro) with the right link', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ShowCasePoems, {
      props: {
        poems: [
          {
            "id": 1,
            "intro": "حُكمُ المَنِيَّةِ في البَرِيَّةِ جاري",
            "poet_id": 5,
            "poet": {
              "id": 5,
              "name": "التهامي"
            }
          }
        ],
        grid: 'grid'
      }
    })
    cy.get('.grid .poem').should('contain', "حُكمُ المَنِيَّةِ في البَرِيَّةِ جاري - التهامي")
    cy.get('.grid .poem').should('have.attr', 'href', '/poem/1')
  })
})