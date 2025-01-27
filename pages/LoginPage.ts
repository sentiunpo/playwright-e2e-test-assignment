import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
    
  }

  async isErrorVisible() {
    await expect(this.page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
  }
}
