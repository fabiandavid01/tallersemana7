
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


        cy.get('.gh-nav-body > .gh-nav-top > .gh-nav-list > li > #ember40').click();
        cy.wait(1000);
        cy.get('.mt2 > .gh-setting-first').contains('Expand').click({ force: true });

        cy.get('.ember-text-field.gh-input.ember-view').first().click({ force: true });
        cy.get('.ember-text-field.gh-input.ember-view').first().clear();

        cy.get('.ember-text-field.gh-input.ember-view').eq(1).click({ force: true });
        cy.get('.ember-text-field.gh-input.ember-view').eq(1).clear();

        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();

    })
})