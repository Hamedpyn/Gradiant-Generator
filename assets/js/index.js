
// Select DOM Elements
const bodyEl = document.querySelector('body');
const colorA = document.querySelector('#color-a');
const colorB = document.querySelector('#color-b');
const submit = document.querySelector('#submit');
const copy = document.querySelector('#copy');
const buttons = document.querySelectorAll('.buttons > button');
const textArea = document.querySelector('#code');

// Event listener for buttons
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Get the direction from the clicked button's data-direction attribute
        let btnDirection = e.target.dataset.direction;
    });
});
