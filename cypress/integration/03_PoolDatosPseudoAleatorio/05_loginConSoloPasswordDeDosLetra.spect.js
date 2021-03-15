const faker = require('faker');

describe(`4. login con solo usuario de dos letra`, function () {

    let arrayLetras = new Array;

    (async function () {
        try {
            const response = await fetch('https://my.api.mockaroo.com/login_usuario2.json?key=292d8a80');
            let  myJson = await response.json();
            for (let i=0; i< myJson.length; i++) {
                //console.log(myJson[i]);
                arrayLetras.push(myJson[i]["userName"](-3, -1))
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

    it(`4. login con solo usuario de dos letra`, function () {

        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('#ember10').scrollIntoView().focus().type(valor);
        cy.get('#ember10').scrollIntoView().focus().type(valor);
        cy.get('#ember12 > span').click()
    })
})