import SelectedPrints from './SelectedPrints.vue'
import { createTestingPinia } from '@pinia/testing'
import { usePrintsStore } from "../stores/prints";

describe('<SelectedPrints />', () => {
  beforeEach(() => {
    createTestingPinia({
      initialState: {
        print: {
          prints: [
            {
              "_id":"6371f025ac76f350635f7012",
              "verse":[{
                "_id":"63b454bd7f21bc3450a7960a",
                "first":"لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا",
                "sec":"مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ"
              }],
            },
            {
              "_id":"6371f025ac76f350635f7011",
              "verse":[{
                "_id":"63b454bd7f21bc3450a79608",
                "first":"السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
                "sec":"في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"
              },
              {
                "_id":"63b454bd7f21bc3450a79609",
                "first":"بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في",
                "sec":"مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"
              }]
            },
            {
              "_id":"639b5f4db5e253099333b120",
              "qoute":"واعلم أن السفهاء في الدنيا كثير، فمن كان يغضب لكلّ سفاهةٍ من سفيه فإنّ شقاءه سيطول بغضبه.",
            }
          ]
        }
      },
      createSpy: cy.spy,
    });
    cy.wrap(usePrintsStore()).as('printsStore');

  })
  it('renders prints.length properly', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(SelectedPrints)
    cy.get('.prints > .prints-item').should('have.length', 3)
  })
})