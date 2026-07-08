# Bug Reports

This file contains sample bug report templates that can be used when a Playwright test fails.

## Sample Bug Report 1 - Coupon discount is not applied correctly

**Context**
The user applies a valid coupon code during checkout.

**Preconditions**
- MiniShop is open.
- Product is added to cart.
- Coupon code `QA10` is available.

**Steps to Reproduce**
1. Open MiniShop.
2. Add QA Travel Backpack to cart.
3. Enter coupon code `QA10`.
4. Click Apply.

**Actual Result**
The discount is not calculated correctly.

**Expected Result**
A 10% discount should be applied to the subtotal and the total should update accordingly.

**Impact**
Incorrect pricing may affect customer trust and business revenue.

**Priority**
High

---

## Sample Bug Report 2 - Checkout remains enabled after removing all items

**Context**
The user removes the last product from the cart.

**Preconditions**
- MiniShop is open.
- One product is added to the cart.

**Steps to Reproduce**
1. Add one product to the cart.
2. Remove the product from the cart.
3. Observe the checkout button.

**Actual Result**
Checkout remains enabled after cart becomes empty.

**Expected Result**
Checkout should be disabled when cart is empty.

**Impact**
Users may attempt to place invalid orders.

**Priority**
High
