document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('user-list');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiUrl)
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const listItem = document.createElement('li');
                const userLink = document.createElement('a');
                userLink.href = '#';
                userLink.textContent = user.name;
                userLink.addEventListener('click', () => showUserDetails(user));
                listItem.appendChild(userLink);
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });

    function showUserDetails(user) {
        userList.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <button id="back-button">Back to Users List</button>
        `;

        document.getElementById('back-button').addEventListener('click', () => {
            userList.innerHTML = '';
            fetch(apiUrl)
                .then(response => response.json())
                .then(users => {
                    users.forEach(user => {
                        const listItem = document.createElement('li');
                        const userLink = document.createElement('a');
                        userLink.href = '#';
                        userLink.textContent = user.name;
                        userLink.addEventListener('click', () => showUserDetails(user));
                        listItem.appendChild(userLink);
                        userList.appendChild(listItem);
                    });
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        });
    }
});
