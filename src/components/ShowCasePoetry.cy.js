import ShowCasePoetry from './ShowCasePoetry.vue';

describe('<ShowCasePoetry />', () => {
  it('renders poetry-item properly', () => {
    cy.mount(ShowCasePoetry, {
      props: {
        chosenVerses: [
          {
            "id": 1,
            "verse": [
              {
                "first": "السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
                "sec": "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"
              },
              {
                "first": "بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في",
                "sec": "مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"
              }
            ],
            "tags": "الشجاعة,الحكمة",
            "poet_id": 4,
            "poem_id": 5,
            "poet": {
              "id": 4,
              "name": "أبو تمام"
            }
          },
          {
            "id": 2,
            "verse": [
              {
                "first": "لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا",
                "sec": "مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ"
              }
            ],
            "tags": "الفخر,الشجاعة,المدح",
            "poet_id": 4,
            "poem_id": 5,
            "poet": {
              "id": 4,
              "name": "أبو تمام"
            }
          }
        ],
      }, 
    })
    cy.get('.two-verse .first').should('contain', "السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ")
    cy.get('.two-verse .sec').should('contain', "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ")

    cy.get('.one-verse .first').should('contain', "لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا")
    cy.get('.one-verse .sec').should('contain', "مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ")

    
  })
  it('emit (print) on button click with the proper data', () => {
    const onPrintSpy = cy.spy().as('onPrintSpy')
    cy.mount(ShowCasePoetry, {
      props: {
        chosenVerses: [
          {
            "id": 1,
            "verse": [
              {
                "first": "السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
                "sec": "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"
              },
              {
                "first": "بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في",
                "sec": "مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"
              }
            ],
            "tags": "الشجاعة,الحكمة",
            "poet_id": 4,
            "poem_id": 5,
            "poet": {
              "id": 4,
              "name": "أبو تمام"
            }
          },
          {
            "id": 2,
            "verse": [
              {
                "first": "لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا",
                "sec": "مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ"
              }
            ],
            "tags": "الفخر,الشجاعة,المدح",
            "poet_id": 4,
            "poem_id": 5,
            "poet": {
              "id": 4,
              "name": "أبو تمام"
            }
          }
        ],
        onPrint: onPrintSpy
      }, 
    })
    
    cy.get('.poetry-item .print-button').click({multiple: true})
    cy.get('@onPrintSpy').should('be.calledTwice')

    cy.get('@onPrintSpy').should('have.been.calledWith', {
      "id": 1,
      "verse": [
        {
          "first": "السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
          "sec": "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"
        },
        {
          "first": "بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في",
          "sec": "مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"
        }
      ],
      "tags": "الشجاعة,الحكمة",
      "poet_id": 4,
      "poem_id": 5,
      "poet": {
        "id": 4,
        "name": "أبو تمام"
      }
    })
    cy.get('@onPrintSpy').should('have.been.calledWith', {
      "id": 2,
      "verse": [
        {
          "first": "لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا",
          "sec": "مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ"
        }
      ],
      "tags": "الفخر,الشجاعة,المدح",
      "poet_id": 4,
      "poem_id": 5,
      "poet": {
        "id": 4,
        "name": "أبو تمام"
      }
    })
  })
})