"use strict";
require("chromedriver");
const webdriver = require("selenium-webdriver");
const {By, Key, until} = require("selenium-webdriver");
const chai = require("chai");
const {expect, assert} = require("chai");
const HomePage = require("./pages/homePage");
const RegisterPage = require("./pages/registerPage");
const LoginPage = require("./pages/loginPage");

describe("Zavrsni selenium test", function(){
    let driver;
    let pageHomePage;
    let pageRegister;
    let pageLogin;

    before(function(){
        driver = new webdriver.Builder().forBrowser("chrome").build();
        pageHomePage = new HomePage(driver);
        pageRegister = new RegisterPage(driver);
        pageLogin = new LoginPage(driver);

    });

    after(async function(){
        await driver.quit();
    });

    it("Open qa.rs website", async function(){
        await pageHomePage.goToHomePage();
    });

    it("Goes to registration page", async function(){
        await pageHomePage.clickOnRegisterLink();

        expect(await driver.findElement(
            By.name('register')).getAttribute('value')).to.contain('Register');
    });

    it("Successfully register users", async function(){
        await pageRegister.getFirstName().sendKeys('Pero');
        await pageRegister.getLastName().sendKeys('Peric');
        await pageRegister.getEmail().sendKeys('pero.peric@example.local');
        await pageRegister.getUsername().sendKeys('Pero1');
        await pageRegister.getPassword().sendKeys('1234');
        await pageRegister.getConformationPassword().sendKeys('1234');

        await pageRegister.getRegisterButton().click();

       // expect (await pageHomePage.getRegistrationConformationText()).to.contain('Success');
    });

    it("Goes to login page", async function(){
        await pageHomePage.clickOnLoginButton();
    });


    it("Performs login", async function(){
        await pageLogin.getUsername().sendKeys('Pero1');
        await pageLogin.getPassword().sendKeys('1234');
        await pageLogin.clickOnLoginButton();
    });

  /*  it("Adds dish in cart", async function(){
        const burgerPackage = await pageHomePage.getPackage();
        const sideDish = await pageHomePage.getSideDishDropdown(burgerPackage);
        const option = await pageHomePage.getOptions(sideDish);

        await Promise.all(option.map(async function(option) {
            const text = await option.getText();
            if(text === 'Onion rings'){
                await option.click();
            
            const selectedDish = await sideDish.getAttribute('value');
            expect (selectedValue).to.contain('Onion rings');

            const buttonOrder = await pageHomePage.getOrderButton(burgerPackage);
            await buttonOrder.click();
        }
    }));
});*/
 
  it("Adds dish in cart", async function(){
    const burgerPackage = await pageHomePage.getPackage();
    await (pageHomePage.getQuantity(burgerPackage)).sendKeys('2');
    const buttonOrder = await pageHomePage.getOrderButton();
    await buttonOrder.click();
  })
       

})
