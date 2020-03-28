/// <reference types="cypress" />

//import loc from '../../support/locators'
//import '../../support/CommandsContas'

describe('Should test at a functional level', () =>{

    let token

    //Executa uma vez antes do teste começar
    before(() =>{
        cy.getToken('fabricio@email.com', 'biscoito')
            .then(tkn => {
                token = tkn
            })
    })

    //Executa antes de cada teste
     beforeEach(() =>{
         cy.resetRest()
     })

    it('Should create an account', () =>{

        cy.request({
            method: 'POST',
            url: '/contas',
            headers: {Authorization: `JWT ${token}`},
            body:{
                nome: 'Conta via rest'
            }
        }).as('response')

        
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
    })

    it('Should update an account', () => {

    })

    it('Should not create an account wtih sma name', () => {

    })

    it('Should create a transaction', () => {

    })

    it('Should get balance', () => {

    })
})