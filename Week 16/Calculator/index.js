const aircraft = [['Boeing-747', 10000], ['Airbus-380', 12000], ['Airbus-A320Neo', 5000]];
const train = [['Sapsan', 2500], ['Lastochka', 1500], ['RZD', 1000]]
const form = document.querySelector('.form');
const arrTransport = form.querySelector('.arr__transport');
const arrType = form.querySelector('.arr__type');

arrTransport.addEventListener('click', () => {
    arrType.disabled = false;
    let a = '';
    (arrTransport.value == 'train') //Default option selected

    if (arrTransport.value == 'train') { //Condition
        train.forEach((element) => { //Look through the elems and put it into options
        a += `<option value="${element[1]}">${element[0]}</option>`;
        })
        arrType.innerHTML = a; //Put values into (train)select array
    } else if (arrTransport.value == 'aircraft') { //Condition
        aircraft.forEach((element) => { //Look through the elems and put it into options
        a += `<option value="${element[1]}">${element[0]}</option>`;
        })
        arrType.innerHTML = a; //Put values into (aircraft)select array
    }
    // console.log(arrType.value);
});