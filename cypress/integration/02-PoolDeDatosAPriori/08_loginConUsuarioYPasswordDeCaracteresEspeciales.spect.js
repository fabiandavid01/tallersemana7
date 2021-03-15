const dataNaughty = require("./data/03_DataEspecial.json");

describe(`8. login con usuario y password de caracteres especiales`, function () {

    it(`8. login con usuario y password de caracteres especiales`, function () {


        let indice = new Number();
        let variable = new String();

        indice = getRandomArbitrary(1, 10);
        variable = dataNaughty[indice].data;

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(variable);

        indice = getRandomArbitrary(1, 10);
        variable = dataNaughty[indice].data;

        cy.get('.password.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(variable);
        cy.get('#ember12 > span').click()
    })
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



