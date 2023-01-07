import OrderForm from './OrderForm.vue'

describe('<OrderForm />', () => {
  it('renders with products properly, beside remove product when dblclicked', () => {

    cy.mount(OrderForm,{
      props: {
        products: [{
          "print": {
            "_id": "639b60b3b5e253099333b136",
            "poet": {
              "_id": "639b5cf712eec0bb274cecd4",
              "name": "محمود شاكر (أبو فهر)"
            },
            "tags": "حكمة,العلم,ثورة,قومة",
            "qoute": "إنّ حياة الأمم في ألسنتها.",
            "reviewed": true
          },
          "fontType": "نسخ",
          "fontColor": "rgb(0, 0, 0)",
          "backgroundColor": "silver"
        }],
      }
    })
    cy.get('#products > .product').should('be.visible')
    cy.get('#products > .product').should('contain', 'نسخ')
    cy.get('#products > .product').should('contain', "إنّ حياة الأمم في ألسنتها.")



    cy.get('#products > .product').dblclick()
    cy.get('#products > .product').should('not.exist')
  })

  it('renders 3 inputs (name,phone,address)', () => {
    cy.mount(OrderForm,{
      props: {
        products: [{
          "print": {
            "_id": "639b60b3b5e253099333b136",
            "poet": {
              "_id": "639b5cf712eec0bb274cecd4",
              "name": "محمود شاكر (أبو فهر)"
            },
            "tags": "حكمة,العلم,ثورة,قومة",
            "qoute": "إنّ حياة الأمم في ألسنتها.",
            "reviewed": true
          },
          "fontType": "نسخ",
          "fontColor": "rgb(0, 0, 0)",
          "backgroundColor": "silver"
        }],
      }
    })

    cy.get('#name').type('Rai303')
    cy.get('#phone').type('01-20-03-40')
    cy.get('#address').type('10st-cairo-somalia')
  })
})