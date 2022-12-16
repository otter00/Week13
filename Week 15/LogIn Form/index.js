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

function check() {

        // read each field value by id
        let name = document.getElementById("login__input"); 
        let pass = document.getElementById("password__input"); 
        let email = document.getElementById("email__input"); 
        let phone = document.getElementById("phone__input");
    
        let genderM = document.getElementById('genderM');
        let genderW = document.getElementById('genderW');

        let gender1 = false;
        let gender2 = false;

        if (genderM.checked) {
            gender1 = true; 
            gender2 = false;
        }

        if (genderW.checked) {
            gender2 = true; 
            gender1 = false;
        }
    
        document.getElementById('errorMsg').innerHTML = "";
    
        if (name.value == "") {
            document.getElementById('errorMsg').innerHTML += "Name field is empty";
            //alert("Name field is empty!");
        } else if (pass.value == "") {
            document.getElementById('errorMsg').innerHTML += "Password field is empty";
            //alert("Password field is empty!");
        } else if (email.value == "") {
            document.getElementById('errorMsg').innerHTML += "Email field is empty";
            //alert("Email field is empty!");
        } else if (phone.value == "") {
            document.getElementById('errorMsg').innerHTML += "Phone field is empty";
            //alert("Phone number field is empty!");
        } else if ((gender1 == false) && (gender2 == false)) {
            document.getElementById('errorMsg').innerHTML += "Gender field is empty";
        }
        else {
            alert("You successfully authorized");
        }
    }