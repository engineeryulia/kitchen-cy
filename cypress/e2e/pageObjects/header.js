

class Header {
  getSignUpLink = () => cy.get('[data-qa="register"]')
  getLoginLink = () => cy.get('[data-qa="login"]')
 

  clickSignUpLink() {
    this.getSignUpLink().click()
    
  }


  clickLoginLink() {
    this.getLoginLink().click()
    
  }
}

export default Header;