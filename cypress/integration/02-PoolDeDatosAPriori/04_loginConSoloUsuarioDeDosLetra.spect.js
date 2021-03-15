const dataPrueba = require("./data/01_Data.json");

describe(`4. login con solo usuario de dos letra`, function () {

    it(`4. login con solo usuario de dos letra`, function () {


        let indice = new Number();
        let variable = new String();

        indice = getRandomArbitrary(1, 10);
        variable = dataPrueba[indice].login;
        variable = variable.substr(0, 2);
        console.log("Indice Generado----->", indice);
        console.log("Valor indexado ----->", variable);

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(variable);
        cy.get('#ember12 > span').click()
    })
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
