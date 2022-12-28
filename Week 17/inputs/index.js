let mfield = document.querySelector('.mfield');
// let fname = document.querySelector('.fname');
// let sname = document.querySelector('.sname');
// let lname = document.querySelector('.lname');
let button = document.querySelector('#splitted');

let trimmed;
let msplitted;

button.addEventListener('click', ()=>{
    msplitted = mfield.value.split(" ");
    console.log(msplitted);

    for(let i=0; i <= msplitted.length; i++) {
        //document.querySelector('#fname').innerHTML = msplitted[0];
        //document.querySelector('#sname').innerHTML = msplitted[1];
        document.querySelector('.fname').innerHTML = msplitted[0];
        document.querySelector('.sname').innerHTML = msplitted[1];
        document.querySelector('.lname').innerHTML = msplitted[2];
    }
});