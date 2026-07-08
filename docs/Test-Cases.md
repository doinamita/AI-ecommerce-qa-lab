# Test Cases

## TC-001 - Homepage displays product catalog

**Priority:** High  
**Type:** Smoke  
**Steps:**
1. Open MiniShop.
2. Observe the product catalog.

**Expected Result:**
The page displays all expected products: QA Travel Backpack, Automation T-Shirt, Regression Sneakers, and Focus Headphones.

---

## TC-002 - Search filters products by keyword

**Priority:** High  
**Type:** Functional  
**Steps:**
1. Open MiniShop.
2. Enter `headphones` in the search input.

**Expected Result:**
Only Focus Headphones should be displayed.

---

## TC-003 - Empty search result is displayed

**Priority:** Medium  
**Type:** Negative  
**Steps:**
1. Open MiniShop.
2. Enter `laptop` in the search input.

**Expected Result:**
No products should be displayed and the message `No products found.` should appear.

---

## TC-004 - Sort products by price low to high

**Priority:** Medium  
**Type:** Functional  
**Steps:**
1. Open MiniShop.
2. Select `Price: low to high`.

**Expected Result:**
The first product should be Automation T-Shirt and the last product should be Focus Headphones.

---

## TC-005 - Add product to cart

**Priority:** Critical  
**Type:** Functional  
**Steps:**
1. Open MiniShop.
2. Add QA Travel Backpack to cart.

**Expected Result:**
Cart count should be 1, the item should appear in the cart, and total should be `$49.99`.

---

## TC-006 - Remove product from cart

**Priority:** Critical  
**Type:** Functional  
**Steps:**
1. Add Automation T-Shirt to cart.
2. Remove the item from the cart.

**Expected Result:**
Cart count should be 0, the cart should show empty state, and checkout should be disabled.

---

## TC-007 - Apply valid coupon

**Priority:** High  
**Type:** Functional  
**Steps:**
1. Add QA Travel Backpack to cart.
2. Enter coupon code `QA10`.
3. Click Apply.

**Expected Result:**
A 10% discount should be applied and total should be `$44.99`.

---

## TC-008 - Reject invalid coupon

**Priority:** Medium  
**Type:** Negative  
**Steps:**
1. Add QA Travel Backpack to cart.
2. Enter coupon code `BADCODE`.
3. Click Apply.

**Expected Result:**
The application should display `Invalid coupon code.` and total should remain `$49.99`.

---

## TC-009 - Place order successfully

**Priority:** Critical  
**Type:** End-to-end  
**Steps:**
1. Add Regression Sneakers to cart.
2. Open checkout.
3. Fill all required checkout fields.
4. Place the order.

**Expected Result:**
Order confirmation should appear and cart count should reset to 0.

---

## TC-010 - Basic accessibility check

**Priority:** Medium  
**Type:** Accessibility  
**Steps:**
1. Open MiniShop.
2. Verify that main controls have accessible labels/names.

**Expected Result:**
Cart button, search input, and product controls should be accessible by role or label.
