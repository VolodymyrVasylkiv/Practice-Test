import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CreateAndDeletePage extends BasePage {
    
readonly createdForm: Locator;
readonly textForm: Locator;
readonly header: Locator;
readonly continueBtn: Locator;
readonly deleteAccountBtn: Locator;

constructor(page: Page) {
  super(page);
  this.createdForm = page.locator("b");
  this.textForm = page.locator("#form");
  this.header = page.locator("#header");
  this.continueBtn = page.getByRole("link", { name: "Continue" });
  this.deleteAccountBtn = page.getByRole("link", { name: "Delete Account" });
  }

  async checkCreatedAccount() {
    await expect(this.createdForm).toHaveText("Account Created!");
    await expect(this.textForm).toContainText(
        "Congratulations! Your new account has been successfully created!");
  }

  async clickOnContinueBtn() {
    await this.continueBtn.click();
  }

  async checkDeleteAccount() {
    await expect(this.header).toContainText("Delete Account");
  }

  async clickOnDeleteAccountBtn() {
    await this.deleteAccountBtn.click();
  }

  async checkAccountDeleted() {
    await expect(this.createdForm).toHaveText("Account Deleted!");
    await expect(this.textForm).toContainText("Your account has been permanently deleted!");
  }

  async checkSignupLoginHeader() {
    await expect(this.header).toContainText("Signup / Login");
  }
}
