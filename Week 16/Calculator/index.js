// const aircraft = [['Boeing-747', 10000], ['Airbus-380', 12000], ['Airbus-A320Neo', 5000]];
// const train = [['Sapsan', 2500], ['Lastochka', 1500], ['RZD', 1000]]
const form = document.querySelector('.form');
// const arrTransport = form.querySelector('.arr__transport');
// const arrType = form.querySelector('.arr__type');
// const category = document.querySelector('.category');
const arrYear = document.querySelector('.arr__year');
const arrCar = document.querySelector('.arr__car');
const arrCategory = document.querySelector('.category');
let count = document.getElementById("count");

let summa = 0;

arrCar.addEventListener('click', ()=> {
    arrYear.disabled = false;
});

function sum() {
    let price = 0;
    price += parseInt(arrYear.options[arrYear.selectedIndex].value);
    price += parseInt(arrCar.options[arrCar.selectedIndex].value);

    //price += (arrCategory.checked == true) ? parseInt(arrCategory.value) : 0;
    if (count.value === '') {
        price = price;
    } else {
        price = parseInt(count.value) * price;
    }
    price *= 1000;
    console.log(price);
}

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