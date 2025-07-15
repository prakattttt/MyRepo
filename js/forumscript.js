document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const usernameInput = document.getElementById("username");
    const commentTextInput = document.getElementById("commentText");
    const commentsContainer = document.getElementById("commentsContainer");

    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    function saveToLocalStorage() {
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    function renderComments() {
        commentsContainer.innerHTML = "";
        comments.forEach((comment, index) => {
            const commentDiv = document.createElement("div");
            commentDiv.className = "comment";
            commentDiv.innerHTML = `
                <strong>${comment.username}:</strong>
                <p>${comment.text}</p>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            commentsContainer.appendChild(commentDiv);
        });
    }

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const commentText = commentTextInput.value.trim();

        if (username && commentText) {
            comments.unshift({ username, text: commentText });
            saveToLocalStorage();
            renderComments();

            usernameInput.value = "";
            commentTextInput.value = "";
        }
    });

    commentsContainer.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");

        if (e.target.classList.contains("delete-btn")) {
            comments.splice(index, 1);
            saveToLocalStorage();
            renderComments();
        }

        if (e.target.classList.contains("edit-btn")) {
            const newText = prompt("Edit your comment:", comments[index].text);
            if (newText !== null) {
                comments[index].text = newText.trim();
                saveToLocalStorage();
                renderComments();
            }
        }
    });

    renderComments();
});
