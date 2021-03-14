const faker = require('faker');

describe(`4. login con solo usuario de dos letra`, function () {

    it(`4. login con solo usuario de dos letra`, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember8').scrollIntoView().focus().type(faker.address.streetPrefix());
        cy.get('#ember8').scrollIntoView().focus().type(faker.address.streetPrefix());
        cy.get('#ember12 > span').click()
    })
})