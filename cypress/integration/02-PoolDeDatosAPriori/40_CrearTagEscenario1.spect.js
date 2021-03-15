const faker = require('faker');

describe(`Pruebas con Ghost - Faker`, function () {

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get('form').within(() => {
            cy.get('.email.ember-text-field.gh-input.ember-view').type('fd.gil10@uniandes.edu.co')
            cy.get('.password.ember-text-field.gh-input.ember-view').type('Bogota2020')
            cy.get('#ember12 > span').click()
        })
        cy.wait(1000)
    })

    /*Escenario 1*/
    it(`Editar Post`, function () {

        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember28').click()
        cy.get('.gh-canvas > .content-list ').click()

        cy.get('.nav > a').click()

        cy.get('.posts-list > .gh-list-row gh-posts-list-item').click({ force: true })

        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember28').click()
    })
})