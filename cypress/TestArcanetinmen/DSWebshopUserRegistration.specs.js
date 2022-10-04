import {faker} from '@faker-js/faker';
const nameRandomf = faker.name.firstName();
const nameRandoml = faker.name.lastName();
const domainname = "qarraeah.mailosaur.net";
const emailRandom = faker.internet.email(nameRandomf,nameRandoml,domainname);
const randomPass = faker.internet.password();

describe.skip('User registration',function(){


it('Register successfully done',function(){
    cy.clearCookies()
    cy.visit('/webshop');
    cy.get('.ti-user').trigger('mouseover')
    cy.contains('Sign in/Register').click({ force: true })
    cy.get('a').contains('REGISTER').click();
    cy.get('#Email').type(emailRandom);
    cy.get('#FirstName').type(nameRandomf);
    cy.get('#LastName').type(nameRandoml);
  cy.get('#Password').type(randomPass);
    cy.get('#ConfirmPassword').type(randomPass);
    cy.log(randomPass);
    cy.get('#MarketingOptIn').check({force:true})
    cy.get('#AcceptTC').check({force:true})
    cy.get('button').contains('Register').click();
    cy.contains("Greetings traveler").should("be.visible");
    cy.wait(50000);
  })
  
     it('Account Activation Email', () => {
     const serverId = 'qarraeah';
     console.log(emailRandom);
     
             cy.mailosaurSearchMessages(serverId, {
              sentTo: emailRandom}).then(email => {
               console.log(email.items[0]);
                expect(email.items[0].from[0].email).to.have.string("@dragonshield.com");
                expect(email.items[0].from[0].email).to.have.string("info");
                expect(email.items[0].to[0].email).to.have.string(emailRandom.toLowerCase());
                expect(email.items[0].subject).to.have.string('Activate your account');
                console.log("Test Pass");
              cy.mailosaurGetMessageById(email.items[0].id).then(emailbody =>{
                console.log(emailbody);
             var accountactlink = emailbody.html.links[0].href;
                console.log(accountactlink);
                cy.visit(accountactlink);

              })
  cy.contains('Congrats, you’re all done!').should('be.visible');
  cy.contains('EU Webshop').click();
      
        })
  
      })

  

})
