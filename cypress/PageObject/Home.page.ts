

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
        return cy.get(buttId)
    }
    sucessID(){
        return cy.get(success)
    }
    like(){
        return cy.get(like)
    }
    ClickableIcon(){
        return cy.get(main).contains("Clickable Icon")
    }
    sucessLink(){
      return cy.get(linkSccuess)
    }
    radioM(){
      return cy.get(male)
    }
     radioF(){
        return cy.get(female)
    }
     radioO(){
        return cy.get(other)
    }
     checkboxesBike(){
         return cy.get(bike)
    }
     checkboxesCar(){
        return cy.get(car)
     }
     dropDownVolvo(){
        return cy.get(volvo)
     }
     dropDownSaab(){
        return cy.get(saab)
     }
     name(){
         return cy.get(nameFill)
     }
     email(){
        return cy.get(emailfil)
    }
    submit(){
        return cy.get(submitButton)
    }
    contains(){
        return cy.get(contains).contains("Thanks for contacting us")
    }
 }
    export default  new Home