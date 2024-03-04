let buttons = document.querySelectorAll('.button.digit');
let field = document.querySelector('.field');
let point = document.querySelector('.point');
let clear = document.querySelector('.clear');
let signs = document.querySelectorAll('.operator');
let equals = document.querySelector('.equals')
let first = '';
let second = '';
let operator = '';
let content;

buttons.forEach((div) => {
    div.addEventListener('click', () => {
        if (field.textContent.length < 10) {
            field.textContent += div.textContent;
        }
});
});

signs.forEach((div) => {
    div.addEventListener('click', () => {
        if (first === '') {
            first = field.textContent;
            operator = div.textContent;
            field.textContent = '';
        } else {
            second = field.textContent;
            first = operate();
            field.textContent = first;
            first = '';
            second = '';
        }
});
});

equals.addEventListener('click', () => {
    if (second === '') {
        second = field.textContent;
        first = operate();
        field.textContent = first;
        first = '';
        second = '';
    }
});

point.addEventListener('click', () => {
    if ((!field.textContent.includes('.')) && (field.textContent.length > 0)) {
        field.textContent += point.textContent;
    }
});

clear.addEventListener('click', () => {
    field.textContent = '';
    first = '';
    second = '';
    operator = '';
});

function operate() {
    if (operator === '+') {
        return add();
    } else if (operator === '-') {
        return substract();
    } else if (operator === '*') {
        return multiply();
    }  else if (operator === '/') {
        return divide();
    }
}

function add() {
    return +first + +second;
}

function substract() {
    return +first - +second;
}

function multiply() {
    return +first * +second;
}

function divide() {
    if (+second === 0) {
        return 'illegal';
    } else {
        return +first / +second;
    }
}

