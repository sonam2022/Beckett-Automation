import { beforeEach } from "mocha";
import opgcheckout from "./PageObjects/opgcheckout";
import bktlogin from  "./PageObjects/bktlogin";
import userRegistration from './PageObjects/userRegistration';

describe('OPGCheckout Existing User',function(){
    const login = new bktlogin();
    const checkout = new opgcheckout();
    const userreg = new userRegistration();
beforeEach(function(){

    cy.fixture('bktlogindetails.json').then(function(data){

        globalThis.logindata = data;
        cy.visit('');
        console.log("Pass1");
        
    })
})


it('OPG Checkout existing user',function(){
userreg.loginclick().click();
login.email().type(logindata.email);
login.pwd().type(logindata.password);
login.loginbutton().click();
login.logoutbutton().should('be.visible');
cy.log('Page loaded successfully');

cy.visit('/subscriptions/buy');

cy.get('#checkoutFrm').then($element=>{
cy.wait(10000);
if($element.find('#opg-cart-summary').is(':visible'))
{
checkout.cartnextstep().click();
checkout.addressnext().eq(0).click({force:true});
checkout.cvv2().type(222);
checkout.tnc().click();
cy.wait(10000);
checkout.paynow().click();
checkout.onsiteeerror().should('be.visible')
}
else{
checkout.gettotalaccess().click();
checkout.cartnextstep().click();
checkout.addressnext().eq(0).click({force:true});
checkout.cvv2().type(222);
checkout.tnc().click();
cy.wait(10000);
checkout.paynow().click();
checkout.onsiteeerror().should('be.visible')

}
})
})
})