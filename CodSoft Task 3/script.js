let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput += op;
        display.value = currentInput;
    } else if (currentInput !== '') {
        if (!isNaN(currentInput[currentInput.length - 1])) {
            currentInput += op;
            display.value = currentInput;
        }
    }
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
        resultDisplayed = true;
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}