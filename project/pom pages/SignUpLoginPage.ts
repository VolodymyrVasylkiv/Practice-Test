import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignUpLoginPage extends BasePage {
  
  readonly nameValue: Locator;
  readonly emailValue: Locator;
  readonly signUpLoginBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.nameValue = page.getByPlaceholder("Name");
    this.emailValue = page.locator("//*[@data-qa='signup-email']");
    this.signUpLoginBtn = page.getByRole("link", { name: "Signup / Login" });
  }

  async clickOnSignupLoginButton() {
    await this.signUpLoginBtn.click();
  }

  async fillSignUpForm() {
    await this.nameValue.fill("Vol");
    await this.emailValue.fill("Vas@email.com");
  }

  async verifyInputValues() {
    await expect(this.nameValue).toHaveValue("Vol");
    await expect(this.emailValue).toHaveValue("Vas@email.com");
  }

  async clickOnSignUpButton() {
    await this.page.getByRole("button", { name: "Signup" }).click();
  }

}