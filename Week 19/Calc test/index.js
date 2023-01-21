let buttonRes = document.querySelector('.res');
let first = document.getElementById("first_value");
let second = document.getElementById("second_value");

let op;

class Calculator {
    static Add(value1, value2) {
        return(Number(value1.value) + Number(value2.value));
    }
    static Mult(value1, value2) {
        return(Number(value1.value) * Number(value2.value));
    }
    static Subst(value1, value2) {
        return((Number(value1.value) - Number(value2.value)).toFixed(2));
    } 
    static Div(value1, value2) {
        return((Number(value1.value) / Number(value2.value)).toFixed(2));
    }
}

function setResult(result) {
    document.getElementById("result").innerHTML = result;
}

buttonRes.addEventListener('click', ()=> {
    let result;

    switch (op) {
        case '+':
            result = Calculator.Add(first, second);
            setResult(result);
            break;
        case '*':
            result = Calculator.Mult(first, second);
            setResult(result);
            break;
        case '-':
            result = Calculator.Subst(first, second);
            setResult(result);
            break;
        case '/':
            result = Calculator.Div(first, second);
            setResult(result);
            break;
    }
})