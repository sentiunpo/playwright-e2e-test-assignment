import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Flow', () => {
  test('Locked-out user login should result in an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
   await loginPage.isErrorVisible();
  });

  test('A user with valid credentials should be able to log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  });
});
