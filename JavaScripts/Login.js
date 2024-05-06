function validateForm() {
    var usernameInput = document.querySelector('input[type="text"]');
    var passwordInput = document.getElementById('passwordInput');

    var usernameLabel = usernameInput.nextElementSibling;
    var passwordLabel = passwordInput.nextElementSibling;

    var isValid = true;

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

function BackLogin(){
    window.location.href = 'Login.html'
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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("goToHomeButton").addEventListener("click", function() {
        var username = document.getElementById("usernameInput").value;
        var password = document.getElementById("passwordInput").value;
        var rememberCheckbox = document.getElementById("rememberCheckbox").checked;

        if (username !== "" && password !== "" && rememberCheckbox) {
            window.location.href = "register.html";
        }
    });
});
