import ShowCaseProse from './ShowCaseProse.vue'

describe('<ShowCaseProse />', () => {
  it('renders prose properly and emit (print) with the right data onClick', () => {
    const onPrintSpy = cy.spy().as('onPrintSpy')
    cy.mount(ShowCaseProse, {
      props: {
        proses: [
          {
            "id": 1,
            "tags": "الحكمة",
            "qoute": "واعلم أن السفهاء في الدنيا كثير، فمن كان يغضب لكلّ سفاهةٍ من سفيه فإنّ شقاءه سيطول بغضبه.",
            "reviewed": 1,
            "poet_id": 6,
            "poet": {
              "id": 6,
              "name": "محمود شاكر (أبو فهر)"
            }
          }
        ],
        onPrint: onPrintSpy
      }
    })
    cy.get('.prose-item .qoute').should('contain', "واعلم أن السفهاء في الدنيا كثير، فمن كان يغضب لكلّ سفاهةٍ من سفيه فإنّ شقاءه سيطول بغضبه.")
    cy.get('.prose-item .print-button').click()
    cy.get('@onPrintSpy').should('be.calledOnce')
    cy.get('@onPrintSpy').should('have.been.calledWith',  {
      "id": 1,
      "tags": "الحكمة",
      "qoute": "واعلم أن السفهاء في الدنيا كثير، فمن كان يغضب لكلّ سفاهةٍ من سفيه فإنّ شقاءه سيطول بغضبه.",
      "reviewed": 1,
      "poet_id": 6,
      "poet": {
        "id": 6,
        "name": "محمود شاكر (أبو فهر)"
      }
    })
  })
})