const dataPrueba = require("./data/01_Data.json");
const correoPrueba = require("./data/02_Email.json");

describe(`6. login con @XXX.com`, function () {

    it(`6. login con @XXX.com`, function () {

        let indice = new Number();
        let variable = new String();
        let correoFake = new String();


        indice = getRandomArbitrary(1, 10);
        variable = correoPrueba[indice].correo;
        correoFake = variable.substring(variable.indexOf('@'), variable.length);

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(correoFake);
        cy.get('#ember12 > span').click()

    })
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
