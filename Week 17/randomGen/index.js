let buttonGenerate = document.querySelector('#generate');
let buttonReset = document.querySelector('#reset');
let content = document.querySelector('#content');

let array = [];
let elemDiv = document.createElement('div');

//random range
let min = -10;
let max = 10;
let result;

buttonGenerate.addEventListener('click', ()=>{
    //random = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let i = 0; i < 10; i++) {
        //push random nubers into array
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
        content.innerHTML = array.join(" "); //set the array into div content block
    }

    console.log(array);
    //console.log(typeof(array)); //object

    elemDiv.style.cssText = 'padding:1%;width:20vw;min-height:50px;margin-left:1%;border:1px solid black;border-radius:7px;';
    document.body.appendChild(elemDiv);

    array.sort((a, b) => {
        return a - b;
    })
    console.log(array); //sorted array
    //console.log(array[0]); //min element
    //console.log(array.pop()); //max element

    let result = array.reduce((sum, current) => sum + current, 0);
    console.log(result); //sum of elements

    let mult = array.reduce((acc, rec) => acc * rec);
    console.log(mult); //multiply all the elements

    let sum = array.reduce((a, b) => a + b, 0);
    let avg = (sum / array.length) || 0;
    console.log(avg); //average (all elems / 10)

    elemDiv.innerHTML = `sum of elems is ${result}` + 
    "<br/>" + `min el is ${array[0]}` +
    "<br/>" + `max el is ${array.pop()}` +
    "<br/>" + `multiplication is ${mult}` +
    "<br/>" + `average is ${avg}`;


    array = []; //clear array for the next secuence of numbers
});

buttonReset.addEventListener('click', ()=>{
    content.innerHTML = '';
    elemDiv.innerHTML = '';
});