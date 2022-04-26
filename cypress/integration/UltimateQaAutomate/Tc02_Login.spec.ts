///<reference types="Cypress"/>
import login from "../../PageObject/login.page"
describe("Visit ultimateQA",()=>{
    var m :any
    before("Fixture",()=>{
        cy.fixture("example").then((user)=>{
         m=user
        })
    })
    beforeEach("User will visit and click on login link",()=>{
        cy.visit(m.url)
        login.clickLogin().click()
    })
    it.skip('Validate the title of the page',()=>{
        login.titlePage().then(txt=>{
            expect(txt).to.eql('Ultimate QA')
        })
  })
      it.only("Login with valid userName and validPassword in UltimateQa",()=>{
        cy.loginAccount()
      })
    it("validate User will fill without any creditional and submit it",()=>{
        login.userSubmit().click()
        login.verfiyNotFill().should("be.be.visible")
    })
    it.only("visual test case of login",()=>{
        cy.document().toMatchImageSnapshot();
    })
    it("User will enter wrong password and try to login",()=>{
        login.userName().type(m.email1)
        login.userPass().type(m.passwordFalse)
        login.userSubmit().click()
        login.verfiyNotFill().should("be.visible")
    })
})