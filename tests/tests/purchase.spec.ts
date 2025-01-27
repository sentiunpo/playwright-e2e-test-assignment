import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckOutPage } from '../../pages/CheckOutPage';

test.describe('Purchase Product Flow', () => {
  test('Complete purchase flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckOutPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Sort by price low to high
    await productPage.sortBy('lohi');
    // Add last product to the cart
    await productPage.addLastProductToCart();

    // Sort by name
    await productPage.sortBy('az');
    // Add the first product to the cart
    await productPage.addFirstProductToCart();

    // Go to cart and verify items
    await productPage.goToCart();
    //Check on products
    expect(await cartPage.getCartItemsCount()).toBe(2);

    // Proceed to checkout and complete purchase
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCustomerDetails('Alessia', 'Test', '26832');
    await checkoutPage.completePurchase();
    await checkoutPage.isPurchaseComplete();
  });
});
