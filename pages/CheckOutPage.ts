import {expect, Page } from '@playwright/test';

export class CheckOutPage {
  constructor(private page: Page) {}

  async fillCustomerDetails(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async completePurchase() {
    await this.page.click('#finish');
  }

  async isPurchaseComplete() {
    await expect(this.page.locator('[data-test="back-to-products"]')).toBeVisible();
    await expect(this.page.locator('[data-test="checkout-complete-container"]')).toBeVisible();
  }
}
