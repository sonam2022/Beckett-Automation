import { beforeEach } from "mocha";
import guestuser from "./PageObjects/guestuser";
import {faker} from '@faker-js/faker';
import opgcheckout from "./PageObjects/opgcheckout";

const nameRandomun = faker.internet.userName('Beckett','Random');
const domainname = "q2id0izb.mailosaur.net";
const emailRandom = (nameRandomun+"@".concat(domainname));

describe('OPGCheckout Guest User',function(){
    const guest = new guestuser();
    const checkout = new opgcheckout();

beforeEach(function(){
 
        cy.visit('/subscriptions/buy');
        console.log("Pass1");
        guest.email().type(emailRandom);
        guest.instantotp().click();
        
    })

   
    it('Get otp from Mailosaur', () => {
        const serverId = 'q2id0izb';
        console.log(emailRandom);
        cy.mailosaurSearchMessages(serverId, {
            sentTo: emailRandom}).then(email => {
             console.log(email.items[0]);
     cy.mailosaurGetMessage(serverId, {
            sentTo: emailRandom
        }).then(email => {
            console.log(emailRandom);
            expect(email.subject).to.have.string('Login OTP Request');
            const otp = email.html.codes[0].value;
        console.log(otp);
        guest.enterotp().type(otp)
        cy.wait(30000);
        guest.loginsubmit().click();


})
cy.wait(10000);
checkout.gettotalaccess().click();
checkout.cartnextstep().click();
cy.wait(30000);
guest.addnewaddressclick().click();
guest.addaddress().should('be.visible')
guest.addfirstname().type('Beckett');
guest.addlastname().type('Last');
guest.address().type('test Address')
guest.city().type('city');
guest.state().select('Ohio')
guest.country().select('United States')
guest.zipcode().type(46410);
guest.add_address_button().click();
cy.wait(20000);
guest.phone().type(7081023222);
checkout.addressnext().eq(0).click({force:true});
cy.wait(20000)
guest.addnewcardclick().click();
guest.ccform().should('be.visible')
guest.ccnumber().type(4111111111111111);
guest.expirationmonth().select(12)
guest.expirationyear().select(2027);
cy.wait(30000);
guest.button_cc().click();
checkout.cvv2().type(222);
checkout.tnc().click();
cy.wait(10000);
checkout.paynow().click();
checkout.onsiteeerror().should('be.visible')

})
    })
})