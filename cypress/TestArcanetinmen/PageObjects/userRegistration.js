class newuser{

    hoverusericon(){
return  cy.get('.ti-user').trigger('mouseover');

}

clicksigninregister(){
return cy.contains('Sign in/Register')

}

register(){
return cy.get('a').contains('REGISTER')
}

newemail(){
  return  cy.get('#Email');

}

newfname(){

 return   cy.get('#FirstName')
}

newlname(){

  return  cy.get('#LastName');
}

pwd(){
return cy.get('#Password')

}

cpwd(){

 return cy.get('#ConfirmPassword');

}

tnc(){
return cy.get('#MarketingOptIn');

}

AcceptTC(){

    return cy.get('#AcceptTC');

}

submitnuser(){
return cy.get('button').contains('Register')
}

usersuccess(){
  return cy.contains('Greetings traveler')
  
  }


usersuccess1(){
return cy.contains('Congrats, you’re all done!')

}
}
export default newuser;
