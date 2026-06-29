import { test } from "../project/fixtures/fixturePages";

test('Login Page Test', async ({ pomPages }) => {

    await pomPages.basePage.goToPage();

    await pomPages.signUpLoginPage.clickOnSignupLoginButton();
    await pomPages.signUpLoginPage.fillSignUpForm();
    await pomPages.signUpLoginPage.clickOnSignUpButton();

    await pomPages.accountInfoPage.fillAccountInformationForm();
    await pomPages.accountInfoPage.clickCreateAccountButton();

    await pomPages.createAndDeletePage.checkCreatedAccount();
    await pomPages.createAndDeletePage.clickOnContinueBtn();
    await pomPages.createAndDeletePage.checkDeleteAccount();
    await pomPages.createAndDeletePage.clickOnDeleteAccountBtn();
    await pomPages.createAndDeletePage.checkAccountDeleted();
    await pomPages.createAndDeletePage.checkSignupLoginHeader();



    
  })