/// <reference types="cypress" />

describe('Work with iFrames', () =>{

    //Executa uma vez antes do teste começar
    // before(() =>{
    //     cy.visit('https://wcaquino.me/cypress/componentes.html')
    // })

    // //Executa antes de cada teste
    // beforeEach(() =>{
    //     cy.reload()
    // })

    it('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona?')
                .should('have.value', 'funciona?')

            cy.on('window:alert', msg => {
                expect(msg).to.be.equal('Alert Simples')
            })
        })
    })

    it.only('Deve testar o frame diretamente', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })

    })

})