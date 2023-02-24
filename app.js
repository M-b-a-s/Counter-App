// DOM Elements
const numberEl = document.getElementById('number');
const plusBtn = document.getElementById('add-btn');
const minusBtn= document.getElementById('minus-btn');
const resetEl = document.getElementById('reset');

let num = 0

// EVENTS
plusBtn.addEventListener('click', () => {
    increment()
})

minusBtn.addEventListener('click', () => {
    decrement()
})

resetEl.addEventListener('click', () => {
    reset()
})

// FUNCTIONS
const increment = () => {
    num += 1
    numberEl.textContent = num;
}

const decrement = () => {
    num -= 1
    numberEl.textContent = num;
}

const reset = () => {
    numberEl.textContent = 0;
    num = 0;
}
