/// <reference types="Cypress"/>


describe('listar produtos', () => {
    before(() => {
        cy.login('aluno_ebac@teste.com', 'teste@teste.com' )
    });

    it('Ver produtos', () => {

        cy.request({
            method: 'POST',
            url:'produtos',
            
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200);        
            cy.log(response.statusText)
            cy.log(response.body)
         
         

           //cy.url().should('eq', 'http://lojaebac.ebaconline.art.br/xmlrpc.php')
           //cy.url().should('contain', '#lojaebac.ebaconline.art')
            //expect(response.headers.title).to.equal('produtos')
           
    });
});
})