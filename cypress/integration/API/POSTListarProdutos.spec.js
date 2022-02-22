/// <reference types="Cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('listar produtos - unsando fixtures para logar', () => {
    before(() => {
        cy.login(perfil.usuario, perfil.senha)
    });

    it('Checar produtos', () => {

        cy.request({
            method: 'GET',
            url: 'produtos',

            //failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.not.null;
            cy.log(response.statusText)

        });
    });
})