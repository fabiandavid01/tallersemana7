const faker = require('faker');

//Configurar enlace a cuenta de Facebook
describe('Prueba la pagina ghost', () => {

    let arrayLetras = new Array;

    (async function () {
        try {
            const response = await fetch('https://my.api.mockaroo.com/generalSettings1.json?key=292d8a80');
            let  myJson = await response.json();
            for (let i=0; i< myJson.length; i++) {
                //console.log(myJson[i]);
                arrayLetras.push(myJson[i]["titulo"][1])
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


        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
        cy.wait(1000);
        cy.get('.mt2 > .gh-setting-first').contains('Expand').click({ force: true });

        cy.get('.ember-text-field.gh-input.ember-view').first().click({ force: true });
        cy.get('.ember-text-field.gh-input.ember-view').first().clear();
        cy.get('.ember-text-field.gh-input.ember-view').first().type(valor)

        cy.get('.ember-text-field.gh-input.ember-view').eq(1).click({ force: true });
        cy.get('.ember-text-field.gh-input.ember-view').eq(1).clear();

        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

    })
})