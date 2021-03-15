const dataEmpresas = require("./data/04_DataEmpresas.json");

//Configurar enlace a cuenta de Facebook
describe('Prueba la pagina ghost', () => {

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

        let indice = new Number();
        let variable = new String();
        let urlFacebook = new String();

        urlFacebook = 'https://www.facebook.com/';

        indice = getRandomArbitrary(1, 10);
        variable = dataEmpresas[indice].nombreEmpresa;
        urlFacebook = urlFacebook.concat(variable);

        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
        cy.get('.flex:nth-child(8) > .gh-setting-first > .gh-setting-action > .gh-btn > span').click();
        cy.get('#ember95 > #ember98 > .gh-setting-content-extended > #ember99 > #ember100').click();
        cy.get('#ember95 > #ember98 > .gh-setting-content-extended > #ember99 > #ember100').click();
        cy.get('#ember95 > #ember98 > .gh-setting-content-extended > #ember99 > #ember100').clear();
        cy.get('#ember95 > #ember98 > .gh-setting-content-extended > #ember99 > #ember100').type(urlFacebook);
        cy.get('div > .gh-canvas-header > .view-actions > #ember61 > span').click();

    })
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
