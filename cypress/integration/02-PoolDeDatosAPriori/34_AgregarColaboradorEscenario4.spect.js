const dataPrueba = require("./data/02_Email.json");


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

    /*Escenario 6 */
    it(`Crear tag con descripcion cantidad maxima aceptable`, function () {

        let correo = new String();
        correo = dataPrueba[getRandomArbitrary(1, 99)].correo;
        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember39').click()
        cy.contains('Invite people').click()
        cy.get('#new-user-email').click({ force: true }).type(correo)
        cy.get('#new-user-role').scrollIntoView().focus().select('Author')
        cy.get('div.modal-footer').within(() => {
            cy.get('button').click()
        })

    })
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
