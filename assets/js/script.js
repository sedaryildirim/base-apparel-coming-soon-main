document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const errorMessage = document.querySelector('.error-message');
    const errorIcon = document.querySelector('.error-icon');

    form.addEventListener('submit', handleSubmit);
    emailInput.addEventListener('input', clearError);

    function handleSubmit(event) {
        event.preventDefault();
        
        if (validateEmail(emailInput.value)) {
            // Email is valid
            clearError();
            console.log('Form submitted successfully');
            // Here you can add code to submit the form
            form.reset(); // Clear the form after successful submission
        } else {
            // Email is invalid
            showError('Please provide a valid email');
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.trim());
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
        emailInput.setAttribute('aria-invalid', 'true');
    }

    function clearError() {
        errorMessage.classList.add('hidden');
        errorIcon.classList.add('hidden');
        emailInput.removeAttribute('aria-invalid');
    }
});