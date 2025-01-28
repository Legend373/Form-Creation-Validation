async function fetchUserData() {
    apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = 'Loading user data...';
        const userList = createElement('ol');
        users.forEach(user => {
            const userli = createElement('li');
            userli.textContent = user.name;
            userList.append(userli)

        });
        dataContainer.append(userList);
    }
    catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';

    }


}
document.addEventListener('DOMContentLoaded', fetchUserData);