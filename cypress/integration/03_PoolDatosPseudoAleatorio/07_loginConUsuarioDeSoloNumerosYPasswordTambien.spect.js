const faker = require('faker');

describe(`7. login con usuario de solo números y password también `, function () {

    let arrayNumeros = new Array;

    (async function () {
        try {
            const response = await fetch('https://my.api.mockaroo.com/login_usuario4.json?key=292d8a80');
            let  myJson = await response.json();
            for (let i=0; i< myJson.length; i++) {
                //console.log(myJson[i]);
                arrayNumeros.push(myJson[i]["userName"])
            }
    
        } catch (error) {
            console.log('That did not go well.')
            throw error
        }
    })().catch( e => { console.error(e) })

    function random() {
        let number = Math.floor(Math.random()*arrayNumeros.length);
        console.log(number)
        return number
       }

    let posicion = random()
    let valor = arrayNumeros[posicion]


    it(`7. login con usuario de solo números y password también `, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(valor);
        cy.get('.password.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(valor);
        cy.get('#ember12 > span').click()
    })
})