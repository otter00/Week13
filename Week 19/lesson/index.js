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

//objects assigning
// const obj1 = { a: 'a', b: 'b'};
// console.log(obj1);
// const obj2 = { c: 'c', b: 'v'};
// console.log(obj2);
// Object.assign(obj1, obj2);
//console.log(obj1);

// const obj1= { a: { a: 3 } }
// console.log(obj1);
// const obj2= { a: { b: 1 } }
// console.log(obj2);
// Object.assign(obj1, obj2);
// console.log(obj1);

// const obj1= { a: { a: { c: 3 } } }
// const copyObj1 = { ... obj1}; //spread
// console.log(obj1);
// console.log(copyObj1);
// console.log(copyObj1 == obj1); //false, links are not equal
// console.log(copyObj1.a == obj1.a); //true, 'cause obj a is equal to both (link to the same internal object)
// const obj2= { a: { b: 1 } }
// console.log(obj2);
// Object.assign(obj1, obj2);
// console.log(obj1);

// const aircraft = {
//     type: 'boeing',
//     number: 747,
//     altitude: 12000,
//     //distance: 12000,
// };
// const copyType = aircraft.type; //simple copying
// const {type, number, altitude, distance = 15000} = aircraft;
// console.log(distance); //just a variable now
// console.log(aircraft);

// const func = () => {
//     console.log(type);
// }
// //func.width = 200;
// //console.log(func); functions is an object
// const array = [1, 4, 8]; //index 0 1 2
// array[5] = 6;
// console.log(array);

// const user= { name: 'Tirion', email: 'support@hexlet.io', age: 44 };
// const { name, ...rest }= user;
// const { ...rest2 }= user;
// console.log(rest);
// console.log(rest2);
// => { email: 'support@hexlet.io', age: 44 }