import OPGSearch from "../TestBeckett/PageObjects/opgsearch";
import bktlogin from "../TestBeckett/PageObjects/bktlogin";
import organise from "./PageObjects/addtoorganise";
import {faker} from '@faker-js/faker';

const opgsearch = new OPGSearch();
const login = new bktlogin();
const organisenew = new organise();

const collectionname = faker.name.jobTitle('Collection');

describe("Add to Organise",()=>{

    before(()=>{

cy.fixture('bktlogindetails.json').then((data)=>{

    globalThis.emaildata = data;

    cy.fixture('searchterm.json').then((data)=>{

globalThis.searchdata =data;

    })
    cy.visit("/login")
})

    })
it.skip("Add to organise search listing",()=>{

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
      cy.get('.mainDivSearch').then(($filter1)=>{


if($filter1.find(organisenew.searchlistorganisedisabled()).eq(5).is(':disabled')){

    opgsearch.paginationnext().click();
    organisenew.searchlistorganiseenabled().click()

}
else{
    organisenew.searchlistorganiseenabled().eq(5).click()
organisenew.collectionname().type('Collection New')
organisenew.haveqty().type(1)
organisenew.wantqty().type(1)
organisenew.tradeaway().type(1)
organisenew.tradefor().type(1)
organisenew.saveitemtoorganise().click()
cy.wait(10000)
organisenew.successnotification().should('be.visible')
}

})
})
it.skip("Add to organise search listing multiple",()=>{


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
      organisenew.selectallitems().click({force:true})

organisenew.selectedorganise().click()

organisenew.collectionname().type('Collection Select All')
organisenew.haveqty().type(1)
organisenew.wantqty().type(1)
organisenew.tradeaway().type(1)
organisenew.tradefor().type(1)
organisenew.saveitemtoorganise().click()
cy.wait(10000)
organisenew.successnotification().should('be.visible')


    
})




it("Add to organise player detail page",()=>{

    login.email().type(emaildata.email);
    login.pwd().type(emaildata.password);
    login.loginbutton().click();
    cy.visit('/player/mike-roarke-411287');
    organisenew.playerdetailpageorganise().click();

organisenew.collectionname().type('Player Collection')
organisenew.haveqty().type(1)
organisenew.wantqty().type(1)
organisenew.tradeaway().type(1)
organisenew.tradefor().type(1)
organisenew.saveitemtoorganise().click()
cy.wait(10000)
organisenew.successnotificationplayer().should('be.visible')
    
})



})
