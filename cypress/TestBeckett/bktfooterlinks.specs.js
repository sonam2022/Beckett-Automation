import footerlinks from "./PageObjects/footerlinks";
import bktlogin from '../TestBeckett/PageObjects/bktlogin';
const footerlink = new footerlinks();
const login = new bktlogin();
describe('Footer links',function(){

  
beforeEach( () => {
    cy.fixture("bktlogindetails.json").then(function(data){
        globalThis.logindata = data;

cy.visit("");
cy.wait(20000)

})
})

it.skip("Visit all links without login",function(){
    footerlink.footerclass().should('be.visible')


footerlink.footerclass().each((links)=>{
    
    cy.get(links).invoke('attr','target','_blank').click({force:true});
  


})
})

it("Visit all links with login",function(){
    cy.visit("/login")

    login.email().type(logindata.email);
   login.pwd().type(logindata.password);
   login.loginbutton().click();
   login.logoutbutton().should('be.visible');
    footerlink.footerclass().should('be.visible')


footerlink.footerclass().each((links)=>{
    
    cy.get(links).invoke('attr','target','_blank').click({force:true});
  


})
})
})


