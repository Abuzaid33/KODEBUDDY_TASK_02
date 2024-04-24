// Getting references to form elements and guidance messages
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');

const usernameGuidance = document.getElementById('usernameGuidance');
const emailGuidance = document.getElementById('emailGuidance');
const passwordGuidance = document.getElementById('passwordGuidance');

// Regular expressions for validation
const usernameRegex = /^[a-zA-Z0-9]{6,}$/; // Username must be alphanumeric and at least 6 characters long
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/; // Password must be 8 characters long and include uppercase letters, lowercase letters, numbers, and symbols

// Function to validate input
function validateInput(input, regex, guidanceElement) {
  if (regex.test(input.value)) {
    // If input matches the regex, set guidance message to valid
    guidanceElement.style.color = 'green';
    guidanceElement.textContent = 'Valid input';
    return true;
  } else {
    // If input doesn't match the regex, set guidance message to invalid
    guidanceElement.style.color = 'red';
    return false;
  }
}

// Event listeners for input validation
usernameInput.addEventListener('input', () => {
  // Validate username input and update overall form validity
  validateInput(usernameInput, usernameRegex, usernameGuidance);
  checkFormValidity();
});

emailInput.addEventListener('input', () => {
  // Validate email input and update overall form validity
  validateInput(emailInput, emailRegex, emailGuidance);
  checkFormValidity();
});

passwordInput.addEventListener('input', () => {
  // Validate password input and update overall form validity
  validateInput(passwordInput, passwordRegex, passwordGuidance);
  checkFormValidity();
});

// Function to check overall form validity
function checkFormValidity() {
  // Check if all inputs are valid according to their respective regex patterns
  if (usernameRegex.test(usernameInput.value) && emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value)) {
    // If all inputs are valid, enable the submit button
    submitButton.disabled = false;
  } else {
    // If any input is invalid, disable the submit button
    submitButton.disabled = true;
  }
}
