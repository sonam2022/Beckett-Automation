import userRegistration from '../TestBeckett/PageObjects/userRegistration'
import 'cypress-v10-preserve-cookie';
import {faker} from '@faker-js/faker';

const nameRandomun = faker.internet.userName('Beckett','Random');
const domainname = "q2id0izb.mailosaur.net";
const emailRandom = (nameRandomun+"@".concat(domainname));
const randomPass = faker.internet.password();


describe('User registration',function(){


  const userreg = new userRegistration();

it('Register successfully done',function(){
    cy.visit('');
    cy.wait(5000);
    userreg.loginclick().click();
  userreg.clicksigninregister().click({force:true});
    userreg.username().type(nameRandomun);
    userreg.newemail().type(emailRandom)
    userreg.newpassword().type("Beckett@1234");
    console.log(emailRandom);
    console.log(randomPass);
    //userreg.newmobilecountry().click();
    userreg.country().click();
    userreg.selectedcountry().contains('Turkey').click();
    userreg.inputnumber().type(23213213213);
    cy.wait(30000);
    userreg.AcceptTC().click();
    userreg.signupnuser().click();
    userreg.usersuccess().should("be.visible");
  })
  
     it('Account Activation Email', () => {
     const serverId = 'q2id0izb';
     console.log(emailRandom);
    
             cy.mailosaurSearchMessages(serverId, {
              sentTo: emailRandom}).then(email => {
               console.log(email.items[0]);
                expect(email.items[0].from[0].email).to.have.string("@beckett.com");
                expect(email.items[0].from[0].email).to.have.string("webmaster");
                expect(email.items[0].to[0].email).to.have.string(emailRandom);
                expect(email.items[0].subject).to.have.string('Activate Your Beckett.com Account!');
                console.log("Test Pass");
              cy.mailosaurGetMessageById(email.items[0].id).then(emailbody =>{
                console.log(emailbody);
             var accountactlink = emailbody.html.links[2].href;
                console.log(accountactlink);
                cy.visit(accountactlink);
                cy.wait(20000);
              })
          
userreg.usersuccess().should('be.visible');
userreg.usersuccess().click();
  userreg.useractivated().should('be.visible');

            })
          })
})
  
    

