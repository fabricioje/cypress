/// <reference types="cypress" />

describe('Helpers...', () => {
    it('Wrap', () => {
        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.get('#formNome').then($el => {
        //    cy.wrap($el).type('funciona via cypress')
        //})

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get("#buttonSimple").then(() => console.log("Encontrei o primeiro botão"))
        //promisete.then(num => console.log(num))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get("#buttonList").then(() => console.log("Encontrei o segundo botão"))

    })

    it.only('Invoke...', () =>{
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1);
        cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal', 7)

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke')
        cy.window().invoke('alert', 'Dá para ver?')
        cy.get('#resultado')
            .invoke('html', '<input type="button" value="hached">')
    })
})