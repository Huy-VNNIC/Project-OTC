document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle sign up logic here
        alert('Sign Up form submitted');
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle log in logic here
        alert('Log In form submitted');
    });

    forgotPasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle forgot password logic here
        alert('Forgot Password form submitted');
    });
});
