import { test as base } from '@playwright/test';
import { SignUpLoginPage } from '../pom pages/SignUpLoginPage';
import { BasePage } from '../pom pages/BasePage';
import { AccountInfoPage } from '../pom pages/AccountInfoPage';
import { CreateAndDeletePage } from '../pom pages/CreateAndDeletePage';


type PagesFixture = {
  pomPages: {
    basePage: BasePage;
    accountInfoPage: AccountInfoPage;
    createAndDeletePage: CreateAndDeletePage;
    signUpLoginPage: SignUpLoginPage;
  };
};

export const test = base.extend<PagesFixture>({
  pomPages: async ({ page }, use) => {
    await use({
      basePage: new BasePage(page),
      accountInfoPage: new AccountInfoPage(page),
      createAndDeletePage: new CreateAndDeletePage(page),
      signUpLoginPage: new SignUpLoginPage(page),
    });
  }
});