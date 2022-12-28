"use strict";


const {By, Key, until} = require("selenium-webdriver");


module.exports = class LoginPage{
    #driver;

    constructor(webdriver){
        this.#driver = webdriver;
    }

    goToLoginPage(){
        return this.#driver.get("http://test.qa.rs/login");
    }

    getUsername() {
        return this.#driver.findElement(By.name('username'));
    }

    getPassword() {
        return this.#driver.findElement(By.name('password'));
    }

    clickOnLoginButton(){
        return this.#driver.findElement(By.name('login')).click();
    }
}