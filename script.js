// 1. Realistic Startup Valuation & Funding Calculator (checker.html)
function checkEligibility() {
    const stage = document.getElementById("stage").value;
    const revInput = document.getElementById("yearlyRevenue").value;
    const profitInput = document.getElementById("yearlyProfit").value;
    const teamSize = Number(document.getElementById("teamSize").value);
    const resultBox = document.getElementById("eligibility-result");

    const yearlyRevenue = Number(revInput);
    const yearlyProfit = Number(profitInput);

    if (revInput === "" || profitInput === "" || yearlyRevenue < 0 || teamSize < 1) {
        alert("Please enter valid yearly revenue (0 or more), profit/loss, and at least 1 founder.");
        return;
    }

    let multiple = 0;
    let valuation = 0;
    let fundingOffer = 0;
    let trackName = "";
    let formulaNote = "";

    if (stage === "idea") {
        trackName = "VentureBridge Launchpad (Idea Track)";
        multiple = 0;
        valuation = 250000;
        fundingOffer = 50000;
        formulaNote = "Base Idea-Stage Valuation Cap ($250,000) with fixed $50,000 Pre-Seed Grant.";
    } 
    else if (stage === "pre") {
        trackName = "Pre-Seed Accelerator Track";
        multiple = 5;
        valuation = yearlyRevenue * multiple;
        
        if (valuation < 400000) {
            valuation = 400000;
        }

        if (yearlyProfit > 0) {
            fundingOffer = (valuation * 0.15) + (yearlyProfit * 0.25);
        } else {
            fundingOffer = valuation * 0.15;
        }

        if (fundingOffer > 250000) {
            fundingOffer = 250000;
        }
        formulaNote = "5x Yearly Revenue Multiple (with $400K floor) + 15% Valuation Funding Formula.";
    } 
    else {
        trackName = "VentureBridge Core Seed Fund";
        if (yearlyProfit > 0 && yearlyRevenue >= 200000) {
            multiple = 15;
        } else {
            multiple = 10;
        }

        valuation = (yearlyRevenue * multiple);
        
        if (yearlyProfit > 0) {
            valuation = valuation + (yearlyProfit * 2);
        }

        if (valuation < 1000000) {
            valuation = 1000000;
        }

        if (yearlyProfit > 0) {
            fundingOffer = (valuation * 0.12) + (yearlyProfit * 0.50);
        } else {
            fundingOffer = valuation * 0.10;
        }

        if (fundingOffer > 1000000) {
            fundingOffer = 1000000;
        }
        formulaNote = multiple + "x Yearly Revenue Multiple + Profit Multiplier.";
    }

    let teamNote = "";
    if (teamSize === 1) {
        teamNote = "<br><strong>Founder Note:</strong> Solo founder detected — eligible for Co-Founder Matching Program.";
    } else {
        teamNote = "<br><strong>Founder Note:</strong> Multi-founder team (" + teamSize + " co-founders) qualifies for fast-track review.";
    }

    let profitStatus = "";
    if (yearlyProfit > 0) {
        profitStatus = "Profitable (+$" + yearlyProfit.toLocaleString() + "/yr) — Valuation & Check Boosted!";
    } else if (yearlyProfit === 0) {
        profitStatus = "Break-Even ($0/yr)";
    } else {
        profitStatus = "Burn Mode ($" + yearlyProfit.toLocaleString() + "/yr) — Check adjusted for cash burn.";
    }

    resultBox.innerHTML = 
        "<strong>Recommended Track:</strong> " + trackName + "<br>" +
        "<strong>Estimated Valuation:</strong> $" + Math.round(valuation).toLocaleString() + "<br>" +
        "<strong>Eligible Funding Offer:</strong> $" + Math.round(fundingOffer).toLocaleString() + "<br>" +
        "<strong>Formula Used:</strong> " + formulaNote + "<br>" +
        "<strong>Profitability Status:</strong> " + profitStatus + teamNote;

    resultBox.classList.remove("hidden");
}

// 2. Smart Stage-Based Equity & Cap Table Calculator (calculator.html)
function calculateEquity() {
    const eqStage = document.getElementById("eqStage").value;
    const investment = Number(document.getElementById("investmentAmount").value);
    const preMoney = Number(document.getElementById("preMoney").value);
    const existingInvestor = Number(document.getElementById("existingInvestor").value);
    const resultBox = document.getElementById("equity-result");

    if (investment <= 0 || preMoney <= 0 || existingInvestor < 0 || existingInvestor >= 90) {
        alert("Please enter valid positive numbers for investment, valuation, and existing investor % (0-89).");
        return;
    }

    const postMoney = preMoney + investment;
    const newInvestorShare = (investment / postMoney) * 100;
    
    const remainingPool = 100 - newInvestorShare;
    const dilutedExistingInvestors = (existingInvestor / 100) * remainingPool;
    const foundersFinalShare = remainingPool - dilutedExistingInvestors;

    let maxAllowedDilution = 15;
    if (eqStage === "idea") {
        maxAllowedDilution = 10;
    } else if (eqStage === "pre") {
        maxAllowedDilution = 15;
    } else {
        maxAllowedDilution = 20;
    }

    let governanceAdvice = "";
    if (newInvestorShare > maxAllowedDilution) {
        governanceAdvice = "<span style='color:#9f1239;'><strong>High Dilution Alert:</strong> Giving away " + newInvestorShare.toFixed(2) + "% exceeds the " + maxAllowedDilution + "% recommended limit for this stage.</span>";
    } else {
        governanceAdvice = "<span style='color:#065f46;'><strong>Healthy Round Dilution:</strong> " + newInvestorShare.toFixed(2) + "% is within the safe " + maxAllowedDilution + "% limit for this stage.</span>";
    }

    let controlWarning = "";
    if (foundersFinalShare < 50) {
        controlWarning = "<br><span style='color:#9f1239;'><strong>Majority Control Warning:</strong> Founders drop below 50% ownership (" + foundersFinalShare.toFixed(2) + "%). You risk losing board voting control!</span>";
    } else if (newInvestorShare >= 15) {
        controlWarning = "<br><span style='color:#92400e;'><strong>Board Seat Note:</strong> Since new investor share is 15% or more, they will likely request 1 Board Seat.</span>";
    } else {
        controlWarning = "<br><span style='color:#065f46;'><strong>Founder Control Safe:</strong> Founders retain strong majority ownership (" + foundersFinalShare.toFixed(2) + "%).</span>";
    }

    resultBox.innerHTML = 
        "<strong>Post-Money Valuation:</strong> $" + postMoney.toLocaleString() + "<br>" +
        "<strong>New Investor Equity:</strong> " + newInvestorShare.toFixed(2) + "%<br>" +
        "<strong>Previous Investors (After Dilution):</strong> " + dilutedExistingInvestors.toFixed(2) + "%<br>" +
        "<strong>Founders Final Ownership:</strong> " + foundersFinalShare.toFixed(2) + "%<br><br>" +
        governanceAdvice + controlWarning;

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
            card.style.display = "flex";
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
