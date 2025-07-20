const container = document.querySelector('.container');
const registerBtn = document.querySelector('.registerBtn');
const loginBtn = document.querySelector('.loginBtn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

const login = document.querySelector('.login');
const register = document.querySelector('.register');

function toggleRegister() {
    register.style.visibility = "visible";
    login.style.visibility = "hidden";
}

function toggleLogin() {
    login.style.visibility = "visible";
    register.style.visibility = "hidden";
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login form');
    const registerForm = document.querySelector('.register form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullName = loginForm.querySelector('input[placeholder="Full Name"]').value;
        const email = loginForm.querySelector('input[placeholder="Email"]').value;
        const password = loginForm.querySelector('input[placeholder="Password"]').value;

        const userData = {
            fullName,
            email,
            password
        };

        localStorage.setItem('userLoginData', JSON.stringify(userData));
        window.location.href = "http://127.0.0.1:5500/html/successfulLogin.html";
        loginForm.reset();
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const fullName = registerForm.querySelector('input[placeholder="Full Name"]').value;
        const email = registerForm.querySelector('input[placeholder="Email"]').value;
        const password = registerForm.querySelector('input[placeholder="Password"]').value;

        const userData = {
            fullName,
            email,
            password
        };

        localStorage.setItem('userRegisterData', JSON.stringify(userData));
        alert("Registered Successfully! Please login now.");
        registerForm.reset();
    });
});


