# AI Testing Strategy

## Objective

The objective of this project is to use AI as a QA assistant to improve test design and coverage for a demo e-commerce application.

The AI is not treated as the final authority. It is used to accelerate analysis, suggest scenarios, identify gaps, and draft documentation. All AI output is reviewed by the QA owner.

## Application Under Test

MiniShop is a small e-commerce page with product catalog, search, sorting, cart, coupon, and checkout functionality.

## AI-Assisted Testing Workflow

1. Define business requirements.
2. Ask AI to generate risk-based test scenarios.
3. Review and improve the AI-generated scenarios.
4. Convert approved scenarios into Playwright tests.
5. Run automated tests locally and in CI.
6. Use AI to summarize failures into bug report drafts.
7. Human QA validates final findings.

## In Scope

- Product catalog testing
- Search behavior
- Sorting behavior
- Cart calculations
- Coupon validation
- Checkout form validation
- Order confirmation
- Basic accessibility and usability checks
- AI-generated test case review
- AI-generated bug report review

## Out of Scope

- Real payment processing
- Real backend/API integration
- Authentication
- Inventory management
- Production customer data
- Performance/load testing
- Security penetration testing

## Quality Criteria

| Area | Expected Quality Behavior |
|---|---|
| Product catalog | Products should load with names, descriptions, and prices. |
| Search | Search should filter products by user keyword. |
| Sort | Sorting should order products correctly by price. |
| Cart | Cart count, subtotal, discount, and total should be accurate. |
| Coupon | Valid coupons should apply discount; invalid coupons should show an error. |
| Checkout | Users should be able to place an order only after adding items and completing required fields. |
| Accessibility | Main controls should have accessible names and labels. |

## AI Quality Controls

AI-generated test scenarios are reviewed against the following criteria:

- Relevance to e-commerce risks
- Coverage of positive and negative flows
- Clear expected results
- No invented requirements
- No unsupported assumptions
- Usability for automation
- Alignment with the application behavior

## QA Lead Reflection

This project shows how AI can support QA work, but also why QA judgment remains important. AI can propose many scenarios quickly, but a QA Lead must prioritize risks, remove irrelevant cases, identify missing coverage, and make the final quality decision.
