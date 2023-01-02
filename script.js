// VARIABLES
const previousOutput = document.querySelector('.previous-output');
const currentOutput = document.querySelector('.current-output');

const operandBtns = document.querySelectorAll('.operand');
const operatorBtns = document.querySelectorAll('.operator');
const evaluateBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');
const clearBtn = document.querySelector('.clear');

const toggleBtn = document.querySelector('.toggle-btn');

let input = '';

// EVENTLISTNERS
operandBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        input += e.target.textContent;
        previousOutput.value = input;
    })
})

operatorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (input === '') {
            alert('Enter a Number first!')
        } else {
            if (e.target.textContent === "÷") {
                input += '/';
                previousOutput.value = input;
            } else if (e.target.textContent === 'X') {
                input += '*';
                previousOutput.value = input;
            } else if (e.target.textContent === '−') {
                input += '-';
                previousOutput.value = input;
            }
            else {
                input += e.target.textContent;
                previousOutput.value = input;
            }
        }
    })
})

deleteBtn.addEventListener('click', () => {
    input = input.slice(0, -1);
    previousOutput.value = input;
})

clearBtn.addEventListener('click', () => {
    input = ' ';
    previousOutput.value = input;
    currentOutput.value = ''
})

evaluateBtn.addEventListener('click', () => {
    currentOutput.value = eval(input);
})

// TOGGLE FUNTION
toggleBtn.addEventListener('click', () => {
    document.querySelector('.wrapper').classList.toggle('dark');
    document.querySelector('.display-section').classList.toggle('dark');
    document.querySelector('.keys-section').classList.toggle('dark');
})