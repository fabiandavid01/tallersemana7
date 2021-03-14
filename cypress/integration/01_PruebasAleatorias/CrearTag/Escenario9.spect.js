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

        let color = faker.internet.color();
        color = color.substr(1)

        let descripcion = faker.lorem.paragraphs()
        let descripcionMaxAceptable = descripcion.substring(0, 505)


        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
        cy.get('.gh-canvas > .gh-canvas-header > .view-actions > #ember70 > span').click()
        cy.get('input[id="tag-name"]').click({force:true}).type(faker.random.word())
        cy.get('input[id="tag-slug"]').click({force:true}).clear()
        cy.get('input[id="tag-slug"]').click({force:true}).type(faker.lorem.slug())
        cy.get('input[name="accent-color"]').click({force:true}).type(color)
        cy.get('#tag-description').click({force:true}).type(descripcionMaxAceptable)
        cy.get('header.gh-canvas-header').within(() => {
            cy.get('button').click()
        })
        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    })
})