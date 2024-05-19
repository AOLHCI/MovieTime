var isValid;

function validateForm() {
    isValid = true;
    var usernameInput = document.querySelector('input[type="text"]');
    var passwordInput = document.getElementById('passwordInput');

    var usernameLabel = usernameInput.nextElementSibling;
    var passwordLabel = passwordInput.nextElementSibling;


    if (usernameInput.value.trim() === '') {
        usernameLabel.classList.add('error');
        isValid = false;
    } else {
        usernameLabel.classList.remove('error');
    }

    if (passwordInput.value.trim() === '') {
        passwordLabel.classList.add('error');
        isValid = false;
    } else {
        passwordLabel.classList.remove('error');
    }

    return isValid;
}

const showPasswordIcon = document.getElementById('showPasswordIcon');
const hidePasswordIcon = document.getElementById('hidePasswordIcon');
const passwordInput = document.getElementById('passwordInput');

showPasswordIcon.addEventListener('click', () => {
    passwordInput.type = 'text';
    showPasswordIcon.style.display = 'none';
    hidePasswordIcon.style.display = 'block';
});

hidePasswordIcon.addEventListener('click', () => {
    passwordInput.type = 'password';
    hidePasswordIcon.style.display = 'none';
    showPasswordIcon.style.display = 'block';
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.getElementById('passwordInput');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (usernameValue === '') {
            setError(usernameInput, 'Username is required');
        } else {
            setSuccess(usernameInput);
        }

        if (passwordValue === '') {
            setError(passwordInput, 'Password is required');
        } else {
            setSuccess(passwordInput);
        }

        const isValid = usernameValue !== '' && passwordValue !== '';
        if (isValid) {
            window.location.href = "home.html";
        }
    }

    function setError(element, message) {
        const inputGroup = element.parentElement;
        const errorDisplay = inputGroup.querySelector('.error');
        errorDisplay.innerText = message;
        inputGroup.classList.add('error');
    }

    function setSuccess(element) {
        const inputGroup = element.parentElement;
        inputGroup.classList.remove('error');
    }
});
