document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Initialize Validation Variables
        let isValid = true;
        let messages = [];

        // Username Validation
        const username = document.getElementById('username').value.trim();
        if (username.length < 3) {
            isValid = false;
            messages.push("Invalid username: must be at least 3 characters long.");
        }

        // Email Validation
        const email = document.getElementById("email").value.trim();
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Invalid email: must include '@' and '.'");
        }

        // Password Validation
        const password = document.getElementById("password").value.trim();
        if (password.length < 8) {
            isValid = false;
            messages.push("Invalid password: must be at least 8 characters long.");
        }

        // Display Feedback
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red
        }
    });
});
