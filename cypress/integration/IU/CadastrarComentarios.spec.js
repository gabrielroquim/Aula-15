/// <reference types="Cypress"/>
var faker = require('faker-br');

describe('Tela de Comentários -  usando faker', () => {
    beforeEach(() => {
        cy.visit('minha-conta')

    });


    it('Realizar um comentário', () => {
        cy.get(':nth-child(2) > h2').should('contain', 'Register')
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()
        cy.get('h1.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')


        cy.get('.logo-in-theme > .logo > a > .logo-img').click()        
        cy.get(':nth-child(1) > .item > .post-grid > .post > .entry-content > .meta-info > .comments-link > a').click()
        cy.get('.title').should('contain', 'Leave a Comment')
        cy.get('#comment').type(faker.lorem.text())
        cy.get('#submit').click()
        cy.get('em').should('contain', 'Your comment is awaiting moderation.')      

    
    });
});