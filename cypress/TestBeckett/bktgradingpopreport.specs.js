import gradingpopreport from "./PageObjects/popreport";
import bktlogin from "./PageObjects/bktlogin";


const popreportpom = new gradingpopreport()
const login = new bktlogin();
describe('Grading pop report',()=>{

beforeEach(()=>{
    cy.fixture('searchterm.json').then((data)=>{

    globalThis.searchterm = data;
    cy.fixture("bktlogindetails.json").then(function(data){
 globalThis.logindata = data;
    cy.visit('\login');
    login.email().type(logindata.email);
    login.pwd().type(logindata.password);
    login.loginbutton().click();
    login.logoutbutton().should('be.visible');
    cy.log('Page loaded successfully');
    })

})
})

it.skip("Pop Report set search",()=>{


popreportpom.popreportmenu().click();
popreportpom.sportsdropdown().select('Baseball')
popreportpom.set_name().type(searchterm.searchterm1);
popreportpom.submit().click({multiple:true});
popreportpom.searchlist().eq(5).then(($div)=>{

    const text =$div.text();
    console.log(text)
    popreportpom.searchlist().eq(5).click();
cy.wait(20000);
popreportpom.settitle().should('have.text',text)

})

})  
it("Pop Report Player search",()=>{
popreportpom.popreportmenu().click();
popreportpom.sportsdropdown().select('Baseball')
popreportpom.player_name().type(searchterm.playersearch2);
popreportpom.submit().click({multiple:true});
cy.wait(20000);
popreportpom.searchlistplayer().eq(5).then(($div)=>{

    const text =$div.text();
    console.log(text)
    popreportpom.searchlistplayer().eq(5).click();
cy.wait(20000);
popreportpom.settitle().should('have.text',text)

})
})
})