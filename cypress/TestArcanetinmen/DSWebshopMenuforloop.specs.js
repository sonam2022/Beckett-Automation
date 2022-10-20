describe.skip('Visit Each menu and submenu',()=>{

    before(()=>{

    cy.clearCookies();
    cy.visit('/webshop');
    })

it.skip('Visit Menu of web shop for Solid Color Sleeves>Standard Size',function(){

    const pages = ['Matte Dual 100','Matte 100', 'Perfect Fit','Matte N on-Glare 100','Classic 100']
    
    for(var i=0;i<=pages.length;i++){

cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
cy.get('.dropdown-menu').children().contains('Standard Size').trigger('mouseover',{force:true}).invoke('show')
cy.get('ul[class="level0"]').contains(pages[i]).click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    }
})


it.skip('Visit Menu of web shop for Solid Color Sleeves>Japanese Size',function(){

    const japanpages = ['Classic 60','Matte 60', 'Perfect Fit','Matte Dual 60']
    
    for(var i=0;i<=japanpages.length;i++){

cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
cy.get('.dropdown-menu').children().contains('Japanese Size').trigger('mouseover',{force:true}).invoke('show')
cy.get('ul[class="level0"]').contains(japanpages[i]).click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    }
})

it.skip('Visit Menu of web shop for Art Sleeves>Standard Size',function(){

    const artsleeves = ['Standard Size','Japanese Size']
    for(var i=0;i<=artsleeves.length;i++){
        cy.get('.leo-top-menu > .nav > .nav-item').contains('Art Sleeves').trigger('mouseover',{force:true}).invoke('show');
        cy.get('.dropdown-menu').children().contains(artsleeves[i]).click({force:true});
        cy.window().then(win => win.location.href = "/webshop");
    }
    })


it.skip('Visit Menu of web shop for Roleplaying',function(){
    cy.get('.leo-top-menu > .nav > .nav-item').contains('Roleplaying').trigger('mouseover',{force:true}).invoke('show').click({force:true});

})

it.skip('Visit Menu of web shop for Other Gaming Accessories>Albums',function(){

    const albumpages = ['Portfolio','Binder Pages', 'Zipster Binder','Slipcase Binder']
    
    for(var i=0;i<=albumpages.length;i++){

cy.get('.leo-top-menu > .nav > .nav-item').contains('Other Gaming Accessories').trigger('mouseover',{force:true}).invoke('show');
cy.get('.dropdown-menu').children().contains('Albums').trigger('mouseover',{force:true}).invoke('show')
cy.get('ul[class="level0"]').contains(albumpages[i]).click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    }
})


it('Visit Menu of web shop for Other Gaming Accessories>decks',function(){

    const deckpages = ['Deck Shell','Magic Carpet', 'Nest','Nest+','Cube Shell','Strongbox','Double Shell']
    
    for(var i=0;i<=deckpages.length;i++){

cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
cy.get('.dropdown-menu').children().contains('Japanese Size').trigger('mouseover',{force:true}).invoke('show')
cy.get('ul[class="level0"]').contains(deckpages[i]).click({force:true});
    cy.window().then(win => win.location.href = "/webshop");
    }
})

it('Visit Menu of web shop for OGA Others',function(){

    const ogaPages = ['Playmats', 'Miscellaneous']
    
    for(var i=0;i<=ogaPages.length;i++){

cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
cy.get('.dropdown-menu').children().contains(ogaPages[i]).click({force:true})
cy.window().then(win => win.location.href = "/webshop");
    }
})

it('Visit Menu of web shop for Licensed Products>decks',function(){

    const licensedPages = ['Licensed Sleeves','Licensed Albums', 'Licensed Playmats']
    
    for(var i=0;i<=licensedPages.length;i++){

cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
cy.get('.dropdown-menu').children().contains(licensedPages[i]).click({force:true})
cy.window().then(win => win.location.href = "/webshop");
    }
})


})