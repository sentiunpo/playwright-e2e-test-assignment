import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async getCartItemsCount() {
    return this.page.locator('.cart_item').count();
  }

  async proceedToCheckout() {
    await this.page.click('#checkout');
  }
}
