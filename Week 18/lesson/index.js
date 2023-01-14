document.addEventListener('DOMContentLoaded', function(event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById('name').value = name;
    }
});

function sendMessage(name, comment) {
    document.getElementById("comment__storage").innerHTML += `<span class="name">${name}:</span><span>${comment}</span><br>`;
}

function checkMessage() {
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', name);
    }

    sendMessage(name, comment);
}