const faker = require('faker');

describe(`6. login con @XXX.com`, function () {

    it(`6. login con @XXX.com`, function () {

        let variable = new String();
        let correoFake = new String();
        variable = faker.internet.email();
        correoFake = variable.substring(variable.indexOf('@'), variable.length);
        faker.lorem.paragraphs().substring(0, 499);

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(correoFake);
        cy.get('#ember12 > span').click()

    })
})