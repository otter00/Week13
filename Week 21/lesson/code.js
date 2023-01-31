function onSearch() {
    let gitUser = document.getElementById("user__search").value;

    fetch("https://api.github.com/users/" + gitUser)
    .then(response => response.json())
    .then(user => {
        document.getElementById("avatar").src = user.avatar_url;
        document.getElementById("user__name").innerText = user.name;
    })
    .catch(error => console.log(error));
}