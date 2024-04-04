class login{

email(){

    return cy.get('#loginEmail')
}

pwd(){


  return  cy.get('#loginPassword')
}



loginbutton(){

 return cy.get('#btn_login')

}

logoutbutton(){

    return cy.get('a').contains('Logout');
}

loginNote(){

    return cy.get('.login-note').contains("We're sorry, but the username/password you entered is incorrect");
}

}
export default login;