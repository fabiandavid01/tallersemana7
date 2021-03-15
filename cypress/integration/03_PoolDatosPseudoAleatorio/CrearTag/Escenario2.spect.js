const fetch = require("node-fetch");

describe(`Pruebas con Ghost - Faker`, function() {

    let arrayNombre = new Array;

    (async function () {
        try {
            const response = await fetch('https://my.api.mockaroo.com/tagName_word?key=292d8a80');
            let  myJson = await response.json();
            for (let i=0; i< myJson.length; i++) {
                //console.log(myJson[i]);
                arrayNombre.push(myJson[i]["tag-name"])
            }
    
        } catch (error) {
            console.log('That did not go well.')
            throw error
        }
    })().catch( e => { console.error(e) })

    function random() {
        let number = Math.floor(Math.random()*arrayNombre.length);
        console.log(number)
        return number
       }

    let posicion = random()
    let valor = arrayNombre[posicion]
    
    beforeEach(() => {
        // ------
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get('form').within(() => {
            cy.get('.email.ember-text-field.gh-input.ember-view').type('luque.lopez.adriana@gmail.com')
            cy.get('.password.ember-text-field.gh-input.ember-view').type('adrianaluque')
            cy.get('#ember12 > span').click()
        })
        cy.wait(1000)
    })

    /*Escenario 2*/
    it(`Crear tag con minimo de caracter`, function() { 
        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
        cy.get('.gh-canvas > .gh-canvas-header > .view-actions > #ember70 > span').click()
        cy.get('input[id="tag-name"]').click({force:true}).type(valor)
        cy.get('header.gh-canvas-header').within(() => {
            cy.get('button').click()
        })
        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember38').click()
    })
})