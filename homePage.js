"use strict";


const {By, Key, until} = require("selenium-webdriver");


module.exports = class HomePage{
    #driver;

    constructor(webdriver){
        this.#driver = webdriver;
    }

    goToHomePage(){
        return this.#driver.get("http://test.qa.rs/");
    }

    clickOnRegisterLink(){
        return this.#driver.findElement(By.linkText('Register')).click();
    }

    /*getRegistrationConformationText(){
        return this.#driver.findElement(By.className('alert alert-success')).getText();
    }*/

    clickOnLoginButton(){
        return this.#driver.findElement(By.linkText("Login")).click();
    }

    getPackage(){
        const xpathPackage = '//div[contains(@class, "panel panel-danger")]';
        return this.#driver.findElement(By.xpath(xpathPackage));
    }

    getSideDishDropdown(dishPackage){
        return dishPackage.findElement(By.name('side'));
    }

    getOptions(dishDropdown){
        return dishDropdown.findElement(By.css('option'));
    }

    getQuantity(){
        return (this.getPackage().findElement(By.name('quantity'))).click();
    }

    getOrderButton(package1){
        return package1.findElement(By.className('btn btn-success'));
    }


}