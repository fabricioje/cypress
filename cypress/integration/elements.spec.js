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

    it('Text', () =>{
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () =>{
        //cy.get('[href="#"]').click()
        //cy.get('#resultado').should('have.value', 'Voltou!')

        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () =>{
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes').type('text area')
        cy.get('#elementosForm\\:sugestoes').should('have.value', 'text area')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('text area')
            .should('have.value', 'text area')
            
        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked') //verificar se o item foi selecionado

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2) //Verifica se os 2 radiosbuttons estão selecionados
    })

    it.only('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked') //verificar se o item foi selecionado

        cy.get('[name=formComidaFavorita]').click({multiple:true}) //Seleciona todos os checkbox
        cy.get('#formComidaPizza').should('be.not.checked') //verificar se o item não foi selecionado
        cy.get('#formComidaVegetariana').should('be.checked') //verificar se o item não foi selecionado
    })
})