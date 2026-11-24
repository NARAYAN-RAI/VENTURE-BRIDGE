# VentureBridge Capital Partners

**VentureBridge** is an 8-page responsive web platform built for an early-stage startup investing firm using **semantic HTML5**, **pure-syntax CSS3**, and **foundational JavaScript**. Designed around a **Problem–Solution** model, the platform brings transparency to early-stage fundraising through published valuation multiples, a 14-day term sheet guarantee, and interactive financial calculators.

---

## 1. Problem–Solution Overview

| Early-Stage Startup Problem | VentureBridge Solution |
| :--- | :--- |
| **Opaque "Black-Box" Valuations:** Founders rarely know how investors price early rounds, leading to unfair deals or unsustainable hype multiples. | **Published ARR & Profit Multiples:** Transparent stage-based formulas (`5x`, `10x`, and `15x` annual recurring revenue plus net profit weighting). |
| **6-Month Investor Delays:** Traditional VCs take months to respond, stalling engineering and customer growth. | **14-Day Decision Guarantee:** Structured partner review and binding term sheet decisions within 14 calendar days. |
| **Compounded Equity Dilution:** Uncoordinated early rounds often drop founder ownership below $50\%$ before Series A. | **Stage-Capped Dilution Rules:** Built-in cap-table simulation enforcing safe dilution limits ($10\%$–$20\%$) and board control alerts. |

---

## 2. Project File Structure

```text
VentureBridge/
│
├── index.html              # Home: Hero banner, firm track record metrics & founder suite
├── problem-solution.html   # Investment Thesis: Market bottlenecks vs. VentureBridge standards
├── checker.html            # Valuation Model: Interactive startup valuation & funding calculator
├── calculator.html         # Cap Table: Stage-aware equity dilution & governance simulator
├── portfolio.html          # Portfolio: Backed startups directory with live sector filtering
├── team.html               # Partners: Managing partners & operator backgrounds
├── faq.html                # FAQ: Interactive accordion answering founder questions
├── pitch.html              # Submit Pitch: Validated founder application form
│
├── style.css               # Global Royal Classic theme, Flexbox & responsive CSS Grid
├── script.js               # Vanilla JavaScript logic for calculators, filters & forms
└── README.md               # Project documentation
```

---

## 3. Interactive Features & Calculation Logic (`script.js`)

All client-side logic is written using foundational JavaScript (`document.getElementById()`, `document.querySelectorAll()`, `Number()`, arithmetic operators, and `if / else if / else` statements) without any external libraries.

### A. Startup Valuation & Funding Calculator (`checker.html`)
Computes a startup's estimated valuation and eligible check size based on its current stage, **Yearly Revenue (ARR)**, and **Yearly Net Profit/Loss**:

* **Idea Stage (`stage === "idea"`):**
  * **Valuation:** Fixed base cap of $\$250,000$.
  * **Funding Offer:** Fixed $\$50,000$ Launchpad pre-seed grant.
* **Pre-Seed Stage (`stage === "pre"`):**
  * **Valuation:** $\text{Yearly Revenue} \times 5$ (minimum floor of $\$400,000$).
  * **Funding Offer:**
    * If profitable ($\text{Profit} > 0$): $(0.15 \times \text{Valuation}) + (0.25 \times \text{Yearly Profit})$
    * If break-even or loss: $0.15 \times \text{Valuation}$ *(capped at $\$250,000$)*.
* **Working Startup (`stage === "working"`):**
  * **Multiple:** $15\text{x}$ if profitable and $\text{Yearly Revenue} \ge \$200,000$; otherwise $10\text{x}$.
  * **Valuation:** $(\text{Yearly Revenue} \times \text{Multiple}) + (2 \times \text{Yearly Profit if profitable})$ *(minimum floor of $\$1,000,000$)*.
  * **Funding Offer:**
    * If profitable ($\text{Profit} > 0$): $(0.12 \times \text{Valuation}) + (0.50 \times \text{Yearly Profit})$
    * If operating at a loss: $0.10 \times \text{Valuation}$ *(capped at $\$1,000,000$)*.

### B. Smart Equity & Cap Table Calculator (`calculator.html`)
Models post-money ownership, proportional dilution of prior angel investors, and stage-specific governance warnings:

$$\text{Post-Money Valuation} = \text{Pre-Money Valuation} + \text{Investment Requested}$$

$$\text{New Investor Equity (\%)} = \left(\frac{\text{Investment Requested}}{\text{Post-Money Valuation}}\right) \times 100$$

$$\text{Diluted Existing Investors (\%)} = \left(\frac{\text{Existing Investor \%}}{100}\right) \times (100 - \text{New Investor Equity \%})$$

$$\text{Founders Final Ownership (\%)} = (100 - \text{New Investor Equity \%}) - \text{Diluted Existing Investors (\%)}$$

* **Stage Dilution Limits:** Warns founders if new dilution exceeds $10\%$ (Idea/Angel), $15\%$ (Pre-Seed), or $20\%$ (Working/Seed).
* **Control & Board Alerts:** Flags a **Majority Control Warning** if founder ownership drops below $50\%$, and notes a **Board Seat** requirement if the new investor acquires $\ge 15\%$.

### C. Additional Interactive Pages
* **Portfolio Sector Filter (`portfolio.html`):** Uses `data-sector` attributes to dynamically filter backed startups (`All Sectors`, `FinTech`, `AgriTech`, `HealthTech`) without reloading.
* **FAQ Accordion (`faq.html`):** Toggles `.show` visibility classes and `+` / `-` indicators on click.
* **Pitch Submission Form (`pitch.html`):** Uses `event.preventDefault()` to validate inputs, render a live confirmation message inside `<output>`, and reset the form cleanly.

---

## 4. Technical & Design Highlights

* **Semantic HTML5 Architecture:** Built with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<data>`, `<time>`, `<fieldset>`, `<legend>`, `<output>`, and `<footer>`.
* **100% Pure Offline Syntax:** Zero external font imports, CDNs, or third-party scripts—uses native system serif and sans-serif font stacks for instant offline loading.
* **Royal Classic Palette:** Pairs deep midnight navy (`#13213c`) and champagne gold (`#d4a738`) headers with warm alabaster parchment (`#f3efe6`) and ivory (`#fcfbf8`) surfaces for high contrast and zero visual overlap.

---

## 5. How to Run Locally

1. Download and extract the `VentureBridge` project folder.
2. Double-click `index.html` to open the website in any modern web browser (Chrome, Edge, Firefox, or Safari).
3. No local server, build tools, or internet connection are required.