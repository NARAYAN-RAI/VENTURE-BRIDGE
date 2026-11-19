# VentureBridge — Startup Investing Firm Website

**Course / Subject:** Web Development College Project (HTML, CSS, Basic JS)

---

## 1. Project Overview

**VentureBridge** is an 8-page responsive web application structured around a **Problem–Solution** model for early-stage startup investing.

* **The Problem:** Early-stage founders frequently struggle in the *"Seed Valley of Death"* due to slow 6-month investor response cycles, scarce pre-seed capital, and confusing equity dilution terms.
* **The Solution:** VentureBridge offers a **14-day funding decision guarantee**, standardized founder-friendly equity terms, and interactive browser tools to assess funding readiness and model equity dilution in real time.

---

## 2. Folder & File Structure

```text
VentureBridge/
│
├── index.html              (Page 1: Home Page, Hero Banner & Key Metrics)
├── problem-solution.html   (Page 2: Detailed Problem vs. Solution Breakdown)
├── checker.html            (Page 3: Interactive Funding Readiness Checker)
├── calculator.html         (Page 4: Startup Valuation & Equity Calculator)
├── portfolio.html          (Page 5: Funded Startups with Sector Filtering)
├── team.html               (Page 6: Partners & Operator Mentors)
├── faq.html                (Page 7: Interactive FAQ Accordion)
├── pitch.html              (Page 8: Startup Pitch Submission Form)
│
├── style.css               (Global Responsive CSS Styling, Flexbox & Grid)
├── script.js               (Basic JavaScript for Interactivity & Math)
└── README.md               (Project Documentation)
```

---

## 3. How to Run the Project

1. Extract the `VentureBridge` folder to your computer.
2. Open the folder and double-click `index.html`.
3. The site opens in any standard web browser (Chrome, Edge, Firefox, or Safari) with no external servers or installations required.

---

## 4. JavaScript Features & Calculation Logic (Basic JS)

All interactive behavior uses beginner-friendly vanilla JavaScript—relying on DOM manipulation, event listeners, arithmetic operators, and conditional branching (`if` / `else if` / `else`).

* **Funding Readiness Checker (`checker.html`)**
  * Evaluates startup stage, monthly revenue, and co-founder count.
  * Uses `if` / `else if` / `else` logic to match startups with **Launchpad ($50K)**, **Seed Accelerator ($150K)**, or **Core Fund ($250K–$500K)**.
* **Equity & Valuation Calculator (`calculator.html`)**
  * Computes Post-Money Valuation: $\text{Pre-Money Valuation} + \text{Investment}$
  * Computes Investor Equity (%): $\left(\frac{\text{Investment}}{\text{Post-Money}}\right) \times 100$
  * Computes Founder Equity (%): $100 - \text{Investor Equity \%}$
  * Displays a warning when equity dilution exceeds **20%**.
* **Portfolio Sector Filter (`portfolio.html`)**
  * Uses `data-*` attributes and `querySelectorAll()` to dynamically filter startup cards across **All**, **FinTech**, **AgriTech**, and **HealthTech**.
* **Interactive FAQ Accordion (`faq.html`)**
  * Toggles answer visibility and `+/-` indicators when a question is clicked.
* **Pitch Submission Form (`pitch.html`)**
  * Uses `event.preventDefault()` to validate form inputs and display a live confirmation message without reloading the page.