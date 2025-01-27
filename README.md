# Sauce Demo E2E Test Suite

## Overview
In this project you can find an E2E (end-to-end) test suite for verifying the main functionalities of the Sauce Demo website (you can find it here: ([https://www.saucedemo.com/](https://www.saucedemo.com/)).
This project is entirely written using **Playwright** with **TypeScript** and covers key functionalities such as:
- **Login**
- **Purchase Flow**
- **Smoke Test**


## Prerequisites
Before running the tests, make sure you have the following installed:
1. **Node.js**: Ensure you have Node.js installed.
To verify installation:
```
node -v
npm -v
```
2. **Playwright**: The test suite uses Playwright for E2E automation

---

## Setup
1. Clone this repository:
   ```
   git clone https://github.com/sentiunpo/playwright-e2e-test-assignment
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Install Playwright browsers:
   ```
   npx playwright install
   ```


---
## Running Tests 
To execute all test cases:
```
npx playwright test
```
## Run Tests with UI
For convenience, you can use the Playwright UI to run and debug tests:
```
npx playwright test --ui
```

---
### HTML Report

After running the tests, Playwright will generate an HTML report with the test results.

1.  Run the tests: `npx playwright test`
2.  Open the `playwright-report/index.html` file in your browser.

---

## Directory Structure
```
sauce-e2e-tests/
├── pages/                   # Page Object Model (POM) files
│   ├── LoginPage.ts         # Interactions with login page
│   ├── ProductPage.ts       # Interactions with product page
│   ├── CartPage.ts          # Interactions with cart page
│   └── CheckOutPage.ts      # Interactions with checkout page
├── tests/                   # Test files
│   ├── login.spec.ts        # Login flow tests
│   ├── purchase.spec.ts     # Purchase flow tests
│   └── smoke.spec.ts        # Smoke tests
├── playwright.config.ts     # Playwright configuration file
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

---

## Support
For issues or questions, please contact:
- **Name**: Alessia Annese
- **Email**: alessiaannese@gmail.com

---
