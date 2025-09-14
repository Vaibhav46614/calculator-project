// Get the display element where numbers and results are shown
let display = document.getElementById('display');

// Store the current input as a string
let currentInput = '';

// Function to update the display with current input
function updateDisplay() {
    display.innerText = currentInput || '0';
}

// Function to append a number or decimal point to current input
function appendNumber(number) {
    // Prevent adding more than one decimal point
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}

// Function to append an operator (+, -, *, /, %)
function appendOperator(operator) {
    // Do not allow operator if input is empty
    if (currentInput === '') return;

    // Do not allow two operators in a row
    let lastChar = currentInput[currentInput.length - 1];
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}

// Function to clear the display and input
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

// Function to calculate the square of the current result
function calculateSquare() {
    try {
        let value = eval(currentInput); // Evaluate the expression
        currentInput = (value * value).toString();
        updateDisplay();
    } catch {
        display.innerText = 'Error';
    }
}

// Function to evaluate the current expression and display result
function calculateResult() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch {
        display.innerText = 'Error';
    }
}