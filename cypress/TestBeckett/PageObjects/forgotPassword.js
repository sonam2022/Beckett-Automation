class forgotpwd{

    entermail(){

        return cy.get('#email');

    }


 clickSubmit(){
        return  cy.get('.sentPassReset')

    }

enterVerificationCode(){

    return cy.get('#verification-code');

}

clickVerify(){
 return cy.get('input').contains('VERIFY');


}

enterNewPassword(){

return cy.get('#new-pass')

}

enterConfirmPassword(){

    return cy.get('#confirm-pass')
    
    }

  clickSubmit2(){

        return cy.get('input').contains('Change Password')
        
        }

}

export default forgotpwd;