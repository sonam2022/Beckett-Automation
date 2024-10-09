class gradelook{

serialnumbertext(){

    return cy.get('#item_id')

}


submit(){

    return cy.get('#btn_card_lookup')
}

carddetailsbgs(){

    return cy.get('.main_content_area').children().contains('Card Serial Number: 34234')
}

bvg(){

    return cy.get('#bvg')
}
carddetailsbvg(){

    return cy.get('.main_content_area').children().contains('Card Serial Number: 1037')
}

bccg(){

return cy.get('#bccg')

}



}

export default gradelook;