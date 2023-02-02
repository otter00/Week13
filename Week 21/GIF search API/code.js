function onSearch() {
    let gif = document.getElementById("gif__search").value;

    fetch("api.giphy.com/v1/gifs/search/" + gif)
    .then(response => response.json())
    .then(user => {
        document.getElementById("gif__pic").src = user.avatar_url;
    })
    .catch(error => console.log(error));
}