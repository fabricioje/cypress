/// <reference types="cypress" />
//Declara um teste
it('A external test...', ()=>{

})
//Agrupa testes
describe('Should group testes...',()=>{
    describe('Should group more specific tests...',()=>{
        it.skip('A internal test...', ()=>{

        })
    })

    describe('Should group more specific tests s...',()=>{
        it('A internal test s...', ()=>{

        })
    })
    
})