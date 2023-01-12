/*      AUTHORIZATION CHANGE        */

// function validateForm(applicantForm) {

//     // read each field value by id
//     let name = document.getElementById("login__input").value; 
//     let pass = document.getElementById("password__input").value; 
//     let email = document.getElementById("email__input").value; 
//     let phone = document.getElementById("phone__input").value;

//     let genderM = document.querySelectorAll('input[name="genderM"]').checked;
//     let genderW = document.querySelectorAll('input[name="genderW"]').checked;

//     document.getElementById('errorMsg').innerHTML = "";

//     if (name == "") {
//         document.getElementById('errorMsg').innerHTML += "Email field is empty";
//         //alert("Name field is empty!");
//     } else if (pass == "") {
//         document.getElementById('errorMsg').innerHTML += "Email field is empty";
//         //alert("Password field is empty!");
//     } else if (email == "") {
//         document.getElementById('errorMsg').innerHTML += "Email field is empty";
//         //alert("Email field is empty!");
//     } else if (phone == "") {
//         document.getElementById('errorMsg').innerHTML += "Email field is empty";
//         //alert("Phone number field is empty!");
//     } else {
//         //alert("You successfully authorized");
//     }
// }

// function serializeForm(formNode) { // formNode is a specific form DOM-element
//     const { elements } = formNode // elements is a method contains control units and fields
//     const data = Array.from(elements) // convert elements into array
//         .filter((item) => !!item.name) // filter whether elem has empty name
//         .map((element) => { // map collects an array with elements have name and value
//         const { name, value } = element

//         return { name, value }
//     })
//     console.log(data)
// }

// function handleFormSubmit(event) {
//     event.preventDefault() // here we ask the form to prevent autosending and refreshing
//     serializeForm(applicantForm)
// }

// const applicantForm = document.getElementById('login__form') // our form
// applicantForm.addEventListener('submit', handleFormSubmit) // check when we click submit button to send data and refresh page

let button = document.querySelector(".login-form__btn");
let form = document.querySelector('form');
let errors = [];

// button.addEventListener('click', ()=> {
//         // read each field value by id
//         let name = document.getElementById("login__input"); 
//         let pass = document.getElementById("password__input"); 
//         let email = document.getElementById("email__input"); 
//         let phone = document.getElementById("phone__input");
    
//         let genderM = document.getElementById('genderM');
//         let genderW = document.getElementById('genderW');

//         let gender1 = false;
//         let gender2 = false;

//         if (genderM.checked) {
//             gender1 = true; 
//             gender2 = false;
//         }

//         if (genderW.checked) {
//             gender2 = true; 
//             gender1 = false;
//         }
    
//         document.getElementById('errorMsg').innerHTML = "";
    
//         if (name.value == "") {
//             document.getElementById('errorMsg').innerHTML += "Name field is empty";
//             //alert("Name field is empty!");
//         } else if (pass.value == "") {
//             document.getElementById('errorMsg').innerHTML += "Password field is empty";
//             //alert("Password field is empty!");
//         } else if (email.value == "") {
//             document.getElementById('errorMsg').innerHTML += "Email field is empty";
//             //alert("Email field is empty!");
//         } else if (phone.value == "") {
//             document.getElementById('errorMsg').innerHTML += "Phone field is empty";
//             //alert("Phone number field is empty!");
//         } else if ((gender1 == false) && (gender2 == false)) {
//             document.getElementById('errorMsg').innerHTML += "Gender field is empty";
//         }
//         else {
//              alert(`Welcome, ${name.value}`);
//         }
// });

    
        let genderM = document.getElementById('genderM');
        let genderW = document.getElementById('genderW');

        let gender1 = false;
        let gender2 = false;


//Проверка для каждого поля (поля получаем по одному в функции ниже в цикле)
function checkValidity(input) {
    let validity = input.validity;
    let inpName = input.name;

    if (input.value == "") {
        errors.push(`Поле ${inpName} не заполнено`); }

    if (validity.patternMismatch) 
		{ errors.push(`Неверный формат заполнения ${inpName}`); }
    
		if (validity.tooLong) 
		{ let maxlength = input.maxLength;
			errors.push(`Слишком длинное значение ${inpName}! Максимальная длина:  ` + maxlength + `<br>`); }
    
		if (validity.tooShort) 
		{ let minlength = input.minLength;
			errors.push(`Слишком короткое значение ${inpName}! Минимальная длина: ` + minlength + `<br>`); }

        if (validity = false) {
            alert('Welcome!');
        }
}

button.addEventListener('click', ()=>{
//Проверка для всех полей
	//получаем все инпуты
    let inputs = document.querySelectorAll("input");

		//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        //console.log(input);
        checkValidity(input);
    }

    if (genderM.checked) {
        gender1 = true; 
        gender2 = false;
    }
    if (genderW.checked) {
        gender2 = true; 
        gender1 = false;
    }
    if ((gender1 == false) && (gender2 == false)) {
        errors.push("Gender field is empty");
    }

	//выводим ошибки в div 
    let errorDiv = document.querySelector('.errors__info');
    errorDiv.innerHTML = errors.join('\n');

    if (errors.length == 0) {
        alert(`Welcome, ${document.getElementById("login__input").value}`);
    }

    errors = []; //чистим массив
});