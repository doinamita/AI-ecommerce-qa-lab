import { test, expect } from '@playwright/test';

test.describe('Advanced ecommerce scenarios', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays expanded catalog with 100 products', async ({ page }) => {
    await expect(page.locator('.product-card')).toHaveCount(100);
    await expect(page.getByTestId('product-card-backpack')).toBeVisible();
    await expect(page.getByTestId('product-card-shirt')).toBeVisible();
    await expect(page.getByTestId('product-card-sneakers')).toBeVisible();
    await expect(page.getByTestId('product-card-headphones')).toBeVisible();
  });

  test('filters products by Electronics category', async ({ page }) => {
    await page.getByTestId('category-select').selectOption('Electronics');

    await expect(page.locator('.product-card')).toHaveCount(20);
    await expect(page.getByTestId('product-card-headphones')).toBeVisible();
    await expect(page.getByTestId('product-card-keyboard')).toBeVisible();
    await expect(page.getByTestId('product-card-backpack')).toBeHidden();
  });

  test('filters products by Clothing category', async ({ page }) => {
    await page.getByTestId('category-select').selectOption('Clothing');

    await expect(page.locator('.product-card')).toHaveCount(20);
    await expect(page.getByTestId('product-card-shirt')).toBeVisible();
    await expect(page.getByTestId('product-card-hoodie')).toBeVisible();
    await expect(page.getByTestId('product-card-headphones')).toBeHidden();
  });

  test('search filters products by product name', async ({ page }) => {
    await page.getByTestId('search-input').fill('keyboard');

    await expect(page.getByTestId('product-card-keyboard')).toBeVisible();
    await expect(page.getByTestId('product-card-wireless-keyboard')).toBeVisible();
    await expect(page.getByTestId('product-card-backpack')).toBeHidden();
  });

  test('search filters products by category keyword', async ({ page }) => {
    await page.getByTestId('search-input').fill('electronics');

    await expect(page.locator('.product-card')).toHaveCount(20);
    await expect(page.getByTestId('product-card-headphones')).toBeVisible();
    await expect(page.getByTestId('product-card-keyboard')).toBeVisible();
    await expect(page.getByTestId('product-card-shirt')).toBeHidden();
  });

  test('search shows empty state for non-existing product', async ({ page }) => {
    await page.getByTestId('search-input').fill('zzzz-no-product');

    await expect(page.getByTestId('empty-products')).toBeVisible();
    await expect(page.locator('.product-card')).toHaveCount(0);
  });

  test('combines category filter and search input', async ({ page }) => {
    await page.getByTestId('category-select').selectOption('Electronics');
    await page.getByTestId('search-input').fill('keyboard');

    await expect(page.getByTestId('product-card-keyboard')).toBeVisible();
    await expect(page.getByTestId('product-card-wireless-keyboard')).toBeVisible();
    await expect(page.getByTestId('product-card-headphones')).toBeHidden();
    await expect(page.getByTestId('product-card-shirt')).toBeHidden();
  });

  test('sorts Electronics products by price from high to low', async ({ page }) => {
    await page.getByTestId('category-select').selectOption('Electronics');
    await page.getByTestId('sort-select').selectOption('price-desc');

    const firstProductName = await page.locator('.product-card h3').first().innerText();
    expect(firstProductName).toBe('Focus Headphones');
  });

  test('out-of-stock product has disabled Add to cart button', async ({ page }) => {
    await page.getByTestId('category-select').selectOption('Electronics');

    await expect(page.getByTestId('product-card-wireless-mouse')).toBeVisible();
    await expect(page.getByTestId('add-wireless-mouse')).toBeDisabled();
    await expect(page.getByTestId('cart-count')).toHaveText('0');
  });

  test('adds same product twice and updates quantity and subtotal', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('add-backpack').click();

    await expect(page.getByTestId('cart-count')).toHaveText('2');
    await expect(page.getByTestId('cart-item-backpack')).toContainText('Qty: 2');
    await expect(page.getByTestId('subtotal')).toHaveText('$99.98');
    await expect(page.getByTestId('total')).toHaveText('$99.98');
  });

  test('adds multiple products and calculates subtotal correctly', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('add-shirt').click();

    await expect(page.getByTestId('cart-count')).toHaveText('2');
    await expect(page.getByTestId('cart-item-backpack')).toBeVisible();
    await expect(page.getByTestId('cart-item-shirt')).toBeVisible();
    await expect(page.getByTestId('subtotal')).toHaveText('$69.98');
    await expect(page.getByTestId('total')).toHaveText('$69.98');
  });

  test('removes one product and keeps remaining cart item', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('add-shirt').click();

    await page.getByTestId('remove-backpack').click();

    await expect(page.getByTestId('cart-count')).toHaveText('1');
    await expect(page.getByTestId('cart-item-backpack')).toBeHidden();
    await expect(page.getByTestId('cart-item-shirt')).toBeVisible();
    await expect(page.getByTestId('subtotal')).toHaveText('$19.99');
  });

  test('accepts lowercase valid coupon code', async ({ page }) => {
    await page.getByTestId('add-backpack').click();
    await page.getByTestId('coupon-input').fill('qa10');
    await page.getByTestId('apply-coupon').click();

    await expect(page.getByTestId('coupon-message')).toContainText('Coupon QA10 applied');
    await expect(page.getByTestId('discount')).toHaveText('$5.00');
    await expect(page.getByTestId('total')).toHaveText('$44.99');
  });

  test('invalid coupon after valid coupon removes discount', async ({ page }) => {
    await page.getByTestId('add-backpack').click();

    await page.getByTestId('coupon-input').fill('QA10');
    await page.getByTestId('apply-coupon').click();
    await expect(page.getByTestId('discount')).toHaveText('$5.00');

    await page.getByTestId('coupon-input').fill('BADCODE');
    await page.getByTestId('apply-coupon').click();

    await expect(page.getByTestId('coupon-message')).toHaveText('Invalid coupon code.');
    await expect(page.getByTestId('discount')).toHaveText('$0.00');
    await expect(page.getByTestId('total')).toHaveText('$49.99');
  });

  test('places order with coupon and resets cart', async ({ page }) => {
    await page.getByTestId('add-backpack').click();

    await page.getByTestId('coupon-input').fill('QA10');
    await page.getByTestId('apply-coupon').click();

    await page.getByTestId('checkout-open').click();
    await page.getByTestId('name-input').fill('QA Tester');
    await page.getByTestId('email-input').fill('qa@example.com');
    await page.getByTestId('address-input').fill('123 Test Street');
    await page.getByTestId('place-order').click();

    await expect(page.getByTestId('order-confirmation')).toContainText('Order placed successfully');
    await expect(page.getByTestId('order-confirmation')).toContainText('$44.99');
    await expect(page.getByTestId('cart-count')).toHaveText('0');
    await expect(page.getByTestId('empty-cart')).toBeVisible();
  });
});
