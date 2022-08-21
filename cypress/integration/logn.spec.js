describe('Visual Regression - Login Page', () => {
    before(function () {
      //go to the webpage and sign in  
      cy.visit('http://zero.webappsecurity.com/index.html')
      cy.get('#signin_button').click()
      cy.get('#user_login').type('test')
      cy.get('#user_password').type('test')
      cy.get('#user_remember_me').click()
    })
    // test for desktop layout with setResolution function that is set in commands.js
    it('Desktop Layout', () => {
      cy.setResolution([1280, 720])
      cy.matchImageSnapshot()
    })
    // test for mobile layout with setResolution function that is set in commands.js
    it('Mobile Layout', () => {
      cy.setResolution('iphone-6')
      cy.matchImageSnapshot()
    })
    // test for tablet layout with setResolution function that is set in commands.js
    it('Tablet Layout', () => {
      cy.setResolution('ipad-2')
      cy.matchImageSnapshot()
    })
  })

  // how to run only specific test in cypress - we have a terminal command
  // npx cypress run --spec="cypress/integration/login.spec.js"
  