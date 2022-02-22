/// <reference types="Cypress"/>

describe('Menu de pesquisa', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        //vai usar o commands POST
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Adiciona um produto como favorito depois exclui', () => {

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2)').should('contain', 'Produtos')
        cy.get('[class="product-block grid"]')
            .eq(3).click()

        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button > .add_to_wishlist > :nth-child(2)').click()
        cy.get('#yith-wcwl-popup-message').should('contain', 'Produto adicionado!')
        // vai verificar se está na lista de desejo
        cy.get(':nth-child(2) > .text-skin > .fa').click({ force: true })
        //cy.get('.wishlist-title-container').should('contain', 'LISTA DE DESEJOS')      
        cy.get('.wishlist-title').should('contain', 'My wishlist')
        //vai remover produto
        cy.get('.remove > .fa').click({ force: true })
        cy.get('.wishlist-empty').should('contain', 'No products were added to the wishlist')
        cy.get('.woocommerce-message').should('contain', 'Produto removida com sucesso.')
        // faz logout
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
    });
});