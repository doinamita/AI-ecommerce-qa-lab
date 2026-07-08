# AI Prompt 02 - Review Test Coverage

Use this prompt after you write or record automated tests.

```text
You are a QA Architect reviewing my Playwright test coverage for a demo e-commerce page.

Application functionality:
- Product catalog
- Product search
- Product sorting
- Add to cart
- Remove from cart
- Coupon code QA10 gives 10% discount
- Invalid coupon should be rejected
- Checkout form requires name, email, and address
- Order confirmation appears after successful checkout

Current automated tests:
[PASTE TEST LIST OR TEST CODE HERE]

Task:
Review the coverage and identify gaps.

Rules:
1. Group gaps by risk level: Critical, High, Medium, Low.
2. Suggest additional test cases.
3. Identify which tests are good candidates for automation.
4. Identify which tests can remain manual or exploratory.
5. Do not invent features that are not in the application description.
```
