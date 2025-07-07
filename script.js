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

//For forum
document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const usernameInput = document.getElementById("username");
    const commentTextInput = document.getElementById("commentText");
    const commentsContainer = document.getElementById("commentsContainer");

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const commentText = commentTextInput.value.trim();

        if (username && commentText) {
            const commentDiv = document.createElement("div");
            commentDiv.className = "comment";
            commentDiv.innerHTML = `<strong>${username}:</strong><p>${commentText}</p>`;
            commentsContainer.prepend(commentDiv);

            usernameInput.value = "";
            commentTextInput.value = "";
        }
    });
});
