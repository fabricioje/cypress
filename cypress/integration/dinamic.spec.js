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

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    foods.forEach(food =>{
        it(`Cadastro comida variada com a comida ${food}`, () => {
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get(`[name=formSexo][value=F]`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click() 
            cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })
    })
})