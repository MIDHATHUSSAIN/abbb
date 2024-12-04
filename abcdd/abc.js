// Get the login and signup forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Get the links to toggle the forms
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

// Add event listeners to the links
loginLink.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupLink.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});