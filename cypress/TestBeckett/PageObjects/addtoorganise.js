class organise{


   searchlistorganisedisabled(){

    return cy.get(".already_added")
   }

   searchlistorganiseenabled(){

      return cy.get(".add_to_organize")
     }

     organisepopup(){

      return cy.get('.modal-title').contains('Add to Organize')
     }

     collectionname(){

      return cy.get('#create_collection_name')
     }

     haveqty(){

      return cy.get('#have_qty')

     }
  
     wantqty(){
      return cy.get('#want_qty')

     }

     tradeaway(){
      return cy.get('#trade_away_qty')

     }
     tradefor(){

      return cy.get('#trade_for_qty')
     }

     saveitemtoorganise(){
      return cy.get('[value="Add Items to Organize"]')

     }

     successnotification(){

      return cy.get('#site_notification_content').contains('Items successfully added to your organize.')
     }

     selectallitems(){

      return cy.get('#itemChkBox')
     }


     selectedorganise()
     {

      return cy.get('.btnSelectedOrganize')
     }


playerdetailpageorganise(){


   return cy.get("#add_to_organize")
}


playedetailpagedisabled(){

   return cy.get(".already_added")
  }

  playerdetailpageenabled(){

     return cy.get(".add_to_organize")
    }
 
    successnotificationplayer(){

      return cy.get('#site_notification_content').contains('This item was successfully added to your Organize')
     }

}

export default organise;