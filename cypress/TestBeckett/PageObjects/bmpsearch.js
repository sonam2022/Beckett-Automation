class bmpsearch{

bmpmenu(){

    return cy.get('.nav-link.pb-0').contains('Marketplace')
}

bmpsearchtext(){

return cy.get('#siteSearchQuery')

}

bmpsearchicon(){


return cy.get('#search_button_opg')

}

compareitemsexpand(){

    return cy.get('.compareItemsExpand')
}

compareitemscollapse(){

    return cy.get('.compareItemsCollapse')
}


filtersall(){

return cy.get('.filters-list>.filter-category')

}


itemfilter(){


return cy.get('ul>li>a').contains('Item')
}

sportfilter(){


    return cy.get('ul>li>a').contains('Baseball').eq(3)
    }
    
    sportfilter4(){


        return cy.get('ul>li>a').contains('Non-sports ')
        }

        newlyadded(){


            return cy.get('ul>li>a').contains('Newly Added ')
            }
addtocart(){

    return cy.get('.addtocartbtn')

}

checkbox(){

    return cy.get('[name ="result_type_id[]"]')
}

addselectedtocart(){

return cy.get('#add_selected_to_cart')

}

pagination(){

return cy.get('.search-paginations > div.pagination > #yw0 > .next > .dt_trigger')
}

}


export default bmpsearch;