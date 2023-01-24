// fetch("https://api.github.com/users/otter00")
// .then(response => response.json())
// .then(user => console.log(user.name))
// .catch(error => console.log(error));

document.addEventListener('DOMContentLoaded', function(event) {
    fetch("https://api.github.com/users/otter00")
    .then(response => response.json())
    .then(user => {
        document.getElementById('avatar').src
        = user.avatar_url;
        document.getElementById('name').innerText = user.name;
    })
.catch(error => console.log(error));
});