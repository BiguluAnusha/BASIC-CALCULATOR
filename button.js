let display = document.getElementById('result');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function operate(operator) {
    if (currentInput !== '') {
        currentInput += ' ' + operator + ' ';
        display.value = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
 }
