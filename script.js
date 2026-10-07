// Get HTML elements
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");

const calculateButton = document.getElementById("calculate-btn");
const resetButton = document.getElementById("reset-btn");

const tipResult = document.getElementById("tip-result");
const totalResult = document.getElementById("total-result");
const personResult = document.getElementById("person-result");

const errorMessage = document.getElementById("error-message");

const tipButtons = document.querySelectorAll(".tip-btn");


// =========================
// TIP BUTTONS
// =========================

tipButtons.forEach(button => {

    button.addEventListener("click", () => {

        const tipValue = button.dataset.tip;

        tipInput.value = tipValue;

        // Remove active class from all buttons
        tipButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

    });

});


// =========================
// CALCULATE TIP
// =========================

calculateButton.addEventListener("click", () => {

    const bill = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipInput.value);
    const people = parseInt(peopleInput.value);


    // Clear previous error
    errorMessage.textContent = "";


    // Validate bill
    if (isNaN(bill) || bill <= 0) {

        errorMessage.textContent =
            "Please enter a valid bill amount.";

        return;
    }


    // Validate tip
    if (isNaN(tipPercentage) || tipPercentage < 0) {

        errorMessage.textContent =
            "Please enter a valid tip percentage.";

        return;
    }


    // Validate number of people
    if (isNaN(people) || people <= 0) {

        errorMessage.textContent =
            "Number of people must be at least 1.";

        return;
    }


    // Calculate tip
    const tipAmount =
        bill * tipPercentage / 100;


    // Calculate total
    const totalAmount =
        bill + tipAmount;


    // Calculate amount per person
    const amountPerPerson =
        totalAmount / people;


    // Display results
    tipResult.textContent =
        tipAmount.toFixed(2);

    totalResult.textContent =
        totalAmount.toFixed(2);

    personResult.textContent =
        amountPerPerson.toFixed(2);

});


// =========================
// RESET CALCULATOR
// =========================

resetButton.addEventListener("click", () => {

    // Clear inputs
    billInput.value = "";

    tipInput.value = "";

    peopleInput.value = "1";


    // Reset results
    tipResult.textContent = "0.00";

    totalResult.textContent = "0.00";

    personResult.textContent = "0.00";


    // Clear error
    errorMessage.textContent = "";


    // Remove active tip button
    tipButtons.forEach(button => {
        button.classList.remove("active");
    });

});