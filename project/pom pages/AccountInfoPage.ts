import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class AccountInfoPage extends BasePage {
  
  readonly checkbox: Locator;
  readonly passwordInput: Locator;
  readonly daysInput: Locator;
  readonly monthsInput: Locator;
  readonly yearsInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countryInput: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;

  constructor(page: Page) {
    super(page);
    this.checkbox = page.locator("#id_gender1");
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.daysInput = page.locator("#days");
    this.monthsInput = page.locator("#months");
    this.yearsInput = page.locator("#years");
    this.firstNameInput = page.getByRole("textbox", { name: "First name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last name" });
    this.companyInput = page.locator("#company");
    this.address1Input = page.locator("#address1");
    this.address2Input = page.getByRole("textbox", { name: "Address 2" });
    this.countryInput = page.getByLabel("Country");
    this.stateInput = page.getByRole("textbox", { name: "State" });
    this.cityInput = page.locator("#city");
    this.zipcodeInput = page.locator("#zipcode");
    this.mobileNumberInput = page.getByRole("textbox", {name: "Mobile Number",});
  }

  async fillAccountInformationForm() {
    await this.passwordInput.fill("12345");
    await this.checkbox.check();
    await this.daysInput.selectOption("28");
    await this.monthsInput.selectOption("July");
    await this.yearsInput.selectOption("1987");
    await this.firstNameInput.fill("Volodymyr");
    await this.lastNameInput.fill("Vasylkiv");
    await this.companyInput.fill("VolVas Inc.");
    await this.address1Input.fill("123 Main St");
    await this.address2Input.fill("Apt 52");
    await this.countryInput.selectOption("United States");
    await this.stateInput.fill("lvivska");
    await this.cityInput.fill("lviv");
    await this.zipcodeInput.fill("79066");
    await this.mobileNumberInput.fill("+380501234567");
  }

  async clickCreateAccountButton() {
    await this.page.getByRole("button", { name: "Create Account" }).click();
  }
  
}
