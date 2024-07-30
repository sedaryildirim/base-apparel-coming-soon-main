document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const errorMessage = document.querySelector('.error-message');
    const errorIcon = document.querySelector('.error-icon');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateEmail(emailInput.value)) {
            // Email is valid
            errorMessage.classList.add('hidden');
            errorIcon.classList.add('hidden');
            console.log('Form submitted successfully');
            // Here you can add code to submit the form
        } else {
            // Email is invalid
            errorMessage.classList.remove('hidden');
            errorIcon.classList.remove('hidden');
            errorMessage.textContent = 'Please provide a valid email';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});