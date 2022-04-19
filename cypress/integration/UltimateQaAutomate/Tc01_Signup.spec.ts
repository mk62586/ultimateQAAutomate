///<reference types="Cypress"/>

import signup from "../../PageObject/Signup.page"

  describe("Visit UltimateQA_Automate",()=>{
    var m :any
    beforeEach("visit the webPage to automate and click to create the account Page",()=>{
      cy.visit('/')
      signup.clickLogin()
      signup.createAcc()
      })
      beforeEach("use the Fixture",()=>{
        cy.fixture("example").then((user)=>{
          m= user
      })
    })
      it("Verfiy the title of the page",()=>{
          signup.titlePage().then(txt=>{
           expect(txt).to.eql('ParaBank | Welcome | Online Banking')
      })
    })
      it.only("User Create Account in UltimateQA",()=>{
           signup.firstName(m.firstName)
           signup.lastName(m.lastName)
           signup.email(m.email1)
           signup.password(m.password)
           signup.terms_Cond()
           signup.submit()
           signup.checkName().should("be.visible")   
       })
       it.skip("user will signup without entry any field of registration",()=>{
           signup.submit()
           signup.verify().should("be.visible")
       })
       it.skip("User will field all data and not click on agree box",()=>{
           signup.firstName(m.firstName)
           signup.lastName(m.lastName)
           signup.email(m.email1)
           signup.password(m.password)
           signup.submit()
           signup.verify()
       })
       it.skip("User will fill less number of pasaword and signup",()=>{
          signup.firstName(m.firstName)
          signup.lastName(m.lastName)
          signup.email(m.email1)
          signup.password(m.passwordFalse)
          signup.terms_Cond()
          signup.submit()
          signup.passwordLength().should("have.text","Password must be at least 8 characters.")
     })
     it.skip("User will Registration with the same name and password",()=>{
          signup.firstName(m.firstName)
          signup.lastName(m.lastName)
          signup.email(m.email1)
          signup.password(m.password)
          signup.terms_Cond()
          signup.submit()
          signup.verify().should("be.visible") 
     })
  })
 
  