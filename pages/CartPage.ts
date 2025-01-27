import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}
  private productNamesSelector = '.cart_item .inventory_item_name';
  async getCartItemsCount() {
    return this.page.locator('.cart_item').count();
  }

  async getProductNames(): Promise<string[]> {
    return this.page.locator(this.productNamesSelector).allTextContents();
  }

  async proceedToCheckout() {
    await this.page.click('#checkout');
  }
}
