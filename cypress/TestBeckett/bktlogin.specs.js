import userRegistration from '../TestBeckett/PageObjects/userRegistration';
import bktlogin from '../TestBeckett/PageObjects/bktlogin';


describe('Beckett Login',function(){
   const userreg = new userRegistration();
   const login = new bktlogin();
   beforeEach(function(){

      cy.fixture("bktlogindetails.json").then(function(data){
      globalThis.logindata = data;
      cy.visit('');
      cy.url().should('include','beckett');
      console.log("Pass1");
      userreg.loginclick().click();
         
      })
   })

it('Login with Valid credentials',function(){
    
   login.email().type(logindata.email);
   login.pwd().type(logindata.password);
   login.loginbutton().click();
   login.logoutbutton().should('be.visible');
   cy.log('Page loaded successfully');

  })

  it('Login with inValid credentials',function(){
   login.email().type(logindata.email);
   login.pwd().type(logindata.password2);
   login.loginbutton().click();
   login.loginNote().should('be.visible');
   cy.log('Page loaded successfully');

  })

  it('Login with no pwd credentials',function(){
   login.email().type(logindata.email);
   login.pwd().type("       ");
   login.loginbutton().should('be.disabled');
   cy.log('Test Pass 3');

  })

  it('Login with no email credentials',function(){
   login.email().type("       ");
   login.pwd().type(logindata.password);
   login.loginbutton().should('be.disabled');
   cy.log('Test Pass 3');

  })
  it('Login with no credentials',function(){
   login.email().type("      ");
   login.pwd().type("          ");
   login.loginbutton().should('be.disabled');
   cy.log('Test Pass 3');

  })

      })

