import OPGSearch from "../TestBeckett/PageObjects/opgsearch";
import bktlogin from "../TestBeckett/PageObjects/bktlogin";

const opgsearch = new OPGSearch();
const login = new bktlogin();

describe('OPGSearch',function(){

  beforeEach(() => {
    cy.fixture("searchterm.json").then(function(data){
globalThis.searchdata = data;
})
cy.fixture("bktlogindetails.json").then(function(data){
globalThis.emaildata = data;

})
   cy.visit('');
   cy.url().should('include','beckett');
    })

it.skip('without login',()=>{
opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
opgsearch.loginnote().should('be.visible');
opgsearch.clickhere().click({force:true});
login.email().type(emaildata.email);
login.pwd().type(emaildata.password);
login.loginbutton().click();
opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
opgsearch.autopopulate().should('be.visible');
opgsearch.autopopulate().trigger('focus');
opgsearch.autopopulateselect().eq(1).click({force:true});
opgsearch.searchclick().click({force:true});
cy.wait(30000);
opgsearch.searchresults().should('be.visible');
    })

 it.skip('OPG Search No Record Found',()=>{
 opgsearch.searchbox().type(searchdata.searchtermnorecord,{force:true});
opgsearch.loginnote().should('be.visible');
opgsearch.clickhere().click({force:true});
 login.email().type(emaildata.email);
 login.pwd().type(emaildata.password);
 login.loginbutton().click();
 opgsearch.searchbox().type(searchdata.searchtermnorecord,{force:true});
opgsearch.autopopulate().contains('No results found.').should('be.visible');

})

 it.skip('Logged In User',()=>{
 cy.visit("/login")
  login.email().type(emaildata.email);
 login.pwd().type(emaildata.password);
login.loginbutton().click();
  opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
  opgsearch.autopopulate().should('be.visible');
 opgsearch.autopopulate().trigger('focus');
 opgsearch.autopopulateselect().eq(1).click({force:true});
 opgsearch.searchclick().click({force:true});
 cy.wait(30000);
  opgsearch.searchresults().should('be.visible');
 /* opgsearch.autopopulate().contains('');
 opgsearch.autopopulateselect().eq(1).click({force:true});
opgsearch.searchclick().click({force:true});*/
         
 })

it.skip('Logged In User show/hide filter',()=>{
cy.visit("/login")
  login.email().type(emaildata.email);
 login.pwd().type(emaildata.password);
 login.loginbutton().click();
   opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
  opgsearch.autopopulate().should('be.visible');
 opgsearch.autopopulate().trigger('focus');
opgsearch.autopopulateselect().eq(1).click({force:true});
  opgsearch.searchclick().click({force:true});
   cy.wait(30000);
 opgsearch.searchresults().should('be.visible');
 opgsearch.hidefilter().click();
opgsearch.allfilters().should('not.be.visible')
               
 })  
                      
  
 it.skip('gridview',()=>{
 cy.visit("/login")
 login.email().type(emaildata.email);
 login.pwd().type(emaildata.password);
login.loginbutton().click();
 opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
  opgsearch.autopopulate().should('be.visible');
 opgsearch.autopopulate().trigger('focus');
 opgsearch.autopopulateselect().eq(1).click({force:true});
 opgsearch.searchclick().click({force:true});
 cy.wait(30000);
 opgsearch.searchresults().should('be.visible');
 opgsearch.gridview().click();
                     
 })  

 it.skip('gridview',()=>{
cy.visit("/login")
login.email().type(emaildata.email);
 login.pwd().type(emaildata.password);
 login.loginbutton().click();
opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
 opgsearch.autopopulate().should('be.visible');
  opgsearch.autopopulate().trigger('focus');
  opgsearch.autopopulateselect().eq(1).click({force:true});
 opgsearch.searchclick().click({force:true});
 cy.wait(30000);
 opgsearch.searchresults().should('be.visible');
opgsearch.gridview().click();
                                        
  })

                                                
  it.skip('Pagination',()=>{
cy.visit("/login")
 login.email().type(emaildata.email);
  login.pwd().type(emaildata.password);
 login.loginbutton().click();
opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
 opgsearch.autopopulate().should('be.visible');
 opgsearch.autopopulate().trigger('focus');
 opgsearch.autopopulateselect().eq(0).click({force:true});
  opgsearch.searchclick().click({force:true});
  cy.wait(20000);
 opgsearch.searchresults().should('be.visible');
var pages =  opgsearch.pagination(length);
 console.log(pages)
                  
opgsearch.paginationnext().then(($next) => {
                            // look at the attribute "disabled"
                            // to see if we reached the end of the table
 if ($next.attr('disabled') === 'disabled') {
  cy.log('Last page!')
 } else {
 
  cy.wrap($next).eq(0).wait(500).click()
 }
 })
                    
 cy.log('**confirm we are on the last page**')
                                 
 })

 it.skip('titles click',()=>{
 cy.visit("/login")
 login.email().type(emaildata.email);
 login.pwd().type(emaildata.password);
 login.loginbutton().click();
  opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
opgsearch.autopopulate().should('be.visible');
 opgsearch.autopopulate().trigger('focus');
opgsearch.autopopulateselect().eq(0).click({force:true});
 opgsearch.searchclick().click({force:true});
 cy.wait(10000);
 opgsearch.searchresults().should('be.visible');
 const titlecount = opgsearch.titleclick(length);
 console.log(titlecount)
 for(var i = 1;i<=500;i++){
  console.log(i);
const producttitle = `.title > ul>:nth-child(${i}) > a`
 cy.get(producttitle).each((el) => {
  cy.wrap(el).invoke("attr", "target", "_blank").click();
  

 })                                  
} 

})
it.skip('View Market data',()=>{
  cy.visit("/login")
  login.email().type(emaildata.email);
   login.pwd().type(emaildata.password);
   login.loginbutton().click();
  opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
   opgsearch.autopopulate().should('be.visible');
    opgsearch.autopopulate().trigger('focus');
    opgsearch.autopopulateselect().eq(1).click({force:true});
   opgsearch.searchclick().click({force:true});
   cy.wait(30000);
   opgsearch.searchresults().should('be.visible');
 opgsearch.mdrpopup().eq(10).click();
 opgsearch.mdrpopupview().should('be.visible')
 cy.get('.table-responsive').then(($element)=>{
if($element.is(':visible')){
  opgsearch.mdritemname().then(($title)=>{
 console.log($title.text())
 opgsearch.mdrpopupgraded().click()
  })

}
else{

console.log("no record found")
}



 })

 it('Pricing Pop Up',()=>{
  cy.visit("/login")
  login.email().type(emaildata.email);
   login.pwd().type(emaildata.password);
   login.loginbutton().click();
  opgsearch.searchbox().type(searchdata.searchterm1,{force:true});
   opgsearch.autopopulate().should('be.visible');
    opgsearch.autopopulate().trigger('focus');
    opgsearch.autopopulateselect().eq(1).click({force:true});
   opgsearch.searchclick().click({force:true});
   cy.wait(30000);
   opgsearch.searchresults().should('be.visible');
 opgsearch.pricingpopup().eq(10).click();
 opgsearch.conditionalpricing().should('be.visible')
 opgsearch.gradedpricing().click()
  })
})
})