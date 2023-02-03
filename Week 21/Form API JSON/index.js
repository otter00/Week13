let nameCat = document.getElementById('кличка');
let age = document.getElementById('возраст');
let owner = document.getElementById('владелец');
let email = document.getElementById('почта');
let phone = document.getElementById('телефон');
const sex = document.querySelectorAll('input[name="sex"]');
let meals = document.querySelectorAll('.label');

const form = document.querySelector('#formElem');
let button = document.getElementById('button');

//create class Cat
class Cat {
    constructor(name, age, owner, email, phone, breed, sex, meals) {
        this.name = name;
        this.age = age;
        this.owner = owner;
        this.email = email;
        this.phone = phone;
        this.breed = breed;
        this.sex = sex;
        this.meals = meals;
    }
}


//class entity creates when button is clicked
//clear the array for new values when button clicked
button.addEventListener('click', ()=> {
    createCat();
    arrayMeal = [];
});

//check which gender we chose and return it
function checkSex() {
    for (const s of sex) {
        if (s.checked) {
            return(s.value)
        }
    }
}

//check which breed we chose and return it
function breedFunction(sel) {
    return(sel.options[sel.selectedIndex].text);
}


//create entity of Cat class
function createCat() {
    //declare class fields (some fields could be the results of the functioins)
    let cat = new Cat(nameCat, age, owner, email, phone, breedFunction(this.breed), checkSex(), checkMeal());

    //display it into console
    console.log(`Имя: ${cat.name.value}` + `\n` 
    + `Возраст: ${cat.age.value}` + `\n` 
    + `Владелец: ${cat.owner.value}` + `\n` 
    + `Почта владельца: ${cat.email.value}` + `\n`
    + `Телефон владельца: ${cat.phone.value}` + `\n`
    + `Порода: ${cat.breed}` + `\n`
    + `Пол питомца: ${cat.sex}` + `\n`
    + `Питание: ${cat.meals}` + `\n`);
}


//catch each elem of checkbox
let elems = document.querySelectorAll('.meal');
let arrayMeal = [];

//check whether the name of checked box is equal to label text
function checkMeal() {
    for (const el of elems) {
        for (const me of meals) {
            if ((el.checked == true) && (el.name == me.textContent)) {
                //console.log(me.textContent);
                arrayMeal.push(me.textContent); //if equal, push into array
            }
            //else { console.log('not checked'); }
            }
    }

    return(arrayMeal);
}


function createObj() {

let ownerObj = {
    cat_name: `${nameCat.value}`,
    cat_age: `${age.value}`,
    owner_name: `${owner.value}`,
    owner_mail: `${email.value}`,
    owner_phone: `${phone.value}`,
    cat_breed: `${breedFunction(this.breed)}`,
    cat_meal: `${checkMeal()}`,
    cat_sex: `${checkSex()}`
};

//console.log(ownerObj);
return ownerObj;
}

button.addEventListener('click', async () => {

    fetch("https://httpbin.org/post",
                {
                    method: 'POST',
                    body: JSON.stringify(createObj())
                })
                .then(response => response.json())
                .then(user => {
                    console.log(user);
                })
                .catch(error => console.log(error));
});