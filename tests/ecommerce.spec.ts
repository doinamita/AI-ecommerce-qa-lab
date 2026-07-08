import { test, expect } from '@playwright/test';

test.describe('MiniShop ecommerce smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage displays product catalog', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'MiniShop' })).toBeVisible();
    await expect(page.getByTestId('product-card-backpack')).toBeVisible();
    await expect(page.getByTestId('product-card-shirt')).toBeVisible();
    await expect(page.getByTestId('product-card-sneakers')).toBeVisible();
    await expect(page.getByTestId('product-card-headphones')).toBeVisible();
  });

  test('search filters products by keyword', async ({ page }) => {
    await page.getByTestId('search-input').fill('headphones');

    await expect(page.getByTestId('product-card-headphones')).toBeVisible();
    await expect(page.getByTestId('product-card-backpack')).toBeHidden();
  });

  test('search shows empty state when no product matches', async ({ page }) => {
    await page.getByTestId('search-input').fill('zzzz-no-product');

    await expect(page.getByTestId('empty-products')).toBeVisible();
  });

  test('sorts products by price from low to high', async ({ page }) => {
    await page.getByTestId('sort-select').selectOption('price-asc');
    const productNames = await page.locator('.product-card h3').allInnerTexts();

    expect(productNames[0]).toBe('Automation T-Shirt');
    expect(productNames[productNames.length - 1]).toBe('Focus Headphones');
  });

  test('adds item to cart and updates cart count and total', async ({ page }) => {
    await page.getByTestId('add-backpack').click();

    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('cart-item-backpack')).toBeVisible();
    await expect(page.getByTestId('subtotal')).toHaveText('$49.99');
    await expect(page.getByTestId('total')).toHaveText('$49.99');
  });

  test('removes item from cart and shows empty cart message', async ({ page }) => {
    await page.getByTestId('add-shirt').click();
    await page.getByTestId('remove-shirt').click();

    await expect(page.getByTestId('cart-count')).toHaveText('0');
    await expect(page.getByTestId('empty-cart')).toBeVisible();
    await expect(page.getByTestId('checkout-open')).toBeDisabled();
  });

  test('applies valid QA10 coupon and recalculates total', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('coupon-input').fill('QA10');
    await page.getByTestId('apply-coupon').click();

    await expect(page.getByTestId('coupon-message')).toContainText('Coupon QA10 applied');
    await expect(page.getByTestId('discount')).toHaveText('$5.00');
    await expect(page.getByTestId('total')).toHaveText('$44.99');
  });

  test('rejects invalid coupon code', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('coupon-input').fill('BADCODE');
    await page.getByTestId('apply-coupon').click();

    await expect(page.getByTestId('coupon-message')).toHaveText('Invalid coupon code.');
    await expect(page.getByTestId('discount')).toHaveText('$0.00');
    await expect(page.getByTestId('total')).toHaveText('$49.99');
  });

  test('places an order after filling checkout form', async ({ page }) => {
    await page.getByTestId('add-sneakers').click();
    await page.getByTestId('checkout-open').click();

    await page.getByTestId('name-input').fill('QA Tester');
    await page.getByTestId('email-input').fill('qa@example.com');
    await page.getByTestId('address-input').fill('123 Test Street');
    await page.getByTestId('place-order').click();

    await expect(page.getByTestId('order-confirmation')).toContainText('Order placed successfully');
    await expect(page.getByTestId('cart-count')).toHaveText('0');
  });
});
