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

    /*Escenario 6 */
    it(`Crear tag con descripcion cantidad maxima aceptable`, function() { 

        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember39').click()
        cy.contains('Invite people').click()
        cy.get('#new-user-email').click({force:true}).type(faker.lorem.words())
        cy.get('#new-user-role').scrollIntoView().focus().select('Editor')
        cy.get('div.modal-footer').within(() => {
            cy.get('button').click()
        })
        
    })
})