# Sauce Demo E2E Test Suite

## Overview
In this project you can find an E2E (end-to-end) test suite for verifying the main functionalities of the Sauce Demo website (you can find it here: ([https://www.saucedemo.com/](https://www.saucedemo.com/)).
This project is entirely written with **Playwright** (using TypeScript) and ensure the coverage of functionalities such as:
- **Login**
- **Purchase Flow**
- **Smoke Test**


## Prerequisites
1. **Node.js**: Ensure you have Node.js installed.
To verify installation:
```bash
node -v
npm -v
```
2. **Playwright**: The test suite uses Playwright for E2E automation

---

## Setup
1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd sauce-e2e-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```


---
## Running Tests 
To execute all test cases:
```bash
npx playwright test
```
### Run Tests with UI
For convenience, you can use the Playwright UI to run and debug tests:
```bash
npx playwright test --ui
```

---
### HTML Report

To view the HTML report:

1.  Run the tests: `npx playwright test`
2.  Open the `playwright-report/index.html` file in your browser.

Playwright automatically generates an interactive HTML report that displays the test results.

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