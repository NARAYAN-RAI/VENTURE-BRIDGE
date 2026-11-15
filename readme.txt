========================================================================
PROJECT TITLE: VentureBridge - Startup Investing Firm Website
COURSE / SUBJECT: Web Development College Project (HTML, CSS, Basic JS)
========================================================================

1. PROJECT OVERVIEW
------------------------------------------------------------------------
VentureBridge is an 8-page responsive web application designed around a 
Problem-Solution model for early-stage startup investing. 

- THE PROBLEM: Early-stage founders often fail in the "Seed Valley of 
  Death" due to slow 6-month investor response times, lack of pre-seed 
  capital, and confusing equity dilution terms.
- THE SOLUTION: VentureBridge provides a 14-day funding decision 
  guarantee, standardized founder-friendly equity terms, and interactive 
  browser tools to help founders check funding readiness and calculate 
  equity dilution instantly.


2. FOLDER & FILE STRUCTURE
------------------------------------------------------------------------
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
└── README.txt              (Project Documentation)


3. HOW TO RUN THE PROJECT
------------------------------------------------------------------------
1. Extract the VentureBridge folder to your computer.
2. Open the folder and double-click "index.html".
3. The website will open in any standard web browser (Chrome, Edge, 
   Firefox, or Safari). No external servers or installations are required.


4. JAVASCRIPT FEATURES & CALCULATION LOGIC (BASIC JS)
------------------------------------------------------------------------
All interactivity is built using beginner-friendly, vanilla JavaScript 
(DOM manipulation, event listeners, arithmetic operators, and if-else):

A. Funding Readiness Checker (checker.html):
   - Reads startup stage, monthly revenue, and co-founder count.
   - Uses if / else if / else conditions to match the startup with 
     Launchpad ($50K), Seed Accelerator ($150K), or Core Fund ($250K-$500K).

B. Equity & Valuation Calculator (calculator.html):
   - Calculates Post-Money Valuation = Pre-Money Valuation + Investment.
   - Calculates Investor Equity % = (Investment / Post-Money) * 100.
   - Calculates Founder Equity % = 100 - Investor Equity %.
   - Warns the user if equity dilution exceeds 20%.

C. Portfolio Sector Filter (portfolio.html):
   - Uses data attributes and querySelectorAll() to dynamically show or 
     hide startup cards by sector (All, FinTech, AgriTech, HealthTech).

D. Interactive FAQ Accordion (faq.html):
   - Toggles answer visibility and +/- icons when a question is clicked.

E. Pitch Submission Form (pitch.html):
   - Uses event.preventDefault() to validate inputs and show a live 
     confirmation message without reloading the page.

========================================================================