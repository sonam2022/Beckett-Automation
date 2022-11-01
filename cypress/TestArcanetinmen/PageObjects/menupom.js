class mainMenu {
   
  hoverOnSolidColorsleeves() {
        return cy.get('.leo-top-menu > .nav > .nav-item').contains('Solid Color Sleeves').trigger('mouseover',{force:true}).invoke('show');
    
    };
  
    hoverOnSolidColorsleevesStandardSize() {
        cy.get('.dropdown-menu').children().contains('Standard Size').trigger('mouseover',{force:true}).invoke('show');
    };
  

    clickOnchildSubMenu() {
        return cy.get('ul[class="level0"]')
    }; 

    clickOnSubMenu(){

        return cy.get('.dropdown-menu').children();
    }
  
    hoverOnSolidColorsleevesJapaneseSize() {
        return cy.get('.dropdown-menu').children().contains('Japanese Size').trigger('mouseover',{force:true}).invoke('show')
    };
  
    hoverOnArtsleeves() {
      return  cy.get('.leo-top-menu > .nav > .nav-item').contains('Art Sleeves').trigger('mouseover',{force:true}).invoke('show');
    };

    clickOnRoleplaying() {
      return  cy.get('.leo-top-menu > .nav > .nav-item').contains('Roleplaying').trigger('mouseover',{force:true}).invoke('show').click({force:true});
}

clickOnOtherGamingAccessories() {
    return  cy.get('.leo-top-menu > .nav > .nav-item').contains('Other Gaming Accessories').trigger('mouseover',{force:true}).invoke('show').click({force:true});
}
clickOnLicensedProducts() {
    return  cy.get('.leo-top-menu > .nav > .nav-item').contains('Licensed Products').trigger('mouseover',{force:true}).invoke('show').click({force:true});
}






}

export default mainMenu;
