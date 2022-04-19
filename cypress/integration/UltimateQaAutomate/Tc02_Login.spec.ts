///<reference types="Cypress"/>
import login from "../../PageObject/login.page"
describe("Visit ultimateQA",()=>{
    var m :any
    it("Fixture",()=>{
        cy.fixture("example").then((user)=>{
         m=user
        })
    })
    beforeEach("User will visit and click on login link",()=>{
        cy.visit("/")
        login.clickLogin()
    })
    it.only('Validate the title of the page',()=>{
        login.titlePage().then(txt=>{
            expect(txt).to.eql('Ultimate QA')
        })
      })
    it("validate User will fill without any creditional and submit it",()=>{
        login.userSubmit()
        login.verfiyNotFill().should("be.be.visible")
    })
    it("User will enter wrong password and try to login",()=>{
        login.userName(m.email1)
        login.userPass(m.passwordFalse)
        login.userSubmit()
        login.verfiyNotFill().should("be.visible")
    })
})