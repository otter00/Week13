let addButton = document.querySelector('#add__comment');
let field = document.querySelector('#comment__field');
let commentContent = document.querySelector('#content');

function checkSpam() {
    let elemDiv = document.createElement('div');
    elemDiv.style.cssText = 'width:20vw;min-height:50px;margin-left:1%;border:1px solid black;border-radius:7px;';
    document.body.appendChild(elemDiv);

    elemDiv.innerHTML += `${field.value.replace(/viagra/i, '***').replace(/xxx/i, '***').replace(/innocent rabbit/i, '***')}\n`
    
    //field.value.replace(/viagra/i, '***').replace(/xxx/i, '***').replace(/innocent rabbit/i, '***');
    //commentContent.innerHTML += `${field.value.replace(/viagra/i, '***').replace(/xxx/i, '***').replace(/innocent rabbit/i, '***')}\n`
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