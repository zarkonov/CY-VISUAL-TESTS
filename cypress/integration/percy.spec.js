describe('Visual regression testing with Percy and Cypress', () => {
    it('should take Percy snapshot', () => {
        cy.visit('https://www.example.com')
        cy.wait(2000)
        cy.percySnapshot("my name")
    })
})