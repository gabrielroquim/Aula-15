/// <reference types = "cypress"/>


describe('Teste de login loja ebac -  Usando fixtures', () => {

    it.only('login', () => {
        cy.request({
            method: 'POST',
            url:'minha-conta',
            body: {
                "email":"aluno_ebac@teste.com",
                "senha":"teste@teste.com"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            //expect(response.body).to.be.not.null;   
           // expect(response.body).to.equal(name)            
expect(response.toString.name).to.equal('toString');
//expect(response.body).to.include('Minha conta')
//expect(response.title).to.equal('Minha conta')
//expect(response.body.email).to.equal("aluno_ebac@teste.com")

  
    
    })
})

 it('Dados da conta', () => {
     cy.request({
         method: 'POST',
         url:'minha-conta/edit-account/'

     }).then((response) => {
         expect(response.status).to.equal(200);        
         cy.log(response.statusText)
         cy.log(response.body)
         
         
     })
     
 });



})