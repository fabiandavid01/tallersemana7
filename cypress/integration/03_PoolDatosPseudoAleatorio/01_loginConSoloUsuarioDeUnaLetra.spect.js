const faker = require('faker');

describe(`1. login con solo usuario de una letra`, function () {

    let arrayLetras = new Array;

    (async function () {
        try {
            const response = await fetch('https://my.api.mockaroo.com/login_usuario1.json?key=292d8a80');
            let  myJson = await response.json();
            for (let i=0; i< myJson.length; i++) {
                //console.log(myJson[i]);
                arrayLetras.push(myJson[i]["userName"][1])
            }
    
        } catch (error) {
            console.log('That did not go well.')
            throw error
        }
    })().catch( e => { console.error(e) })

    function random() {
        let number = Math.floor(Math.random()*arrayLetras.length);
        console.log(number)
        return number
       }

    let posicion = random()
    let valor = arrayLetras[posicion]

    it(`1. login con solo usuario de una letra`, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(valor)
        cy.get('#ember12 > span').click()
    })
})