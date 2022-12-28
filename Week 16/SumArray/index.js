// const parser = (str) => {
//     const arr = [];
//     const parts = str.split('-');
//     // На всякий случай делаем проверку, чтобы from было меньше to
//     const from = Math.min(parseInt(parts[0]), parseInt(parts[1]));
//     const to = Math.max(parseInt(parts[0]), parseInt(parts[1]));
//     for(let i = from; i <= to; i++){
//         arr.push(i);
//     }    
//     return arr;
//  } 
//  // Проверяем
//  console.log(parser('10-22'));


const jsAdd = document.querySelector('.js-add');
const addBtn = document.querySelector('.add');
const resBtn = document.querySelector('.result');
let Array = [];
let sortedArray = [];

//if we have event CLICK then enable function
//pushes value into array
addBtn.addEventListener('click', () => {
    if(!jsAdd.value == "") {
        //if value exists
        Array.push(Number(jsAdd.value));
    } else {
        console.log('not a number');
    }
    jsAdd.value = '';

    //push array into console
    console.log(Array);
});

resBtn.addEventListener('click', () => {
    for(let i = 0; i < Array.length; i++)
    {
        sortedArray.push(Array[i]);
    }


    //sort the array
    //idk why but ordinary 'sort' doesn't work with values after 9
    sortedArray.sort((a, b) => {
        return a - b;
    });

    //sortedArray.sort();

    //console.log(sortedArray); //show sorted array
    alert(`Sorted array: [ ${sortedArray} ] has ${sortedArray.length} elements`);
    //console.log(sortedArray.length); //count elems and show
    //alert(`Has ${sortedArray.length} elements`);
    sortedArray = [];
    Array = [];
});