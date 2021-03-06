const loginPage       = '.entry-content'
const createAccount   = '.sign-in-page '
const firstName       = '[id="user[first_name]"]'
const lastName        = '[id="user[last_name]"]'
const email           = '[id="user[email]"]'
const password        ='[id="user[password]"]'
const terms           = '[id="user[terms]"]'
const submit          ='[value="Sign up"]'
const check           ='[class="dropdown header__nav-item"]'
const signForum       = '[class="sign-up__form"]'
const verfiyterm      = '[id="notice"]'

class Account{
 titlePage(){
        return cy.title()
}
 clickLogin(){
    return cy.get(loginPage).contains("Go to login page")
}
createAcc(){
    return cy.get(createAccount).contains("Create a new account")
}
firstName(){
    return cy.get(firstName)
}
lastName(){
    return cy.get(lastName)
}
email(){
    return cy.get(email)
}
password(){
    return cy.get(password)
}
terms_Cond(){
    return cy.get(terms)
}
submit(){
    return cy.get(submit)
}
checkName(){
    return cy.get(check).contains("Alex M")
}
verify(){
    return cy.get(verfiyterm).contains("Terms must be accepted")
}
passwordLength(){
    return cy.get(verfiyterm)
  }
}
export default new Account