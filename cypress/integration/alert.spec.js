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

    it('Alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('Alert com Mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledOnceWith('Alert Simples')
        })
    })

    it('Alert', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })
    })

    it.only('Denny', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Negado')
        })
    })
})