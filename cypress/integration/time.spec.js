/// <reference types="cypress" />

describe('Work with basic elements', () =>{

    //Executa uma vez antes do teste começar
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    //Executa antes de cada teste
    beforeEach(() =>{
        cy.reload()
    })

    it('Going back to past', () => {
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '26/03/2020')

        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '31/12/1969')

        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
    })
})