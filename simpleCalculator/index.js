/*  СПОСОБ ПЕРВЫЙ - ПРОСТОЙ */


// function add() {
//     let a1 = prompt('К какому числу хотите прибавить?', '');
//     let a2 =  prompt('Какое число хотите прибавить?', '');
//     let a3 = +a1 + +a2;

//     alert(a3);
// }

// function sub() {
//     let b1 = prompt('Из какого числа хотите вычесть?', '');
//     let b2 =  prompt('Какое число хотите вычесть?', '');
//     let b3 = +b1 - +b2;

//     alert(b3);
// }

// function mult() {
//     let c1 = prompt('какое число хотите умножить?', '');
//     let c2 =  prompt('На что хотите умножить?', '');
//     let c3 = +c1 * +c2;

//     alert(c3);
// }

// function div() {
//     let d1 = prompt('Какое число - делимое?', '');
//     let d2 =  prompt('Какое число - делитель?', '');
//     let d3 = +d1 / +d2;

//     alert(d3);
// }


/*  СПОСОБ ВТОРОЙ - СЛОЖНЕЕ */

let op;

function calc() {
    let result;

    let first = Number(document.getElementById("first_value").value);
    let second = Number(document.getElementById("second_value").value);

    switch (op) {
        case '+':
            result = first + second;
            alert(result);
            break;
        case '-':
            result = first - second;
            alert(result);
            break;
        case '*':
            result = first * second;
            alert(result);
            break;
        case '/':
            result = first / second;
            alert(result);
            break;
        }

    //document.getElementById("result").innerHTML = result;
}