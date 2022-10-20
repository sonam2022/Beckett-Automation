
it.skip('Visit Menu of web shop for Solid Color Sleeves',function(){
    cy.clearCookies();
    cy.visit('https://www.dragonshield.com/webshop/');
   

cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Standard Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Matte Dual 100').click({force:true});
    cy.url('includes','dual');
    cy.window().then(win => win.location.href = "/webshop");
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Standard Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Matte 100').click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Standard Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Perfect Fit').click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Standard Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Matte Non-Glare 100').click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Standard Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Classic 100').click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Japanese Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Classic 60').click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Japanese Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Matte 60').click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Japanese Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Perfect Fit').click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    cy.get('.dropdown-menu').children().contains('Japanese Size').trigger('mouseover',{force:true}).invoke('show');
    cy.get('ul[class="level0"]').contains('Matte Dual 60').click({force:true});
    cy.window().then(win => win.location.href = "/webshop");

    



})





// cy.get('.level0').each(($element)=>{
// cy.get($element).click({force:true});
 //cy.log(cy.url());
 //cy.get('.level1').each(($element1)=>{

//cy.ge($element1).click({force:true});

 //})
 //})
/*cy.get('.caret >.dropdown-menu >.dropdown-menu-inner>.row>.ul').children().then(($element)=>{
    if($element.is(':visible')){
    cy.get($element).each(($element)=>{
        cy.wrap($element).trigger('mouseover',{force:true}).click({force:true});
        cy.log($element.text());
        cy.log($element.length);
       /*   cy.get('ul[class="level1"]').then(($element1)=>{
            if($element1.is(':visible')){
cy.get($element1).each(($element1)=>{
cy.wrap($element1).click({force:true});
})
}
    })
})
    }*/

  //   }
//})
// })
// })
// })