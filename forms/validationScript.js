// JavaScript code for form validation

// Retrieve the input field value

// Prevent form from submitting

// Regular expression pattern for alphanumeric input

// Check if the input value matches the pattern

// Valid input: display confirmation and submit the form

// Invalid input: display error message

document.addEventListener('DOMContentLoaded', function() {
  const myForm = document.getElementById('myForm');
  const inputField = document.getElementById('inputField');

  function getOrCreateMessageDiv(id) {
    let messageDiv = document.getElementById(id);
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = id;

        const myForm = document.getElementById('myForm');
        if (myForm) {
             myForm.parentNode.insertBefore(messageDiv, myForm.nextSibling);
        } else {
             document.body.appendChild(messageDiv);
        }
    }
    return messageDiv;
}

function clearMessages() {
    const errorDiv = document.getElementById('errorMessage');
    const confirmDiv = document.getElementById('confirmationMessage');
    if (errorDiv) {
            errorDiv.textContent = '';
        }
        if (confirmDiv) {
            confirmDiv.textContent = '';
        }
}

  myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    clearMessages();
    
    const inputValue = inputField.value;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if (alphanumericRegex.test(inputValue)) {
      const confirmationMessageDiv = getOrCreateMessageDiv('confirmationMessage');
      confirmationMessageDiv.textContent = `Input "${inputValue}" is valid.`;
      confirmationMessageDiv.style.display = 'block';
    } else {
      const errorMessageDiv = getOrCreateMessageDiv('errorMessage');
      errorMessageDiv.textContent = 'Error: Input must contain only alphanumeric characters (A-Z, a-z, 0-9).';
      errorMessageDiv.style.display = 'block';
    }
  });
});