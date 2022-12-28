"use strict";


const {By, Key, until} = require("selenium-webdriver");

module.exports = class RegisterPage{
    #driver;

    constructor(webdriver){
        this.#driver = webdriver;
    }
   
    goToHomePage(){
        return this.#driver.get("http://test.qa.rs/register");
    }

    getFirstName(){
        return this.#driver.findElement(By.name('firstname'));
    }

    getLastName(){
        return this.#driver.findElement(By.name('lastname'));
    }

    getEmail() {
        return this.#driver.findElement(By.name('email'));
    }

    getUsername() {
        return this.#driver.findElement(By.name('username'));
    }

    getPassword() {
        return this.#driver.findElement(By.name('password'));
    }

    getConformationPassword() {
        return this.#driver.findElement(By.name('passwordAgain'));
    }

    getRegisterButton(){
        return this.#driver.findElement(By.name('register'))
    }

    getRegisterButtonValue(){
        return this.getRegisterButton().getAttribute('value');
     }
}
