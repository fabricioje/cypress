/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/CommandsContas'

describe('Should test at a functional level', () =>{

    //Executa uma vez antes do teste começar
    before(() =>{
        cy.login('fabricio@email.com', 'biscoito')
        cy.resetApp()
    })

    //Executa antes de cada teste
    // beforeEach(() =>{
    //     cy.reload()
    // })

    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')
        //cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {

        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()

        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada')
    })
})