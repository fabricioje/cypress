/// <reference types="cypress" />

describe('Should test at a functional level', () =>{

    //Executa uma vez antes do teste começar
    before(() =>{
        cy.visit('http://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('fabricio@email.com')
        cy.get(':nth-child(2) > .form-control').type('biscoito')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    //Executa antes de cada teste
    // beforeEach(() =>{
    //     cy.reload()
    // })

    it('...', () => {
        
    })
})