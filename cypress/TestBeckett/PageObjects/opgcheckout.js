class opgcheckout{

    gettotalaccess(){

return cy.get('a').contains('Get Total Access!')

    }

    shoppingcartitems(){


        return cy.get('#opg-cart-summary')
    }

    
cartnextstep(){


    return cy.get('#placeOrderNew')
}


addressnext(){

    return cy.get('.mPay');
}

cvv2(){

    return cy.get('#cvv2')
}

tnc(){

    return cy.get('#terms_accept')
}


paynow(){

    return cy.get('#purchase_button')
}


onsiteeerror(){

return cy.get('#site_notification_content')

}

}
export default opgcheckout