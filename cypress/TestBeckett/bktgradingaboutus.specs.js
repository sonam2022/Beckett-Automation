import gradingabouttus from "./PageObjects/gradingaboutus";

const gradingabt = new gradingabouttus();

describe('Grading About Us',()=>{

it("Grading Content",()=>{

cy.visit('/grading/about')
gradingabt.simplegrading().should('have.text','\n            A Simple Grading Scale\n        ')
gradingabt.detailedgrading().should('have.text','\n            A Detailed  Report Card\n        ')

})





})