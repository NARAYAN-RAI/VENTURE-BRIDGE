// 1. Startup Funding Eligibility Checker (checker.html)
function checkEligibility() {
    const stage = document.getElementById("stage").value;
    const revenueInput = document.getElementById("revenue").value;
    const teamSize = Number(document.getElementById("teamSize").value);
    const resultBox = document.getElementById("eligibility-result");

    const revenue = Number(revenueInput);

    if (revenueInput === "" || revenue < 0 || teamSize < 1) {
        alert("Please fill in valid revenue (0 or more) and at least 1 founder.");
        return;
    }

    let message = "";

    if (stage === "idea") {
        message = "<strong>Match: VentureBridge Launchpad ($50K Pre-Seed)</strong><br>" +
                  "<strong>Identified Problem:</strong> Too early for traditional VCs.<br>" +
                  "<strong>Our Solution:</strong> $50,000 grant/SAFE + 12 weeks of MVP mentorship.";
    } else if (stage === "mvp" && revenue < 5000) {
        message = "<strong>Match: Seed Accelerator ($150K Seed)</strong><br>" +
                  "<strong>Identified Problem:</strong> Product is ready, but customer growth is slow.<br>" +
                  "<strong>Our Solution:</strong> $150,000 check + Go-To-Market sales playbook.";
    } else {
        message = "<strong>Match: VentureBridge Core Fund ($250K – $500K)</strong><br>" +
                  "<strong>Identified Problem:</strong> Ready to scale rapidly without losing months to fundraising.<br>" +
                  "<strong>Our Solution:</strong> Up to $500,000 Seed+ funding with a 14-day term sheet.";
    }

    if (teamSize === 1) {
        message += "<br><em>Bonus Support: Solo-founder co-founder matching included.</em>";
    }

    resultBox.innerHTML = message;
    resultBox.classList.remove("hidden");
}

// 2. Startup Equity & Valuation Calculator (calculator.html)
function calculateEquity() {
    const investment = Number(document.getElementById("investmentAmount").value);
    const preMoney = Number(document.getElementById("preMoney").value);
    const resultBox = document.getElementById("equity-result");

    if (investment <= 0 || preMoney <= 0) {
        alert("Please enter valid positive numbers for investment and valuation.");
        return;
    }

    const postMoney = preMoney + investment;
    const investorEquity = ((investment / postMoney) * 100).toFixed(2);
    const founderEquity = (100 - investorEquity).toFixed(2);

    let advice = "";
    if (investorEquity > 20) {
        advice = "<span style='color:#dc2626;'>Warning: Over 20% dilution in a seed round is high. Consider raising less or increasing valuation.</span>";
    } else {
        advice = "<span style='color:#059669;'>Healthy Cap Table: Fits VentureBridge's founder-friendly dilution standards!</span>";
    }

    resultBox.innerHTML = 
        "<strong>Post-Money Valuation:</strong> $" + postMoney.toLocaleString() + "<br>" +
        "<strong>Investor Equity Share:</strong> " + investorEquity + "%<br>" +
        "<strong>Founders Retain:</strong> " + founderEquity + "%<br><br>" + advice;

    resultBox.classList.remove("hidden");
}

// 3. Portfolio Sector Filter (portfolio.html)
function filterPortfolio(sector, clickedBtn) {
    const cards = document.querySelectorAll(".portfolio-item");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    clickedBtn.classList.add("active");

    cards.forEach(card => {
        if (sector === "all" || card.getAttribute("data-sector") === sector) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// 4. FAQ Accordion Toggle (faq.html)
function toggleFaq(button) {
    const answer = button.nextElementSibling;
    const symbol = button.querySelector("span");

    if (answer.classList.contains("show")) {
        answer.classList.remove("show");
        symbol.innerText = "+";
    } else {
        answer.classList.add("show");
        symbol.innerText = "−";
    }
}

// 5. Pitch Submission Form Handler (pitch.html)
const pitchForm = document.getElementById("pitchForm");
if (pitchForm) {
    pitchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const founder = document.getElementById("founderName").value;
        const startup = document.getElementById("startupName").value;
        const feedback = document.getElementById("formMessage");

        feedback.innerText = "Success! Thank you, " + founder + ". Your pitch for '" + startup + "' is logged. Expect a decision within 14 days.";
        pitchForm.reset();
    });
}
