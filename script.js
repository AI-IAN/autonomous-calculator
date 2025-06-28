let display = document.getElementById('result');
let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

function appendToDisplay(value) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    
    // Handle operators
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '') return;
        
        if (previousInput \!== '' && operator \!== '' && currentInput \!== '') {
            calculate();
        }
        
        operator = value;
        previousInput = currentInput;
        currentInput = '';
        display.value = previousInput + ' ' + (value === '/' ? '÷' : value === '*' ? '×' : value) + ' ';
        return;
    }
    
    currentInput += value;
    display.value = (previousInput && operator ? previousInput + ' ' + (operator === '/' ? '÷' : operator === '*' ? '×' : operator) + ' ' : '') + currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = (previousInput && operator ? previousInput + ' ' + (operator === '/' ? '÷' : operator === '*' ? '×' : operator) + ' ' : '') + currentInput;
}

function calculate() {
    if (currentInput === '' || previousInput === '' || operator === '') {
        return;
    }
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert('Cannot divide by zero\!');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    shouldResetDisplay = true;
}
