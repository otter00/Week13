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

//          FUNCTION PART           //


// функция, которая создает html элемент разметки
// в данном случае name, url, comment - это пустые коробки, которые ожидают определенные значения. первое name - имя
// url адрес аватарки, comment - текст комментария
const createElement = (name, url, comment) => {
    const div = document.createElement('div');
    div.classList.add('div__items');

    const p = document.createElement('p');
    p.textContent = comment;
    p.className = 'item__text';

    const img = document.createElement('img');
    img.src = url;
    img.className = 'item__img';

    const span = document.createElement('span');
    span.textContent = name;
    span.className = 'item__name';

    div.append(img);
    div.append(span);
    div.append(p);
    return div;
}

//создаю функцию которая ждет, что в нее добавят контейнер, куда складывать элементы
// функция внутри себя вызывает функцию createElement, при вызове нам необходимо заполнить пустые коробки name, url, 
//comment (обратите внимания что я в них положила), 
const addElement = (container) => {
    const element = createElement(formName.value, formAva.value, formText.value);//тут возвращается див с комментарием и 
    //именем в общем его я кладу в переменную и дальше ее удочеряю в разметку
    //console.log(element);
    arr.push(`${element.outerHTML}`);//это новый для вас код, признаюсь я тоже его только сегодня узнала
    // задала гуглу вопрос, есть ли что-то что превращает html разметку в строку и вуаля, есть все, что душе угодно =)
    //.outerHTML пользуйтесь. И не нужен JSON =) 
    container.append(element);
}

//add items into innerHTML and set them into localstorage by click
formButton.addEventListener('click', () => {
    addElement(listComments);
    localStorage.setItem('mess__item', arr.join(''));
    //console.log(arr.join(''));
});