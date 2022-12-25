const form = document.querySelector('.form');
const arrClass = document.querySelector('.arr__class');
const arrPlane = document.querySelector('.arr__plane');
const button = document.querySelector('.result');
const inputPeople = document.querySelector('#count');
const category = document.querySelectorAll('input[name="category"]')
const lunch = document.querySelectorAll('input[name="lunch"]');

let lunchPrice = 0;

// const cbn = document.querySelector('.none');
// const cbl =  document.querySelector('.lunch');
// const cbs = document.querySelector('.snack');

// cbn.addEventListener('mousedown', ()=> {
//     cbl.disabled = true;
//     cbs.disabled = true;
// });


const gr = document.getElementsByName('lunch');
window.onclick = function() {
if (gr[2].checked) {
    gr[0].disabled = true;
    gr[1].disabled = true;
} else {
    gr[0].disabled = false;
    gr[1].disabled = false;
}
}

arrPlane.addEventListener('click', ()=> {
    arrClass.disabled = false;
});

inputPeople.addEventListener('keydown', ()=> {
    button.disabled = false;
});


function sum() {
    let price = 0;
    price += parseInt(arrClass.options[arrClass.selectedIndex].value);
    price += parseInt(arrPlane.options[arrPlane.selectedIndex].value);

    for (const c of category) {
        if (c.checked) {
            price += parseInt(c.value);
            //console.log(c.value)
        }
    }

    // ONE MORE GREAT WAY
    // const selected = document.querySelector('input[name="category"]:checked').value;
    // console.log(selected)

    for (const l of lunch) {
        if (l.checked) {
            price += parseInt(l.value);
            //console.log(l.value);
        }
    }

    if (inputPeople.value === '') {
        price = price;
    } else {
        price = parseInt(inputPeople.value) * price;
    }
    price *= 1.3;
    //console.log(price);

    document.getElementById("summarize").innerHTML = price;
}



//          EXAMPLE CODE        //

// const aircraft = [['Boeing-747', 10000], ['Airbus-380', 12000], ['Airbus-A320Neo', 5000]];
// const train = [['Sapsan', 2500], ['Lastochka', 1500], ['RZD', 1000]]
//const form = document.querySelector('.form');
// const arrTransport = form.querySelector('.arr__transport');
// const arrType = form.querySelector('.arr__type');
// const category = document.querySelector('.category');
// let priceType = 0;
// let priceCategory = 0;

// arrTransport.addEventListener('click', () => {
//     arrType.disabled = false;
//     let a = '';
//     (arrTransport.value == 'train') //Default option selected

//     if (arrTransport.value == 'train') { //Condition
//         train.forEach((element) => { //Look through the elems and put it into options
//         a += `<option value="${element[1]}">${element[0]}</option>`;
//         })
//         arrType.innerHTML = a; //Put values into (train)select array
//     } else if (arrTransport.value == 'aircraft') { //Condition
//         aircraft.forEach((element) => { //Look through the elems and put it into options
//         a += `<option value="${element[1]}">${element[0]}</option>`;
//         })
//         arrType.innerHTML = a; //Put values into (aircraft)select array
//     }

//     console.log(arrType.value); 

//     // for(let i = 0; i <= aircraft.length; i++) {
//     //     console.log(aircraft[i][1]);
//     // }

// });

// arrType.addEventListener('click', () => {
//     priceType += parseInt(arrType.options[arrType.selectedIndex].value);    
    
//     console.log(priceType);
//     priceType = 0;
// });

// category.addEventListener('click', () => {
//     priceCategory += (category.checked == true) ? parseInt(category.value) : 0;
    
//     console.log(priceCategory);
// });

// function sum() {
//     let res = 0;
//     res = priceType + Number(arrType.value);
//     console.log(res);
// }