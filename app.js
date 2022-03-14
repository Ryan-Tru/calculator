const divideButton = document.querySelector('.divide');
const multiplyButton = document.querySelector('.multiply');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');

const buttonNumber = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');
const buttonEqual = document.querySelector('.equals');
const buttonClear = document.querySelector('.clear');

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');

let operand = document.querySelector('[data-operand]').innerHTML;
let operandBefore;

let operatorGlobal = undefined;


//Changes the colour when the buttons are clicked
buttonNumber.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('click-number');
        setTimeout(function() {
            button.classList.remove('click-number');
        }, 0400);
    });
});

buttonOperator.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('click-operator');
        if(button.innerHTML === '+') {
            divideButton.classList.remove('click-operator');
            multiplyButton.classList.remove('click-operator');
            minusButton.classList.remove('click-operator');
        } else if(button.innerHTML === '-') {
            divideButton.classList.remove('click-operator');
            multiplyButton.classList.remove('click-operator');
            plusButton.classList.remove('click-operator');
        } else if(button.innerHTML === '/') {
            minusButton.classList.remove('click-operator');
            multiplyButton.classList.remove('click-operator');
            plusButton.classList.remove('click-operator');
        } else if(button.innerHTML === '*') {
            minusButton.classList.remove('click-operator');
            divideButton.classList.remove('click-operator');
            plusButton.classList.remove('click-operator');
        }
    });
});

buttonEqual.addEventListener('click', () => {
        buttonEqual.classList.add('click-clear-equal');
        setTimeout(function() {
            buttonEqual.classList.remove('click-clear-equal');
        }, 0400);
});

buttonClear.addEventListener('click', () => {
    buttonClear.classList.add('click-clear-equal');
    setTimeout(function() {
        buttonClear.classList.remove('click-clear-equal');
    }, 0400);
});


//calculator functions
function allClear() {
    operand = '';
    operandBefore = '';
    buttonOperator.forEach(button => {
        button.classList.remove('click-operator');
    });
    operatorGlobal = undefined;
    updateDisplay();
}

function appendNumber(number) {
    if(number === '.' && operand.includes('.')) return;
    operand = operand.toString() + number.toString();
}

function chooseOperator(operator) {
    operatorGlobal = operator;
    if(operand === '') return;
    if(operandBefore !== '') {
        operate(operatorGlobal);
    }
    operandBefore = operand;
    operand = '';
}

function operate(operator) {
    let result;
    const previous = parseFloat(operandBefore);
    const current = parseFloat(operand);
    if(isNaN(previous) || isNaN(current)) return;
    switch(operator) {
        case '+': 
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '/':
            if(previous === 0 || current === 0) {
                result = 'C\'mon Really?!'
                break;
            } else {
                result = previous / current;
                break;
            }
        case '*':
            result = previous * current;
            break;
        default:
            return;
    }
    operand = result;
    operatorGlobal = undefined;
    operandBefore = '';

    buttonOperator.forEach(button => {
        button.classList.remove('click-operator');
    });
}

function updateDisplay() {
    let operandText = document.querySelector('.operand');
    operandText.innerText = operand;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
        updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.textContent);
    });
});

clearButton.addEventListener('click', () => {
    allClear();
});

equalsButton.addEventListener('click', () => {
    operate(operatorGlobal);
    updateDisplay();
});