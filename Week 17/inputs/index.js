let mfield = document.querySelector('.mfield');
// let fname = document.querySelector('#fname');
// let sname = document.querySelector('#sname');
// let lname = document.querySelector('#lname');
let button = document.querySelector('#splitted');

let inp = document.querySelectorAll('.inp');
console.log(inp);
//console.log(inp.length);

//let trimmed;
let letters = /^[a-zA-Za-яА-ЯёЁ]+$/.test();
let msplitted;

button.addEventListener('click', ()=>{
    console.log(mfield.value); //check whether the field is ok

    console.log(typeof(mfield.value)); //string

    letters = mfield.value.replace(/[0-9]/g, '');
    console.log(letters);

    msplitted = 
        letters.split(" ").filter(
        el=>(el !== "")).map(
            //toLowerCase the entire word
            (word, index) => word.toLowerCase()).map(
        //split the string into array
        //filter the array
        //toUpperCase the first letter
        (word, index) => word[0].toUpperCase() + word.slice(1));
    console.log(msplitted);
        
    //trimmed = msplitted.filter(el=>(el !== "")); //filter the array
    //console.log(trimmed);

    for (let i=0; i <= inp.length; i++) {
        inp[i].setAttribute('value', `${msplitted[i]}`); //set values into their places
    }

    // for(let i=0; i <= msplitted.length; i++) {
    //     fname.setAttribute('value', `${msplitted[0]}`);
    //     sname.setAttribute('value', `${msplitted[1]}`);
    //     lname.setAttribute('value', `${msplitted[2]}`);
        
    //     //document.querySelector('.fname').innerHTML = msplitted[0];
    //     //document.querySelector('.sname').innerHTML = msplitted[1];
    //     //document.querySelector('.lname').innerHTML = msplitted[2];
    // }
});

button.addEventListener('click', ()=>{
    mfield.value = "";
});