class newuser{

    loginclick(){
return  cy.get('a').contains('Login');

}

clicksigninregister(){
return cy.get('a').contains('Sign Up');

}

username(){
return cy.get('#regusername');
}

newemail(){
  return  cy.get('#regemail');

}

newpassword(){

 return   cy.get('#regpassword')
}

country(){

  return  cy.get('.selected-dial-code');
}

selectedcountry(){

  return cy.get('.country-list>.country>.country-name');
}
  inputnumber(){

    return cy.get('#number1');

}
AcceptTC(){

    return cy.get('#terms');

}

signupnuser(){

return cy.get('#submitregistration');

}

usersuccess(){
  return cy.get('input').contains('Verify Account')

  }


useractivated(){
return cy.get('a').contains('Logout')

}
}
export default newuser;
