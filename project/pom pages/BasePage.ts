import { Page } from "@playwright/test";

export class BasePage {
  
  readonly page: Page;
  readonly homeUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.homeUrl = "https://automationexercise.com/";
  }

  async goToPage() {
    await this.page.goto(this.homeUrl);
  }
}
