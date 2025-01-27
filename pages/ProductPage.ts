import {expect, Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async sortBy(option: 'lohi' | 'hilo' | 'az' | 'za') {
    await this.page.selectOption('.product_sort_container', option);
  }

  async addLastProductToCart() {
    const products = await this.page.locator('.inventory_item_name').last().allTextContents();
    const lastProductIndex = products.length - 1;
    await this.page.locator('.btn_inventory').last().click();
    return products[lastProductIndex];
  }

  async addFirstProductToCart() {
    const products = await this.page.locator('.inventory_item_name').nth(1).allTextContents();
    await this.page.locator('.btn_inventory').nth(1).click();
    return products[0];
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
