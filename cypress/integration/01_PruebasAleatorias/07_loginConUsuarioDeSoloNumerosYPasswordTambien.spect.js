const faker = require('faker');

describe(`7. login con usuario de solo números y password también `, function () {

    it(`7. login con usuario de solo números y password también `, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(faker.random.number());
        cy.get('.password.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(faker.random.number());
        cy.get('#ember12 > span').click()
    })
})