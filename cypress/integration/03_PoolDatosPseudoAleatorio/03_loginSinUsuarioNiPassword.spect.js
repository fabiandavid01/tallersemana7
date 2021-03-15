const faker = require('faker');

describe(`3. login sin usuario ni password`, function () {

    it(`3. login sin usuario ni password`, function () {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember12 > span').click()
    })
})