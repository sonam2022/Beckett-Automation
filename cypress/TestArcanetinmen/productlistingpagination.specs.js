import { recurse } from 'cypress-recurse'

describe.skip('Product Listing Pagination',function(){

it('Visit Menu of web shop',function(){

    cy.clearCookies()

    cy.visit('https://www.dragonshield.com/webshop/' ,'{timeout:50000000}')

    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click()

    cy.get('.ti-user').trigger('mouseover')

cy.contains('Sign in/Register').click({ force: true })

cy.get('#Email').type('pjangid@beckett.com')

cy.get('#Password').type('Apple@123')

cy.get('.btn').eq(0).click()

cy.get('.leo-top-menu > .nav > .active > .nav-link > .menu-title').click({force:true}).wait(20000)

const product =':nth-child(1) > .product-miniature > .thumbnail-container > .product-image > .functional-buttons > .pro-info-onhover > a'

recurse(

    ()=> cy.get('.next'),($button)=>$button.hasClass('disabled')=='disabled',

   {

post(){

           cy.log("start");
           cy.get('.next ').should('be.visible').click({force:true});
   cy.log("end");
   cy.wait(20000)

}

})


})
})