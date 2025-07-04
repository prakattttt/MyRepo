//For main document's navbar
const sidebar = document.querySelector('.sidebar');
function showSidebar() {
    sidebar.style.display = "flex";
}

function hideSidebar() {
    sidebar.style.display = "none";
}

//For form
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.registerBtn');
const loginBtn = document.querySelector('.loginBtn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})