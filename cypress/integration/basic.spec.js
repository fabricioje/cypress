/// <reference types="cypress" />

describe('Cypress basic', () => {
    it('Should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        cy.title().should('to.be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
        
        cy.title()
            .should('to.be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
    })

    it.only('Shoul find and interact with an element', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})