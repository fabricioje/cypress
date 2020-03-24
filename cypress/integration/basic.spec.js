/// <reference types="cypress" />

describe('Cypress basic', () => {
    it.only('Should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        //cy.pause()

        cy.title().should('to.be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
        
        cy.title()
            .should('to.be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
        
        cy.title().then(title => {
            console.log(title)
        })
    })

    it('Shoul find and interact with an element', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})