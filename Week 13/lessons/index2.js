// let a = 10;
// let b;

// a = b = 15;

// alert(b);

// a += 5; //the same as a = a + 5;

// let message = 'Hello ';
// message += '!';
// alert(message); //strings addition by +

//When we have 2 strings, it adds like "2"+"2" = "22"
//When we have at least 1 string among values, it'll add as strings anyway
//Only having values will work as "2"+"2" = "4"

//convert sth into number:
// let c = '2';
// let d = '3';
// alert(Number(c)+Number(b));
// //or
// alert(+a + +b);

//alert(String(5));

//to boolean
// alert(Boolean(0)); //false
// alert(Boolean('0')); //true, cause the string isn't empty :)

function showMessage() {
    alert('Hello!');
}

function sum(a, b) {
    return a+b;
}
//alert (sum(5,6));

function y(x) {
    return x**2; //as pow2
}

let result = y(2); //as 2*2 or 2pow2 (everything is = 4);
//alert(result);

function showMessageFromUser(name = 'empty', message = 'empty too') {
    //alert(name + ': ' + message);
    //alert(`${name}: ${message}`);
    return `${name}: ${message}`;
}
//alert(showMessageFromUser('Anastasia', 'i like it'));
//showMessageFromUser();

let m = showMessageFromUser();
alert(m); 
//or alert(showMessageFromUser());

//it is better not to put alerts into function but write them out of the sunction's body