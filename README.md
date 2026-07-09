# AI Ecommerce QA Lab

A real portfolio project for AI-assisted QA testing.

This repository contains:

- A demo e-commerce page called MiniShop, publishable with GitHub Pages.
- Playwright end-to-end tests.
- GitHub Actions CI setup.
- AI-assisted QA documentation: strategy, prompts, test cases, bug reports, and evaluation notes.

## Project Goal

The goal is to demonstrate how a QA Lead can use AI to design better tests, identify risks, create test cases, improve coverage, and document findings for an e-commerce flow.

This is not only a test automation project. It is a Quality Engineering portfolio project.

## Application Under Test

MiniShop is a simple e-commerce page with the following functionality:

- Product catalog
- Product search
- Product sorting
- Add to cart
- Remove from cart
- Coupon code
- Checkout form
- Order confirmation

## How AI Is Used In This Project

AI is used as a QA assistant for:

1. Generating risk-based test scenarios from product requirements.
2. Creating positive and negative test cases.
3. Suggesting edge cases for e-commerce flows.
4. Reviewing Playwright test coverage.
5. Drafting bug reports from failed test results.
6. Creating a QA evaluation report.

The human QA owner reviews all AI output before accepting it.

## Tools Used

- HTML, CSS, JavaScript for the demo page
- Playwright for test automation
- GitHub Actions for CI
- ChatGPT or another AI assistant for test design support
- Markdown for QA documentation

## Repository Structure

```text
index.html           Demo e-commerce page entry point
styles.css           Demo page styling
app.js               Demo page logic

tests/               Playwright automated tests
  ecommerce.spec.ts
  accessibility-checklist.spec.ts

docs/                QA documentation
  AI-Testing-Strategy.md
  Test-Cases.md
  Risk-Analysis.md
  Bug-Reports.md
  Evaluation-Report.md

prompts/             AI prompts used during testing
  01-generate-test-cases.md
  02-review-coverage.md
  03-create-bug-report.md

.github/workflows/   CI pipeline
  playwright.yml
```

## Local Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run the application:

```bash
npm run start
```

Run tests:

```bash
npm test
```

Open the HTML report:

```bash
npm run report
```

## Test Coverage

Covered scenarios:

- Homepage loads product catalog
- Search filters products
- Empty search result appears
- Sort by price works
- Add to cart updates count and total
- Remove from cart resets cart state
- Valid coupon applies discount
- Invalid coupon is rejected
- Checkout form places order
- Basic accessibility checks

## Quality Risks

Main quality risks for this e-commerce flow:

- Incorrect cart total
- Coupon discount miscalculation
- Checkout enabled with empty cart
- Product search returning wrong results
- Sorting errors
- Missing validation on checkout form
- Poor accessibility for keyboard and screen reader users
- Regression in critical purchase flow

## Portfolio Value

This project demonstrates:

- QA strategy
- Risk-based testing
- E-commerce domain testing
- AI-assisted test design
- Playwright automation
- CI/CD basics
- Test documentation
- Bug reporting
- Quality leadership thinking

## Data Source

The product catalog was moved from hardcoded JavaScript into a structured JSON file:

`data/products.json`

This improves maintainability and separates product test data from application logic.

Automated tests validate:

- Product data loads successfully from JSON
- Product schema includes required fields
- 100 products are available
- 5 expected categories are present
- Product cards render correctly in the UI

