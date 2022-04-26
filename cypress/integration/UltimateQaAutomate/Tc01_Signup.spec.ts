///<reference types="Cypress"/>

import signup from "../../PageObject/Signup.page"

  describe("Visit UltimateQA_Automate",()=>{
    var m :any
    beforeEach("use the Fixture",()=>{
      cy.fixture("example").then((user)=>{
        m = user
    })
  })
    beforeEach("visit the webPage to automate and click to create the account Page",()=>{
      cy.visit(m.url)
      signup.clickLogin().click()
      signup.createAcc().click()
  })
  it.only("visual test case of login",()=>{
    cy.document().toMatchImageSnapshot();
})
     it("Verfiy the title of the page",()=>{
          signup.titlePage().then(txt=>{
           expect(txt).to.eql('ParaBank | Welcome | Online Banking')
      })
    })
    
      it.only("User Create Account in UltimateQA",()=>{
           signup.firstName().type(m.firstName)
           signup.lastName().type(m.lastName)
           signup.email().type(m.email1)
           signup.password().type(m.password)
           signup.terms_Cond().click()
           signup.submit().click()      
           signup.checkName().should("be.visible")   
       })
       it.skip("user will signup without entry any field of registration",()=>{
           signup.submit().click()
           signup.verify().should("be.visible")
       })
       it.skip("User will field all data and not click on agree box",()=>{
           signup.firstName().type(m.firstName)
           signup.lastName().type(m.lastName)
           signup.email().type(m.email1)
           signup.password().type(m.password)
           signup.submit().click()
           signup.verify()
       })
       it.skip("User will fill less number of pasaword and signup",()=>{
          signup.firstName().type(m.firstName)
          signup.lastName().type(m.lastName)
          signup.email().type(m.email1)
          signup.password().type(m.passwordFalse)
          signup.terms_Cond()
          signup.submit()
          signup.passwordLength().should("have.text","Password must be at least 8 characters.")
     })
     it.skip("User will Registration with the same name and password",()=>{
          signup.firstName().type(m.firstName)
          signup.lastName().type(m.lastName)
          signup.email().type(m.email1)
          signup.password().type(m.password)
          signup.terms_Cond()
          signup.submit()
          signup.verify().should("be.visible") 
     })
  })
 
  