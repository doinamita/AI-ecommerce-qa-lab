import { test, expect } from '@playwright/test';

test.describe('Checkout validation scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('checkout button is disabled when cart is empty', async ({ page }) => {
    await expect(page.getByTestId('checkout-open')).toBeDisabled();
    await expect(page.getByTestId('empty-cart')).toBeVisible();
  });

  test('shows required field errors when checkout form is submitted empty', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('checkout-open').click();
    await page.getByTestId('place-order').click();

    await expect(page.getByTestId('name-error')).toHaveText('Full name is required.');
    await expect(page.getByTestId('email-error')).toHaveText('Email is required.');
    await expect(page.getByTestId('address-error')).toHaveText('Address is required.');
    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('order-confirmation')).toBeHidden();
  });

  test('shows validation error for invalid email format', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('checkout-open').click();

    await page.getByTestId('name-input').fill('QA Tester');
    await page.getByTestId('email-input').fill('invalid-email');
    await page.getByTestId('address-input').fill('123 Test Street');
    await page.getByTestId('place-order').click();

    await expect(page.getByTestId('email-error')).toHaveText('Enter a valid email address.');
    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('order-confirmation')).toBeHidden();
  });

  test('shows validation error when address is too short', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('checkout-open').click();

    await page.getByTestId('name-input').fill('QA Tester');
    await page.getByTestId('email-input').fill('qa@example.com');
    await page.getByTestId('address-input').fill('123');
    await page.getByTestId('place-order').click();

    await expect(page.getByTestId('address-error')).toHaveText('Address must be at least 10 characters.');
    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('order-confirmation')).toBeHidden();
  });

  test('places order successfully when checkout form is valid', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('checkout-open').click();

    await page.getByTestId('name-input').fill('QA Tester');
    await page.getByTestId('email-input').fill('qa@example.com');
    await page.getByTestId('address-input').fill('123 Test Street');
    await page.getByTestId('place-order').click();

    await expect(page.getByTestId('order-confirmation')).toContainText('Order placed successfully');
    await expect(page.getByTestId('cart-count')).toHaveText('0');
    await expect(page.getByTestId('empty-cart')).toBeVisible();
  });
});
