/// <reference types="cypress" />
import basePage from '../../fixtures/basePage'

describe("Base Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Check the button", () => {
    cy.get("#root")
    .children("section")
    .children()
    .children().eq(1)
    .children().first()
    .children()
    .children()
    .children()
    .children().next()
    .children('button')
    .should("be.visible")
    .click()
    cy.url().should('include', basePage.urlSecondBlock)
  })

  it("Check list", () => {
    cy.contains('QA Manual').parent('.col-md-8').find('.checked-list ul li').should('have.length', 4);
  })


  it.skip('Check button', function () {
    cy.contains('QA Manual')
      .parent('.col-md-8')
      .find('.checked-list ul li')
      .should('have.length', 4);
    cy.contains('QA Manual')
      .parent('.col-md-8')
      .find('button')
      .should('have.text', 'Перейти к курсу');
    cy.contains('JavaScript Syntax ')
      .parent('.col-md-8')
      .find('.checked-list ul li')
      .should('have.length', 9);
    cy.contains('JavaScript Syntax ')
      .parent('.col-md-8')
      .find('button')
      .should('have.text', );
  });
}) 

