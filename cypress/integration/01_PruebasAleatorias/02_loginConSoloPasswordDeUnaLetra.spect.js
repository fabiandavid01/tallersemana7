const faker = require('faker');

describe(`2. login con solo password de una letra`, function () {

    it(`2. login con solo password de una letra`, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember10').scrollIntoView().focus().type(faker.address.streetPrefix())
        cy.get('#ember12 > span').click()
    })
})