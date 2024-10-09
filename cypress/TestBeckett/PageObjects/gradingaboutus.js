class gradingabouttus{

simplegrading(){

    return cy.get('.main-title').eq(1)
}


detailedgrading(){

    return cy.get('.main-title').eq(2)
}


}

export default gradingabouttus;