//UI Vars
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const years = document.getElementById("years");
const monthlyPay = document.getElementById("monthly-payment");
const totalPay = document.getElementById("total-payment");
const totalInt = document.getElementById("total-interest");



document.getElementById("loan-form").addEventListener("submit", function (e) {


    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

// Calculate Resulsts
function calculateResults(e) {

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment // This is also loan function
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPay.value = monthly.toFixed(2);
        totalPay.value = (monthly * calculatedPayments).toFixed(2);
        totalInt.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        // show results
        document.getElementById("results").style.display = "Block";

        document.getElementById("loading").style.display = "none";


    } else {
        showError("Please check your numbers");


    }



}

function showError(error) {
    // create div
    const errorDiv = document.createElement("div");
    //Get elements
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    // Add class
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    //show hide loading
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "none";


    card.insertBefore(errorDiv, heading); // A kind od useful func
    setTimeout(clearError, 2000);

}

function clearError() {
    document.querySelector(".alert").remove();
}