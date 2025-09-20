// LIGHT/DARK MODE TOGGLE
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// COUNTER GAME
let score = 0;
const scoreDisplay = document.getElementById('score');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});

// COLLAPSIBLE FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// FORM VALIDATION
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page reload

    // Clear previous messages
    formMessage.textContent = '';
    document.querySelectorAll('.error-msg').forEach(msg => msg.textContent = '');

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, 'Enter a valid email');
        isValid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
        isValid = false;
    }

    // Success message
    if (isValid) {
        formMessage.style.color = 'green';
        formMessage.textContent = 'Form submitted successfully!';
        form.reset();
    }
});

function showError(input, message) {
    const errorMsg = input.nextElementSibling;
    errorMsg.textContent = message;
    errorMsg.style.color = 'red';
}
