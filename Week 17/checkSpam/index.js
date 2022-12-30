let addButton = document.querySelector('#add__comment');
let field = document.querySelector('#comment__field');
let commentContent = document.querySelector('#content');

function checkSpam() {
    //field.value.replace(/viagra/i, '***').replace(/xxx/i, '***').replace(/innocent rabbit/i, '***');
    commentContent.innerHTML += `${field.value.replace(/viagra/i, '***').replace(/xxx/i, '***').replace(/innocent rabbit/i, '***')}\n`
    //console.log(field.value.replace(/viagra/i, '***').replace(/xxx/i, '***').replace(/innocent rabbit/i, '***'));
}

// addButton.addEventListener('click', ()=>{
//     //console.log(field.value.replace(/viagra/i, '***').replace(/xxx/i, '***').replace(/innocent rabbit/i, '***'));
//     //commentContent.innerHTML += `${field.value.replace(/viagra/i, '***').replace(/xxx/i, '***').replace(/innocent rabbit/i, '***')}\n`;
//     //commentContent.innerHTML += `${field.value}\n`
// });

addButton.addEventListener('click', ()=>{
    field.value = "";
});