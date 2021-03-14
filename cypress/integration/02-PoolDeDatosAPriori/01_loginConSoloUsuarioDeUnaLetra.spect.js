const faker = require('faker');

describe(`1. login con solo usuario de una letra`, function () {

    it(`1. login con solo usuario de una letra`, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(faker.address.streetPrefix())
        cy.get('#ember12 > span').click()
    })
})