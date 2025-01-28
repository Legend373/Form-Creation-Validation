async function fetchUserData() {
    apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataConatiner = document.getElementById("api-data");
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataConatiner.innerHTML = '';
        const userlist = createElement('ol');
        users.forEach(user => {
            const userli = createElement('li');
            userli.textContent = user.name;
            userlist.append(userli)

        });
        dataConatiner.append(userlist);
    }
    catch (error) {
        dataConatiner.innerHTML = '';
        dataConatiner.textContent = 'Failed to load user data.';

    }


}
document.addEventListener('DOMContentLoaded', fetchUserData);