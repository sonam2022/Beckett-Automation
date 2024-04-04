import {faker} from '@faker-js/faker';

const message =  faker.lorem.lines();
describe('Contact Us Form',function(){
       beforeEach(() => {
        
            cy.visit('/webshop');
           cy.url().should('include','dragonshield');
           cy.xpath("/html/body/div[1]/div/div[4]/div[1]/div[2]/button[4]").click();
           cy.log('Page loaded successfully');
           cy.get('.ti-user').click();
           cy.contains('Sign in/Register').click({force:true});
           cy.wait(10000);
           cy.get('#Email').type('sonamk1@beckett.com');
           cy.get('#Password').type('Test@1234');
           cy.get('.btn').click();

          })

          it('Contact Us Form',function(){
cy.get('#footer').scrollIntoView().contains('Contact Us').click({force:true});
cy.get('select').first().select('Webmaster');
cy.get('select').last().select(1);
cy.get('#msgText').type(message);
cy.get('[name="submitMessage"]').click();
cy.contains('Your message has been successfully sent to our team.').should('be.visible');


          })
        })