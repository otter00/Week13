//          DECLARATION PART            ///

//get each input
const formName = document.querySelector('.form__name');
const formAva = document.querySelector('.form__ava');
const formText = document.querySelector('.form__text');
//get the send button
const formButton = document.querySelector('.form__button');
//get the field for comments
const listComments = document.querySelector('.list__comments');
//save elems as one with key 'mess__item'
const oldComments = localStorage.getItem('mess__item');
//check whether localstorage is empty, if not - display items
listComments.innerHTML = oldComments;
//picture
console.log('https://i.pinimg.com/736x/53/a8/c4/53a8c4c7cd05f30f876c53ed3ffaa9bf.jpg');
//array to complect elements and set it into localstorage as specific one
const arr = [];
//check whether content has anything
let checking;



//          FUNCTION PART           //

//creates HTML elem
//name, url, comment - containers for specific values
const createElement = (name, url, comment) => {
    //create div elem which will contain other elems
    const div = document.createElement('div');
    //set class to div
    div.classList.add('div__items');

    //create p elem for text, set class and received comment content
    const p = document.createElement('p');
    p.textContent = comment;
    p.className = 'item__text';

    //create img elem for pic, set class and received pic url
    const img = document.createElement('img');
    img.src = url;
    img.className = 'item__img';

    //create span elem, set class and received author name
    const span = document.createElement('span');
    span.textContent = name;
    span.className = 'item__name';

    //set each elem into div
    div.append(img);
    div.append(span);
    div.append(p);
    //return div as result
    return div;
}


//func waited for container to put elems into
//calls createElement to fill containers and create div elem
const addElement = (container) => {
        const element = createElement(formName.value, formAva.value, formText.value);
        //тут возвращается див с комментарием и 
        //именем в общем его я кладу в переменную и дальше ее удочеряю в разметку
        //console.log(element);
        arr.push(`${element.outerHTML}`);//это новый для вас код, признаюсь я тоже его только сегодня узнала
        // задала гуглу вопрос, есть ли что-то что превращает html разметку в строку и вуаля, есть все, что душе угодно =)
        //.outerHTML пользуйтесь. И не нужен JSON =) 
        container.append(element);

        //yes this fuck has useful comments from Diana
}

//check whether content is empty
let checkContent = (note) => {
    if (note.value == "") {
        return false;
    } else { return true; }
}

//check for content
//add items into innerHTML and set them into localstorage by click
formButton.addEventListener('click', () => {
    checking = checkContent(formName);

    if (!checking) {
        alert(`You'd better fill at least one field`);
    } else {
        addElement(listComments);
        localStorage.setItem('mess__item', arr.join(''));
    }
    //console.log(arr.join(''));
});