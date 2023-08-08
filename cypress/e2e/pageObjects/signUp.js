class SignUp {
  getEmail = () => cy.get('input#user_register_email')
  getPassword = () => cy.get('input#user_register_password')
  getSubmitBtn = () => cy.get('button[type="submit"]')
  getCheckox = () => cy.get('#user_register_agreement')
  getGoogleBtn = () => cy.get('#root.children().first().children().children().eq(1)')
  



  clickSubmitBtn() {
    this.getSubmitBtn().click()
    return this
  }

  clickCheckbox() {
    this.getCheckbox().check()
    return this
  }

  clickGoogleBtn() {
    this.getGoogleBtn().click()
    return this
  }




}

export default SignUp;