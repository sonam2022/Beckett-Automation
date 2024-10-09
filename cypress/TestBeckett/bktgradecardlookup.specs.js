import gradelook from "./PageObjects/gradelookup";

const gradeloopupnew = new gradelook();

describe('Grade Look Up',function(){
       beforeEach(() => {
        
        cy.fixture('serialnumbers.json').then((data)=>{

globalThis.serialdata = data;

        })
            cy.visit('/grading/card-lookup');
        
            
          })

          it('BGS Look  Up',function(){
            gradeloopupnew.serialnumbertext().type(serialdata.bgsnum);
            gradeloopupnew.submit().click();
            gradeloopupnew.carddetailsbgs().should('be.visible')

          })
          it('BVG Look  Up',function(){
            gradeloopupnew.bvg().click()
            gradeloopupnew.serialnumbertext().type(serialdata.bvgnum);
            gradeloopupnew.submit().click();
            gradeloopupnew.carddetailsbvg().should('be.visible')

          })

          it('BCCG Look  Up',function(){
  gradeloopupnew.bccg().click()
            gradeloopupnew.serialnumbertext().type(serialdata.bccgnum);
            gradeloopupnew.submit().click();
            gradeloopupnew.carddetailsbvg().should('be.visible')
          })
        })