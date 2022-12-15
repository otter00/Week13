/*      AUTHORIZATION CHANGE        */

function validateForm(applicantForm) {

    var name = document.getElementById("login__input").value; // read name field value by id
    //var nameField = form.username;
    //var passLine = form.pass;

    if (name != "anastasia") {
        alert("Incorrect");
    } else {
        alert("You successfully authorized");
        //window.location.href = 'htmls/airportOVB.html';
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