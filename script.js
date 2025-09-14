let display = document.getElementById('display');
let currentInput = '';

function updateDisplay() {
    display.innerText = currentInput || '0';
}
function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}
function appendOperator(operator) {
    if (currentInput === '') return;

    let lastChar = currentInput[currentInput.length - 1];
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1) + operator;
    } else {
        currentInput += operator;
    }
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}
function calculateSquare() {
    try {
        let value = eval(currentInput); // Evaluate the expression
        currentInput = (value * value).toString();
        updateDisplay();
    } catch {
        display.innerText = 'Error';
    }
}
function calculateResult() {
    try {
        let result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch {
        display.innerText = 'Error';
    }

}
