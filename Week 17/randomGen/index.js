let buttonGenerate = document.querySelector('#generate');
let buttonReset = document.querySelector('#reset');
let content = document.querySelector('#content');

//random range
let min = -10;
let max = 10;

buttonGenerate.addEventListener('click', ()=>{
    random = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i = 0; i < 10; i++) {
        content.innerHTML += Math.floor(Math.random() * (max - min + 1)) + min + `\n`;
    }
});

buttonReset.addEventListener('click', ()=>{
    content.innerHTML = '';
});