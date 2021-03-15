const faker = require('faker');

describe(`6. login con @XXX.com`, function () {

    let arraycorreos = new Array;

    (async function () {
        try {
            const response = await fetch('https://my.api.mockaroo.com/login_usuario3.json?key=292d8a80');
            let  myJson = await response.json();
            for (let i=0; i< myJson.length; i++) {
                //console.log(myJson[i]);
                arraycorreos.push(myJson[i]["userName"])
            }
    
        } catch (error) {
            console.log('That did not go well.')
            throw error
        }
    })().catch( e => { console.error(e) })

    function random() {
        let number = Math.floor(Math.random()*arraycorreos.length);
        console.log(number)
        return number
       }

    let posicion = random()
    let valor = arraycorreos[posicion]
    correoFake = valor.substring(valor.indexOf('@'), valor.length);

    it(`6. login con @XXX.com`, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').scrollIntoView().focus().type(correoFake);
        cy.get('#ember12 > span').click()

    })
})