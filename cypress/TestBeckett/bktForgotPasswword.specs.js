import forgotPassword from '../TestBeckett/PageObjects/forgotPassword';
import {faker} from '@faker-js/faker';

describe('forget password',()=>{
 const forpwd = new forgotPassword();
 

it('Forgot password screen',() =>{
    cy.fixture("forgotpasswordemails.json").then(function(data){
        globalThis.emaildata = data;
        console.log(emaildata.email)
    cy.visit('/password-help');
forpwd.entermail().type(emaildata.email);
cy.wait(30000);
forpwd.clickSubmit().click();
cy.wait(30000)

    })

})
it('Gets Password Reset email from Mailosaur', () => {
    const serverId = 'q2id0izb';
    console.log(emaildata.email);
    cy.mailosaurSearchMessages(serverId, {
        sentTo: emaildata.email}).then(email => {
         console.log(email.items[0]);
 cy.mailosaurGetMessage(serverId, {
        sentTo: emaildata.email
    }).then(email => {
        console.log(emaildata.email);
        expect(email.subject).to.have.string('Confirm Password Reset');
        const otp = email.html.codes[0].value;
    console.log(otp);
 
        
            forpwd.enterVerificationCode().type(otp);
            forpwd.clickVerify().click();

        forpwd.enterNewPassword().type('Beckett@4321')
        forpwd.enterConfirmPassword().type('Beckett@4321')
        forpwd.clickSubmit2().click();

    })

    })
})
})

