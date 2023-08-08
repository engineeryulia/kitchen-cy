/// <reference types="cypress" />

import basePage from '../../fixtures/basePage.json'
import Header from '../pageObjects/header'

const header = new Header()

describe("Base Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  const topMenu = [
    'Курсы', 'Задачи', 'Интервью'
  ]

  it('Check logo', () => {
    cy.get("#root")
    .children().eq(1)
    .children()
    .children('a').first()
    .should('be.visible')
  })


  it('Check top-menu', () => {
    cy.get("#root")
    .children().eq(1)
    .children()
    .children().eq(1)
    .children()
    .children('div')

  .should('have.length', 3)
  })

  it('Check Login', () => {
    cy.get('[data-qa="login"]').should('have.attr', 'href', basePage.urlLogin).click()
    cy.url().should('include', basePage.urlLogin)
    cy.location('pathname').should('eq', basePage.urlLogin)
    cy.title().should('include', 'Local Coding')
    cy.go('back')
    cy.url().should('eq', 'https://coding.pasv.us/')

  })

  it('Check register', () => {
    cy.get("nav")
    .children()
    .children().eq(2)
    .children().last()
    .click()
  })

  it('Check dropdown', () => {
    cy.get('nav')
    .children()
    .children().eq(3)
    .click()
  })

})
