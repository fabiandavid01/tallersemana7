const dataPrueba = require("./data/01_Data.json");

describe(`7. login con usuario de solo números y password también `, function () {

    it(`7. login con usuario de solo números y password también `, function () {

        let indice = new Number();
        let variable = new String();

        indice = getRandomArbitrary(1, 10);
        variable = dataPrueba[indice].login;
        variable = variable.substring(0, 1);


        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(variable);

        indice = getRandomArbitrary(1, 10);
        variable = dataPrueba[indice].login;
        variable = variable.substring(0, 1);

        cy.get('.password.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(variable);
        cy.get('#ember12 > span').click()
    })
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
