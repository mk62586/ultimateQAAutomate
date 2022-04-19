import login from "../PageObject/login.page"
Cypress.Commands.add("login",()=>{
    cy.fixture("example").then((user)=>{
    login.userName(user.email1)
    login.userPass(user.password)
    login.userSubmit()
    login.checkName().should("be.visible")
    
})
})
