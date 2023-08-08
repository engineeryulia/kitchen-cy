/// <reference types="cypress" />

describe("Base Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })



  it("Check list", () => {
    //cy.get(".col-lg-7 .checked-list  >ul>li").should("have.length", 5)
    cy.get("#root")
    .children("section")
    .children()
    .children().first()
     .children().first()
    .children('div').first()
    .children('ul')
    .children('li')

    .should('have.length', 5)
   





  })
}) 