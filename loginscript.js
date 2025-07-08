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
