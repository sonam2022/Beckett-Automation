class forgotpwd{

    entermail(){

        return cy.get('#Email');

    }

    enterpassword(){

        return cy.get('#Password')
    }

 enterconfirmpassword(){
        return  cy.get('#ConfirmPassword')

    }

clickButton(){

    return cy.get('.btn');

}


loginemail(){
 return cy.get('#Email');


}

}

export default forgotpwd;