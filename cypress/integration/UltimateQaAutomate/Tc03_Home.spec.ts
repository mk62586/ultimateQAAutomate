///<reference types="Cypress"/>
import home from "../../PageObject/Home.page"
describe("open the UltimateQa",()=>{
    var m:any
    before("use the Fixture",()=>{
        cy.fixture("example").then((user)=>{
          m= user
      })
    })
    beforeEach("visit the utlimateAQ",()=>{
         cy.visit(m.url)
    })
  
    it('Validate the title of the page',()=>{
        home.titlePage().then(txt=>{
            expect(txt).to.eql('Simple HTML Elements For Automation | Ultimate QA')
        })
      })
      
    it.only("When user will click simple button and like the button",()=>{
         home.buttonID().click()
         home.sucessID().should("have.text","Button success")
         home.like().click()
           
    })
    it("when user will click on Clickable Icon and check all the data present",()=>{
        home.ClickableIcon().click().should("have.text","Clickable Icon")
    })

    it.only("Click and validate that they are selected various radio button",()=>{
        home.radioM().wait(3000).click()
        home.radioF().wait(4000).click()
        home.radioO().wait(5000).click()
    })
    it.skip("validate the Check box",()=>{
        home.checkboxesBike().click()
        home.checkboxesCar().click()
    })
    it.skip("Validate Dropdown",()=>{
        home.dropDownSaab().select("saab",{force:true})
    })
    it("validate user will fill correct name and email",()=>{
       home.name().type("Mukesh")
       home.email().type("ak444@gmail.com")
       home.submit().click()
       home.contains().should("be.visible")
    })
})