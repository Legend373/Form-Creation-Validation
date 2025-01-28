document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback")
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        isValid = true;
        let messages = [];
        if (username.length < 3) {
            isValid = false;
            messages.push("in valid username")


        }
        if (!email.includes('.', '@')) {
            isValid = false;
            messages.push("in valid email")
        }
        if (password.length < 8) {
            isValid = false;
            messages.push("in valid password")
        }
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.innerHTML = "Registration successful!";
            feedbackDiv.style.color = "#28a745"

        } else {

            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"
        }
    })
})