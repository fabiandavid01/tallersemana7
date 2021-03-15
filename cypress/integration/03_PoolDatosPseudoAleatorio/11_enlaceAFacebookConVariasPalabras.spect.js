const faker = require('faker');

//Configurar enlace a cuenta de Facebook
describe('Prueba la pagina ghost', () => {

    let arrayPalabras = new Array;

    (async function () {
        try {
            const response = await fetch('https://my.api.mockaroo.com/redesSociales3.json?key=292d8a80');
            let  myJson = await response.json();
            for (let i=0; i< myJson.length; i++) {
                //console.log(myJson[i]);
                arrayPalabras.push(myJson[i]["url"])
            }
    
        } catch (error) {
            console.log('That did not go well.')
            throw error
        }
    })().catch( e => { console.error(e) })

    function random() {
        let number = Math.floor(Math.random()*arrayPalabras.length);
        console.log(number)
        return number
       }

    let posicion = random()
    let valor = arrayPalabras[posicion]


    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.wait(3000)
        cy.get('form').within(() => {
            cy.get('.email.ember-text-field.gh-input.ember-view').type('fd.gil10@uniandes.edu.co')
            cy.get('.password.ember-text-field.gh-input.ember-view').type('Bogota2020')
            cy.get('#ember12 > span').click()
        })
        cy.wait(1000)
    })

    it('Enlazar con facebook', () => {

        let urlFacebook = new String();
        urlFacebook = 'https://www.facebook.com/';
        urlFacebook = urlFacebook.concat(faker.random.words());

        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
        cy.get('.flex:nth-child(8) > .gh-setting-first > .gh-setting-action > .gh-btn > span').click();
        cy.get('#ember95 > #ember98 > .gh-setting-content-extended > #ember99 > #ember100').click();
        cy.get('#ember95 > #ember98 > .gh-setting-content-extended > #ember99 > #ember100').click();
        cy.get('#ember95 > #ember98 > .gh-setting-content-extended > #ember99 > #ember100').clear();
        cy.get('#ember95 > #ember98 > .gh-setting-content-extended > #ember99 > #ember100').type(valor);
        cy.get('div > .gh-canvas-header > .view-actions > #ember61 > span').click();

    })
})