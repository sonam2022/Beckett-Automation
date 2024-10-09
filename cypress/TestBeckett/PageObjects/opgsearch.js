class OPGSearch{

searchbox(){

    return cy.get('.rounded-0');

}

loginnote(){

   return cy.get('div').contains('Please login to search the Beckett Online Price Guide.') ;
}

clickhere(){


    return cy.get('a').contains('Click here');
}

searchresults(){

    return cy.get('.searchResult');
}

autopopulate(){

    return cy.get('.overflow-auto.dropdown-menu.dropdown-menu-fix.show');
}


autopopulateselect(){

    return cy.get('.overflow-auto.dropdown-menu.dropdown-menu-fix.show').children('.dropdown-item');
}

searchclick(){

    return cy.get('.px-3.text-white.btn.btn-primary');
}


hidefilter(){

    return cy.get('.arrowLeftRight')

}

allfilters(){

    return cy.get('.filterBytxt').contains(' ALL FILTERS ')


}


gridview(){

    return cy.get('#thumb')

}

pagination(){

    return cy.get('.pagi.light-theme.simple-pagination').children();
}

paginationnext(){


    return cy.get('.next')
}

titleclick(){


    return cy.get('.title > ul')
}

mdrpopup(){

    return cy.get('.view_mkt_report')


}

mdrpopupview(){

    return cy.get('#viewmarketdata-body')

}

mdrpopupgraded(){

    return cy.get('[data-target="#graded_div"]')

}

mdrtable(){

return cy.get('.table-responsive')
}

mdritemname(){

    return cy.get('#hdn_raw_card_total')
}


pricingpopup(){

    return cy.get('[title="Conditional Pricing"]')
}

gradedpricing(){

    return cy.get('.nav-link').contains('Graded Pricing')


}

conditionalpricing(){

    return cy.get('#viewOrganize-body')
}

filterattr(){

    return cy.get('#attr1')
}

applyattr(){

    return cy.get('[rel="searchLink__attr"]')
}

filtercollege(){

    return cy.get("#college10")
}

applycollegr(){

    return cy.get('[rel="searchLink__college"]')
}
filersport(){

    return cy.get("#sport1")
}

applysport(){

    return cy.get('[rel="searchLink__sport"]')
}

}

export default OPGSearch;




