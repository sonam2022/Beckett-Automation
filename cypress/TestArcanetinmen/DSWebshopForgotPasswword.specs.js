
import {faker} from '@faker-js/faker';
 const domainname = "qarraeah.mailosaur.net";
const emailRandom = "dorthy_schuppe@qarraeah.mailosaur.net";
describe.skip('forget password',()=>{

it.skip('Forgot password screen',() =>{

cy.visit('https://auth.dragonshield.com/Account/ForgotPassword');
cy.get('#Email').type(emailRandom);
cy.get('.btn').click();
cy.wait(100000);
})
it('Gets Password Reset email from Mailosaur', () => {
    const serverId = 'qarraeah';
    console.log(emailRandom);
    cy.mailosaurGetMessage(serverId, {
        sentTo: emailRandom
    }).then(email => {
        console.log(email);
        expect(email.subject).to.have.string('Reset your password');
     var passwordResetLink = email.text.links[0].href;
     console.log(passwordResetLink);
     cy.visit(passwordResetLink,{force:true});

})
        const validPassword = faker.internet.password();
        console.log(validPassword);
        cy.contains('Reset your password').should('be.visible');
        cy.get('#Password').type(validPassword);
        cy.get('#ConfirmPassword').type(validPassword);
        cy.get('.btn').click();
        cy.log(cy.url());
        cy.contains("Reset confirmed!").should('be.visible');
        cy.get('.btn').click();
     //   cy.visit("https://auth.dragonshield.com/Account/Login");
        cy.get('#Email').type(emailRandom);
            cy.get('#Password').type(validPassword);
            cy.get('.btn').click();

    })
})