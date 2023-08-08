/// <reference types="cypress" />

describe("Base Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it.skip("Check the button", () => {
    cy.get("#root")
    .children("section")
    .children()
    .children().eq(1)
    .children().next()
    .children()
    .children()
    .children()
    .children().next()
    .children('button')
    .should("be.visible")
    .click()
    cy.url().should('include', 'course/635c05ba659f6d77abf1f4e7')
  })

  it("Check list", () => {
    cy.get("#root")
    .children("section")
    .children()
    .children().first().next()
    .children().first().next()
    .children('div')
    .children('div')
    .children('div')
    .children().first().next()
    .children('div').first()
    .children('ul')
    .children('li')
    .should("have.length", 9)
  })
}) 