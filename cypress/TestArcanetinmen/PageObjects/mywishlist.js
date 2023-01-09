class wishListManagement{

    addtowishlist(){

        return cy.get('.view-n-cart-btn');

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

export default wishListManagement;