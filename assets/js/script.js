document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const submitButton = form.querySelector('button[type="submit"]');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      validateEmail();
    });
  
    function validateEmail() {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailRegex.test(email)) {
        // Valid email
        removeError();
        // You can add code here to submit the form or perform other actions
        console.log('Email is valid:', email);
      } else {
        // Invalid email
        showError('Please provide a valid email');
      }
    }
  
    function showError(message) {
      removeError(); // Remove any existing error first
  
      const errorMessage = document.createElement('p');
      errorMessage.className = 'error-message';
      errorMessage.textContent = message;
  
      const errorIcon = document.createElement('img');
      errorIcon.src = './assets/images/icon-error.svg';
      errorIcon.alt = 'Error icon';
      errorIcon.className = 'error-icon';
  
      emailInput.classList.add('error');
      emailInput.parentNode.insertBefore(errorMessage, submitButton);
      emailInput.parentNode.insertBefore(errorIcon, submitButton);
    }
  
    function removeError() {
      const existingError = form.querySelector('.error-message');
      const existingIcon = form.querySelector('.error-icon');
  
      if (existingError) existingError.remove();
      if (existingIcon) existingIcon.remove();
      emailInput.classList.remove('error');
    }
  });