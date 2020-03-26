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

    it('Using jquery selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()
        cy.get('[onclick*=\'Francisco\']').click()
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) >input ") 
        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) input ") 
    })

    it.only('using xpath', () => {
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(. , 'Francisco')]/..//input[@type='text'] ")
    })

})