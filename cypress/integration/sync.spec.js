/// <reference types="cypress" />

describe('Esperas...' ,() => {
    //Executa uma vez antes do teste começar
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    //Executa antes de cada teste
    beforeEach(() =>{
        cy.reload()
    })

    it('Deve aguardar elemento estar disponiveis', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it.only('Deve fazer retrys', () => {        
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            //.should('not.exist') // Deixando essa linha, como o objeto não existe ele retornar NULL, causando errao nas acertivas posteriores
            .should('exist')
            .type('funciona')
    })
})