const loginPage       = '.entry-content'
const createAccount   = '.sign-in-page '
const submit           = '[value="Sign in"]'
const password        = '[id="user[password]"]'
const email           = '[id="user[email]"]'
const check           ='[class="dropdown header__nav-item"]'
const frum            ='[class="form-error__list"]'

class LoginAccount{
  titlePage(){
    return cy.title()
   }
  clickLogin(){
       return cy.get(loginPage).contains("Go to login page").click()
   }
   userName(value:any){
       return cy.get(email).type(value)
   }
   userPass(value:any){
    return cy.get(password).type(value)
  }
    userSubmit(){
    return cy.get(submit).click()
  }
  checkName(){
    return cy.get(check).contains("Alex M")
}
  verfiyNotFill(){
  return cy.get(frum).contains("Invalid email or password.")
}
}
export default  new LoginAccount