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
    const lastProductName = await productPage.addLastProductToCart();

    // Sort by name
    await productPage.sortBy('az');
    // Add the first product to the cart
    const topRightProductName =  await productPage.addFirstProductToCart();

    //Saving product names
    const addedProductNames = [lastProductName, topRightProductName];

    // Go to cart and verify items
    await productPage.goToCart();

    // Get products nmes in the cart
    const cartProductNames = await cartPage.getProductNames();

    //Check if they're equal
    expect(cartProductNames).toEqual(addedProductNames);
    

    // Proceed to checkout and complete purchase
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCustomerDetails('Alessia', 'Test', '26832');
    await checkoutPage.completePurchase();
    await checkoutPage.isPurchaseComplete();
  });
});
