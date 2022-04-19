

const buttId           = '#idExample'
const success          = '.entry-title '
const like             = '[type="button"]'
const main             = '#et-main-area'
const linkSccuess      = '.entry-title'
const check            ='[class="dropdown header__nav-item"]'
const male             ='[value="male"]'
const female           ='[value="female"]'
const other            ='[value="other"]'
const bike             ='[value="Bike"]'
const car              ='[value="Car"]'
const volvo            ='[value="volvo"]'
const saab             ='[value="saab"]'
const opei             ='[value="opei"]'
const nameFill         ='[placeholder="Name"]'
const emailfil         ='[placeholder="Email Address"]'
const submitButton     ="button[name='et_builder_submit_button']"
const contains         ='.et-pb-contact-message'

class Home{
    titlePage(){
        return cy.title()
    }
    buttonID(){
        return cy.get(buttId).click()
    }
    sucessID(){
        return cy.get(success)
    }
    like(){
        return cy.get(like).click()
    }
    ClickableIcon(){
        return cy.get(main).contains("Clickable Icon").click()
    }
    sucessLink(){
      return cy.get(linkSccuess)
    }
    radioM(){
      return cy.get(male).wait(3000).click()
    }
     radioF(){
        return cy.get(female).wait(3000).click()
    }
     radioO(){
        return cy.get(other).click()
    }
     checkboxesBike(){
         return cy.get(bike).click()
    }
     checkboxesCar(){
        return cy.get(car).click()
     }
     dropDownVolvo(){
        return cy.get(volvo).select("volvo")
     }
     dropDownSaab(){
        return cy.get(saab).select("saab",{force:true})
     }
     name(){
         return cy.get(nameFill).type("Mukesh")
     }
     email(){
        return cy.get(emailfil).type("ak444@gmail.com")
    }
    submit(){
        return cy.get(submitButton).click()
    }
    contains(){
        return cy.get(contains).contains("Thanks for contacting us")
    }
 }
    export default  new Home