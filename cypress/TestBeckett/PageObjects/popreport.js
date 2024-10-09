class gradingpopreport{

popreportmenu(){

        return cy.get('.nav-link.pb-0').contains('Pop Report')
    }

sportsdropdown(){

return cy.get('#sport_id')

}

set_name(){


    return cy.get('#set_name')
}

player_name(){

return cy.get('#player_name')

}

submit(){

return cy.get('[name="search"]')

}


searchlist(){

    return cy.get('.pop_search_list>ul>li>a')

}

searchlistplayer1(){

return cy.get('.pop-report-list > ul > :nth-child(1) > a')

}

searchlistplayer(){

    return cy.get('.pop-report-list > ul > li').children('a');
    
    }

settitle(){


    return cy.get('.data-title')
}

}

export default gradingpopreport