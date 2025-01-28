async function fetchUserData() {
    apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = 'Loading user data...';
        const userList = document.createElement('ol');
        users.forEach(user => {
            const userLi = document.createElement('li');
            userLi.textContent = user.name;
            userList.append(userLi)

        });
        dataContainer.append(userList);
    }
    catch (error) {
        dataContainer.innerHTML = 'Loading user data...';
        dataContainer.textContent = 'Failed to load user data.';

    }


}
document.addEventListener('DOMContentLoaded', fetchUserData);