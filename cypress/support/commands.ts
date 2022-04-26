import { any } from "cypress/types/bluebird"
import login from "../PageObject/login.page"
Cypress.Commands.add("loginAccount",()=>{
    cy.fixture("example").then((user)=>{
    login.userName().type(user.email1)
    login.userPass().type(user.password)
    login.userSubmit().click()
    login.checkName().should("be.visible")

})
})
