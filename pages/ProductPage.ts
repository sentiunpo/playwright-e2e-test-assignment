import {expect, Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async sortBy(option: 'lohi' | 'hilo' | 'az' | 'za') {
    await this.page.selectOption('.product_sort_container', option);
  }

  async addLastProductToCart() {
    const products = await this.page.locator('[data-test="inventory-list"]');
    await products.locator('.btn_inventory').last().click();
  }

  async addFirstProductToCart() {
    const products = await this.page.locator('.inventory_item');
    await products.locator('.btn_inventory').first().click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
