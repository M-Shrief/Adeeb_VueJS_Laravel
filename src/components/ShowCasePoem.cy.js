import ShowCasePoem from './ShowCasePoem.vue'

describe('<ShowCasePoem />', () => {
  it('renders poem verses properly and emit print on verses-dblClick', () => {
    const onPrintSpy = cy.spy().as('onPrintSpy')
    cy.mount(ShowCasePoem, {
      props: {
        verses: [
         {
          "first": "حُكــمُ المَنِيَّـةِ فـي البَرِيَّـةِ جـاري",
          "sec": "مــا هَــذِهِ الــدُنيا بِـدار قَـرار",
          },
        ],
        onPrint: onPrintSpy
      }
    })
    cy.get('[class="first"]').should('contain', "حُكــمُ المَنِيَّـةِ فـي البَرِيَّـةِ جـاري")
    cy.get('[class="sec"]').should('contain', "مــا هَــذِهِ الــدُنيا بِـدار قَـرار")
  
    cy.get('[class="verse"]').dblclick()
    cy.get('@onPrintSpy').should('be.calledOnce')

  })
})