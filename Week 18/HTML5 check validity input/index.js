let nameCat = document.getElementById('кличка');
let age = document.getElementById('возраст');
let owner = document.getElementById('владелец');
let email = document.getElementById('почта');
let phone = document.getElementById('телефон');
const sex = document.querySelectorAll('input[name="sex"]');
let meals = document.querySelectorAll('.label');
let button = document.getElementById('button');

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

button.addEventListener('click', ()=> {
    createCat();
});

function checkSex() {
    for (const s of sex) {
        if (s.checked) {
            return(s.value)
        }
    }
}

function breedFunction(sel) {
    return(sel.options[sel.selectedIndex].text);
}

function createCat() {
    let cat = new Cat(nameCat, age, owner, email, phone, breedFunction(this.breed), checkSex(), checkMeal());

    console.log(`Имя: ${cat.name.value}` + `\n` 
    + `Возраст: ${cat.age.value}` + `\n` 
    + `Владелец: ${cat.owner.value}` + `\n` 
    + `Почта владельца: ${cat.email.value}` + `\n`
    + `Телефон владельца: ${cat.phone.value}` + `\n`
    + `Порода: ${cat.breed}` + `\n`
    + `Пол питомца: ${cat.sex}` + `\n`
    + `Питание: ${cat.meals}` + `\n`);
}

let elems = document.querySelectorAll('.meal');
let arrayMeal = [];
//let catMeal = '';
button.addEventListener('click', ()=>{
    // for (const el of elems) {
    //     if(el.checked == true) {
    //         console.log(el.name);
    //     }
    //     else { console.log('not checked'); }
    // }
    checkMeal();
    arrayMeal = [];
})

function checkMeal() {
    for (const el of elems) {
        for (const me of meals) {
            if ((el.checked == true) && (el.name == me.textContent)) {
                //console.log(me.textContent);
                arrayMeal.push(me.textContent);
            }
            //else { console.log('not checked'); }
            }
    }

    // for(let i = 0; i < arrayMeal.length; i++) {
    //     // catMeal += `${arrayMeal[i]}` + ';';
    //     console.log(arrayMeal[i]);
    // }

    return(arrayMeal);
    //arrayMeal = [];
    //return catMeal;
}

//console.log(meals);
//console.dir(meals);
//for (const it of meals) {
    //console.log(it.textContent);
    // if(it.checked) {
    //     console.log(it.name);
    // }
//}

//let cat = new Cat('Барсик', 10, 'Анна', 'rezina@mail.ru', '89009990011', 'domestic', 'male');
// console.log(cat.name);
// console.log(cat.age); 
// console.log(cat.owner); 
// console.log(cat.email); 
// console.log(cat.phone); 
// console.log(cat.breed); 
// console.log(cat.sex); 