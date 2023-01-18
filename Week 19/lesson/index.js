//      FIRST       //

// function bike() {
//     console.log(this.name);
// }

// let name = 'ninja';
// let obj1 = { name: 'pomidor', bike: bike }
// let obj2 = { name: 'site', bike: bike }

// bike() //nothing
// obj1.bike() //pomidor
// obj2.bike() //site



//      SECOND      //

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const member = new Person('John');
// console.log(typeof member);



//      THIRD       //

// const person = {
//     name: 'Valera',
//     age: 23
// }

// let city = person.city;
// city = 'Amsterdam';

// console.log(person); //name, age
// console.log(person.city); //undefined
// console.log(city); //amsterdam