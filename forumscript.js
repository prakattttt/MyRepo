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