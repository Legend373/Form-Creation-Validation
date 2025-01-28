async function fetchUserData() {
    apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = 'Loading user data...';
        const userlist = createElement('ol');
        users.forEach(user => {
            const userli = createElement('li');
            userli.textContent = user.name;
            userlist.append(userli)

        });
        dataContainer.append(userlist);
    }
    catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';

    }


}
document.addEventListener('DOMContentLoaded', fetchUserData);