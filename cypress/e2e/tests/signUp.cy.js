/// <reference types="cypress" />

import Header from "../pageObjects/header"
import SignUp from "../pageObjects/signUp"
import signUpData from "../../fixtures/signUpData.json"

const header = new Header()
const signUp = new SignUp()


let randomEmail = (Math.random().toString(36)) +'@gmail.com'
let randomPassword = Math.random().toString(36)


describe('SignUp Email', () => {
  beforeEach (() => {
    cy.visit('/')
    header
    .clickSignUpLink()
  })
    it('check registration', () => {
      signUp
      .getEmail().should('have.attr', 'placeholder', 'Почта').type(randomEmail).should('have.value', randomEmail).should('have.value', randomEmail)
      signUp
      .getPassword().should('have.attr', 'placeholder', 'Пароль').type(randomPassword).should('have.value', randomPassword).should('have.value', randomPassword)
      signUp
      .getCheckox().should('not.be.visible')
      //.clickCheckbox({force: true}).should('be.cheked')
      //signUp
      //.clickSubmitBtn()
    })


    
})



  
