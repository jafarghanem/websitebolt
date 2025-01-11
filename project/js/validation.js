document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    if (!form) return;

    const validateName = (value) => /^[A-Za-z\s]+$/.test(value);
    const validateMobile = (value) => /^09\d{9}$/.test(value);
    const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const validatePassword = (value) => value.length >= 6;

    const showError = (elementId, message) => {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    };

    const clearErrors = () => {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => element.textContent = '');
    };

    // Real-time validation for each input field
    const realTimeValidation = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'firstName':
                if (!validateName(value)) {
                    showError('firstNameError', 'Please enter a valid first name (letters only)');
                } else {
                    showError('firstNameError', '');
                }
                break;
            case 'lastName':
                if (!validateName(value)) {
                    showError('lastNameError', 'Please enter a valid last name (letters only)');
                } else {
                    showError('lastNameError', '');
                }
                break;
            case 'mobile':
                if (!validateMobile(value)) {
                    showError('mobileError', 'Please enter a valid mobile number (11 digits starting with 09)');
                } else {
                    showError('mobileError', '');
                }
                break;
            case 'email':
                if (!validateEmail(value)) {
                    showError('emailError', 'Please enter a valid email address');
                } else {
                    showError('emailError', '');
                }
                break;
            case 'password':
                if (!validatePassword(value)) {
                    showError('passwordError', 'Password must be at least 6 characters long');
                } else {
                    showError('passwordError', '');
                }
                break;
            case 'confirmPassword':
                const password = form.password.value;
                if (value !== password) {
                    showError('confirmPasswordError', 'Passwords do not match');
                } else {
                    showError('confirmPasswordError', '');
                }
                break;
        }
    };

    // Add real-time validation to all input fields
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => input.addEventListener('input', realTimeValidation));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearErrors();

        let isValid = true;
        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();
        const mobile = form.mobile.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (!firstName || !validateName(firstName)) {
            showError('firstNameError', 'Please enter a valid first name (letters only)');
            isValid = false;
        }

        if (!lastName || !validateName(lastName)) {
            showError('lastNameError', 'Please enter a valid last name (letters only)');
            isValid = false;
        }

        if (!mobile || !validateMobile(mobile)) {
            showError('mobileError', 'Please enter a valid mobile number (11 digits starting with 09)');
            isValid = false;
        }

        if (!email || !validateEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (!password || !validatePassword(password)) {
            showError('passwordError', 'Password must be at least 6 characters long');
            isValid = false;
        }

        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }

        if (isValid) {
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'Your registration was successful!';
            form.reset();
        }
    });
});