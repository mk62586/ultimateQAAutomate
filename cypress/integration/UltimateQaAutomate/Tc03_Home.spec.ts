///<reference types="Cypress"/>
import home from "../../PageObject/Home.page"
describe("open the UltimateQa",()=>{
    beforeEach("visit the utlimateAQ",()=>{
         cy.visit("/")
    })
    it.only('Validate the title of the page',()=>{
        home.titlePage().then(txt=>{
            expect(txt).to.eql('Simple HTML Elements For Automation | Ultimate QA')
        })
      })
    it("When user will click simple button and like the button",()=>{
         home.buttonID()
         home.sucessID().should("have.text","Button success")
         home.like()
    })
    it("when user will click on Clickable Icon and check all the data present",()=>{
        home.ClickableIcon().should("have.text","Clickable Icon")
    })
    it.only("Click and validate that they are selected various radio button",()=>{
        home.radioM()
        home.radioF()
        home.radioO()
    })
    it.skip("validate the Check box",()=>{
        home.checkboxesBike()
        home.checkboxesCar()
    })
    it.skip("Validate Dropdown",()=>{
        home.dropDownSaab()
    })
    it("validate user will fill correct name and email",()=>{
       home.name()
       home.email()
       home.submit()
       home.contains().should("be.visible")
    })
})