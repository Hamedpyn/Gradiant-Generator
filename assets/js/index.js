
// Select DOM Elements
const bodyEl = document.querySelector('body');
const colorA = document.querySelector('#color-a');
const colorB = document.querySelector('#color-b');
const submit = document.querySelector('#submit');
const copy = document.querySelector('#copy');
const buttons = document.querySelectorAll('.buttons > button');
const textArea = document.querySelector('#code');
// current Direction for the gradient
let currentDirection = "to bottom";

// Event listener for buttons
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        // Get the direction from the clicked button's data-direction attribute
        let btnDirection = e.target.dataset.direction;

        // Remove the "active" class from the currently active button
        document.querySelector("button.active").classList = "";

        if (e.target.tagName == "BUTTON") {
            // If the clicked element is a button, add the "active" class to it
            e.target.classList.add("active");
        } else {
            // If the clicked element is not a button, add the "active" class to its parent element
            e.target.parentElement.classList.add("active");
        }
        // Update the currentDirection variable with the selected direction
        currentDirection = btnDirection;
    });
});
