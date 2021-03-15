const faker = require('faker');

describe(`8. login con usuario y password de caracteres especiales`, function () {

    let arrayCaracteres = new Array;

    (async function () {
        try {
            const response = await fetch('https://my.api.mockaroo.com/login_usuario5.json?key=292d8a80');
            let  myJson = await response.json();
            for (let i=0; i< myJson.length; i++) {
                //console.log(myJson[i]);
                arrayCaracteres.push(myJson[i]["userName"])
            }
    
        } catch (error) {
            console.log('That did not go well.')
            throw error
        }
    })().catch( e => { console.error(e) })

    function random() {
        let number = Math.floor(Math.random()*arrayCaracteres.length);
        console.log(number)
        return number
       }

    let posicion = random()
    let valor = arrayCaracteres[posicion]

    it(`8. login con usuario y password de caracteres especiales`, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(valor);
        cy.get('.password.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(valor);
        cy.get('#ember12 > span').click()
    })
})