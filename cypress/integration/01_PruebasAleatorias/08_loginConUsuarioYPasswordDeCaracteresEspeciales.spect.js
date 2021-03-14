const faker = require('faker');

describe(`8. login con usuario y password de caracteres especiales`, function () {

    it(`8. login con usuario y password de caracteres especiales`, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(faker.phone.phoneFormats());
        cy.get('.password.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(faker.phone.phoneFormats());
        cy.get('#ember12 > span').click()
    })
})