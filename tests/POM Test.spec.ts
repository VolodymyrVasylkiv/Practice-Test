import { test } from "../project/fixtures/fixturePages";

test('Login Page Test', async ({ pomPages: page }) => {

    await page.basePage.goToPage();

    await page.signUpLoginPage.clickOnSignupLoginButton();
    await page.signUpLoginPage.fillSignUpForm();
    await page.signUpLoginPage.clickOnSignUpButton();

    await page.accountInfoPage.fillAccountInformationForm();
    await page.accountInfoPage.clickCreateAccountButton();

    await page.createAndDeletePage.checkCreatedAccount();
    await page.createAndDeletePage.clickOnContinueBtn();
    await page.createAndDeletePage.checkDeleteAccount();
    await page.createAndDeletePage.clickOnDeleteAccountBtn();
    await page.createAndDeletePage.checkAccountDeleted();
    await page.createAndDeletePage.checkSignupLoginHeader();



    
  })