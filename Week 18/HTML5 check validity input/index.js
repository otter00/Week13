let nameCat = document.getElementById('кличка');
let age = document.getElementById('возраст');
let owner = document.getElementById('владелец');
let email = document.getElementById('почта');
let phone = document.getElementById('телефон');

const breed = document.querySelector('#breed');
const sex = document.querySelectorAll('input[name="sex"]');

let button = document.getElementById('button');

class Cat {
    constructor(name, age, owner, email, phone, breed, sex) {
        this.name = name;
        this.age = age;
        this.owner = owner;
        this.email = email;
        this.phone = phone;
        this.breed = breed;
        this.sex = sex;
    }
}

button.addEventListener('click', ()=> {
    let cat = new Cat(nameCat, age, owner, email, phone, breed, checkSex());

    console.log(`Имя: ${cat.name.value}` + `\n` 
    + `Возраст: ${cat.age.value}` + `\n` 
    + `Владелец: ${cat.owner.value}` + `\n` 
    + `Почта владельца: ${cat.email.value}` + `\n`
    + `Телефон владельца: ${cat.phone.value}` + `\n`
    + `Порода: ${cat.breed.selectedIndex}` + `\n`
    + `Пол питомца: ${cat.sex}` + `\n`);
});

function checkSex() {
    for (const s of sex) {
        if (s.checked) {
            return(s.value)
        }
    }
}


//let cat = new Cat('Барсик', 10, 'Анна', 'rezina@mail.ru', '89009990011', 'domestic', 'male');
// console.log(cat.name);
// console.log(cat.age); 
// console.log(cat.owner); 
// console.log(cat.email); 
// console.log(cat.phone); 
// console.log(cat.breed); 
// console.log(cat.sex); 