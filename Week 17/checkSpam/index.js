let addButton = document.querySelector('#add__comment');
let field = document.querySelector('#comment__field');
let commentContent = document.querySelector('#content');

addButton.addEventListener('click', ()=>{
    commentContent.innerHTML += `${field.value}\n`;
});

addButton.addEventListener('click', ()=>{
    field.value = "";
});