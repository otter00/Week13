/*      AUTHORIZATION CHANGE        */

function validateForm(applicantForm) {

    // read each field value by id
    let name = document.getElementById("login__input").value; 
    let pass = document.getElementById("password__input").value; 
    let email = document.getElementById("email__input").value; 
    let phone = document.getElementById("phone__input").value;
    let gender = document.getElementById('gender').checked;

    if (name == "") {
        alert("Name field is empty!");
    } else if (pass == "") {
        alert("Password field is empty!");
    } else if (email == "") {
        alert("Email field is empty!");
    } else if (phone == "") {
        alert("Phone number field is empty!"); }
    // } else if (gender == false) {
    //     alert("Choose your gender");
    // }
    else {
        alert("You successfully authorized");
    }
}

function serializeForm(formNode) { // formNode is a specific form DOM-element
    const { elements } = formNode // elements is a method contains control units and fields
    const data = Array.from(elements) // convert elements into array
        .filter((item) => !!item.name) // filter whether elem has empty name
        .map((element) => { // map collects an array with elements have name and value
        const { name, value } = element

        return { name, value }
    })
    console.log(data)
}

function handleFormSubmit(event) {
    event.preventDefault() // here we ask the form to prevent autosending and refreshing
    serializeForm(applicantForm)
}

const applicantForm = document.getElementById('login__form') // our form
applicantForm.addEventListener('submit', handleFormSubmit) // check when we click submit button to send data and refresh page