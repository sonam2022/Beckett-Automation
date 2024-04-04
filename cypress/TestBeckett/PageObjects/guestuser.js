class guestuser{

    email(){

        return cy.get('#loginEmail')
    }


instantotp(){

    return cy.get('#send-valid-guest-login-otp')


}

enterotp(){

    return cy.get('#validgusetloginOTP')
}


loginsubmit(){

    return cy.get('#login_submit')
}

addnewaddressclick(){

    return cy.get('a').contains('Add new Address')
}

addaddress(){

return cy.get('#add_address_form');

  
}

addfirstname(){

return cy.get('#first_name')

}
addlastname(){

    return cy.get('#last_name')
    
    }

address(){
    return cy.get('#street_1')
}



city(){
    return cy.get('#city')
    
}

state(){
    return cy.get('#state_id')
    
}
country(){
    return cy.get('#country')
    
}

zipcode(){

    return cy.get('#zipcode')
    
}
add_address_button()
{

    return cy.get('#add_address_button')
}

phone(){

    return cy.get('#selected_phone')
}

addnewcardclick(){

    return cy.get('a').contains('Add new Credit Card')
}

ccnumber(){
    return cy.get('#cc_number')
}

ccform(){

    return cy.get('#add_payment_method_form')
}

expirationmonth(){

    return cy.get('#expiration_month')
}

expirationyear(){

    return cy.get('#expiration_year')


}

button_cc(){

    return cy.get('#button_cc')
}
}

export default guestuser;
