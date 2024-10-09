import bmpsearch from "./PageObjects/bmpsearch";
import login from "./PageObjects/bktlogin";
import userRegistration from '../TestBeckett/PageObjects/userRegistration';

const bmpsearchpom = new bmpsearch();
const logindata = new login();
const userreg = new userRegistration();
describe('BMP Search',()=>{
    beforeEach(() => {
     
         cy.visit('');
        cy.url().should('include','beckett');
       
        cy.log('Page loaded successfully');

    
         cy.fixture("searchterm.json").then(function(data){
         globalThis.searchtm = data; 

         cy.fixture("bktlogindetails.json").then((data)=>{
globalThis.logindet = data;

userreg.loginclick().click()
logindata.email().type(logindet.email)
logindata.pwd().type(logindet.password)
logindata.loginbutton().click();

         })
         }) 
       })

it.skip('BMP Search Apply Filters',()=>{

bmpsearchpom.bmpmenu().invoke('attr','target','_self').click();
bmpsearchpom.bmpsearchtext().type(searchtm.searchterm1)
bmpsearchpom.bmpsearchicon().click();
cy.wait(10000)
bmpsearchpom.itemfilter().click();
bmpsearchpom.sportfilter().click({force:true})
})

it.skip('Compare Expand ',()=>{

  bmpsearchpom.bmpmenu().invoke('attr','target','_self').click();
  bmpsearchpom.bmpsearchtext().type(searchtm.searchterm1)
  bmpsearchpom.bmpsearchicon().click();
  cy.wait(10000)
  bmpsearchpom.sportfilter4().click();
 const comparelen = bmpsearchpom.compareitemsexpand(length);
console.log(comparelen);
for (var i = 1;i<=5;i++)
{
if(i==1){
bmpsearchpom.compareitemsexpand().eq(i).click()
bmpsearchpom.compareitemscollapse().eq(i).click()
}
else
{
  bmpsearchpom.compareitemsexpand().eq(i).click()
bmpsearchpom.compareitemsexpand().eq(i).click()

}

}
})

it.skip('Add to cart ',()=>{

  bmpsearchpom.bmpmenu().invoke('attr','target','_self').click();
  bmpsearchpom.bmpsearchtext().type(searchtm.searchterm1)
  bmpsearchpom.bmpsearchicon().click();
  cy.wait(10000)
  bmpsearchpom.newlyadded().click()
var addtocartcount = bmpsearchpom.addtocart(length)
console.log(addtocartcount)

for(var i = 1;i<=10;i++){

  bmpsearchpom.addtocart().eq(i).click()
  cy.go('back')
  cy.wait(10000)
}


})

it.skip('Add Selected to cart ',()=>{

  bmpsearchpom.bmpmenu().invoke('attr','target','_self').click();
  bmpsearchpom.bmpsearchtext().type(searchtm.searchterm1)
  bmpsearchpom.bmpsearchicon().click();
  cy.wait(10000);
for(var i = 1;i<=5;i++){

  bmpsearchpom.checkbox().eq(i).click()
 
}
bmpsearchpom.addselectedtocart().click()
})

it('BMP Pagination ',()=>{

  bmpsearchpom.bmpmenu().invoke('attr','target','_self').click();
  bmpsearchpom.bmpsearchtext().type(searchtm.searchterm1)
  bmpsearchpom.bmpsearchicon().click();
  cy.wait(10000);
  bmpsearchpom.pagination().then((next)=>{
if(next.attr('disabled') == 'disabled'){

  cy.log("search is on last page")
}

else{
var i=1;
  cy.wrap(next).eq(i).click();
cy.wait(20000);
i++;
}
})
cy.log("Pagination succeeded")
})

  })





