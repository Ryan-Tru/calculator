let display = document.querySelector('.display');

const buttonNumber = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');
const buttonEqual = document.querySelector('.equals');
const buttonClear = document.querySelector('.clear');

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');

let operand = document.querySelector('[data-operand]');
let operandBefore = 0;


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
        button.classList.toggle('click-operator');
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

//operator functions
function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    let difference = num1 - num2;
    return difference;
}

function divide(num1, num2) {
    if(num1 === 0 || num2 === 0) {
        return 'C\'mon really?!';
    } else {
        let quotient = num1 / num2;
        return quotient;
    }
}

function multiply(num1, num2) {
    let product = num1 * num2;
    return product;
}

function allClear() {
    operand = '';
    operandBefore = '';
}

function deleteNum() {

}

function appendNumber(number) {
    operand = operand.toString() + number.toString();
    console.log(operand)
}

function chooseOperator(operator) {

}

function operate() {

}

function updateDisplay() {
    let operandText = document.querySelector('.operand');
    operandText.innerText = operand;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerHTML);
    });
});