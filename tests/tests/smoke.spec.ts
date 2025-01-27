import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckOutPage } from '../../pages/CheckOutPage';

test.describe('Smoke Test', () => {
  test('Verify main functionalities of the application', async ({ page }) => {
    // Initialize pages
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckOutPage(page);

    //log in
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    //is header and footer ok?
    await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
    await expect(page.locator('[data-test="footer"]')).toBeVisible();


    // Add products
    await productPage.addFirstProductToCart();
    //Go to the cart page
    await productPage.goToCart();

    //Check on the cart contents
    expect(await cartPage.getCartItemsCount()).toBe(1); // Verify 2 items in cart

    // Checkout
    await cartPage.proceedToCheckout();
    // Customer details
    await checkoutPage.fillCustomerDetails('Smoke', 'Test', '00000');

    //Complete purchase
    await checkoutPage.completePurchase();
    await checkoutPage.isPurchaseComplete();
    await checkoutPage.isPurchaseComplete();

    //Return to home and verify cart is empty
    await page.locator('[data-test="back-to-products"]').click();
    //Back to cart
    await productPage.goToCart();
    expect(await page.locator('.cart_item').count()).toBe(0); //No products left

    //Check on the side menu
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('button', { name: 'Close Menu' }).click();

    //Check on the LOGOUT button
    await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await expect(page.locator('#login_button_container')).toBeVisible();

  });
});