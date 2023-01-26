// fetch("https://api.github.com/users/otter00")
// .then(response => response.json())
// .then(user => console.log(user.name))
// .catch(error => console.log(error));

var button = document.getElementById('button');

document.addEventListener('DOMContentLoaded', function(event) {
    fetch("https://api.github.com/users/otter00")
    .then(response => response.json())
    .then(user => {
        document.getElementById('name').innerText = user.name;
        document.getElementById('photo').src
        = user.avatar_url;
    })
.catch(error => console.log(error));
});

button.addEventListener('click', ()=>{
    let num = 0;
    document.getElementById('projects').innerText = '';

    fetch("https://api.github.com/users/otter00/repos")
    .then(response => response.json())
    .then(user => {
        for(let r = 0; r < user.length; r++){
            //console.log(user[r]);
            num++;
            console.log(user[r].name);
            //console.log(Object.keys(user[r]).name)
            document.getElementById('projects').innerText += `Project №${num}: ${user[r].name}` + `\n`;
        }
    })
.catch(error => console.log(error));
});