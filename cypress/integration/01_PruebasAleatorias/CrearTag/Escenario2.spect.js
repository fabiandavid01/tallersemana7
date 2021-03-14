const faker = require('faker');

describe(`Pruebas con Ghost - Faker`, function() {

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get('form').within(() => {
            cy.get('.email.ember-text-field.gh-input.ember-view').type('luque.lopez.adriana@gmail.com')
            cy.get('.password.ember-text-field.gh-input.ember-view').type('adrianaluque')
            cy.get('#ember12 > span').click()
        })
        cy.wait(1000)
    })

    /*Escenario 2*/
    it(`Crear tag con minimo de caracter`, function() { 

        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
        cy.get('.gh-canvas > .gh-canvas-header > .view-actions > #ember70 > span').click()
        cy.get('input[id="tag-name"]').click({force:true}).type(faker.random.word())
        cy.get('header.gh-canvas-header').within(() => {
            cy.get('button').click()
        })
        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    })
})