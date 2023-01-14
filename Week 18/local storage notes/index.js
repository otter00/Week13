//search for comment input field
const comment = document.querySelector('.form__text');
//search for comment save field
const listComments = document.querySelector('.list__comments');


//function that saves the note into local storage
//1st param - comment (note)
//2nd param  - datetime, unique key
const saveComment = (dateKey, commItem) => {
    localStorage.setItem(`${dateKey}`, `${commItem}`);
}


//function that creates card with notes
//html div (visible comment storage) dynamically created
//1st param - comment (note)
//2nd param - datetime, when the note has been created
const createCard = (comm, dateKey) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const span = document.createElement('span');

    span.className = "span";
    span.textContent = dateKey;

    p.className = "p";
    p.textContent = comm;

    div.className = "text";
    div.append(span);
    div.append(p);

    return div;
}


//displays the note upon the sheet
//1st param - container for notes
//2nd param - elem to display
const addComment = (list, item) => {
    list.append(item);
}


//clear the input field
const delValue = (input) => {
    input.value = ''
}


//look whether local storage already have saved notes

//Внимание! Этот материал вы еще не проходили, это уже работа с объектами. 
//Усложненная часть задачи

if (localStorage.length != 0) {
    for (key in localStorage) {
        if (key[0] == 1) {
            addComment(listComments, createCard(localStorage.getItem(key), key));
        }
    }
}

//check whether note field is empty
let checkContent = (note) => {
    if (note.value == "") {
        return false;
    } else { return true; }
}

//function that creates, displays and adds note into local storage and comment save field
//clears the input field as well
// (костыль с датой и локальным хранилищем)
const handleComment = () => {
    //set datetime when the note had been written
    const date = new Date();
    //check whether the input field is empty
    //if true, then save
    //if false, then alert
    const checking = checkContent(comment);

    if (!checking) {
        alert("Type the note first");
    } else {
        saveComment(`1${date}`, comment.value);
        addComment(listComments, createCard(comment.value, date));
        delValue(comment);
    }
}

// listComments.append(createCard('Hello!'));
// console.log(createCard('Hello!'));