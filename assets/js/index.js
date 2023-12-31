/**
 * Project Name : Gradient Generator
 * Date : 09 / 11 / 2023
 * Developer : @HAMEDPYN
 */

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

// Function to generate CSS code and update elements
function generateCssText() {
    // Get the values of the color input fields
    let aValue = colorA.value;
    let bValue = colorB.value;

    // Update the text area with the generated CSS code
    textArea.innerHTML = `background:linear-gradient(${currentDirection},${aValue},${bValue})`;

    // Update the body element's CSS to apply the generated linear gradient background
    bodyEl.style.cssText = `background:linear-gradient(${currentDirection},${aValue},${bValue})`;
}

// Function to copy the gradient Css
(function () {
    copy.addEventListener("click", () => {
        // Copy the text area's value
        navigator.clipboard.writeText(textArea.innerHTML)
    })
})();

// Event listener for the "submit" button
submit.addEventListener("click", generateCssText);