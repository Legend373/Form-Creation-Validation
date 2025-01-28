async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the Data Container Element
    const dataContainer = document.getElementById("api-data");

    try {
        // Show a loading message
        dataContainer.innerHTML = 'Loading user data...';

        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create and append user list
        const userList = document.createElement('ul'); // Changed to <ul> as per steps
        users.forEach(user => {
            const userLi = document.createElement('li');
            userLi.textContent = user.name; // Set the user name as text content
            userList.appendChild(userLi); // Append the <li> to the user list
        });
        dataContainer.appendChild(userList); // Append the <ul> to the data container
    } catch (error) {
        // Clear the loading message and display an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
