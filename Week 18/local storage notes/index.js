const comment = document.querySelector('.form__text');
const listComments = document.querySelector('.list-comments');


//функция для сохранения комментария в локальном хранилище, первый параметр - комментарий, второй, дата, которая используется как уникальный ключ
const saveComment = (dateKey, commItem) => {
    localStorage.setItem(`${dateKey}`, `${commItem}`);
}


//функция для создания карточки с комментарием, создание разметки, которую позже встроим в сайт, первый параметр - комментарий, второй, дата, которая используется как дата создания заметки =) 
const createCard = (comm, dateKey) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const span = document.createElement('span');

    span.className = "span";
    span.textContent = dateKey;

    p.textContent = comm;

    div.className = "text";
    div.append(span);
    div.append(p);

    return div;
}


//при вызове отрисовывает комментарий на сайте, первый параметр - контейнер, куда отрисосвываем, второй - элемент, который надо отрисовать
const addComment = (list, item) => {
    list.append(item);
}


//при вызове очищаем поле ввода коментария
const delValue = (input) => {
    input.value = ''
}


//делаем проверку, есть ли заметки в локальном хранилище. Внимание! Этот материал вы еще не проходили, это уже работа с объектами. Усложненная часть задачи
if (localStorage.length != 0) {
    for (key in localStorage) {
        if (key[0] == 1) {
            addComment(listComments, createCard(localStorage.getItem(key), key));
        }
    }
}


//функция, которая создаст, отрисует и добавит комментарий на сайт и в локальное хранилище
// + очистит поле, в которое комментарий был введен 
// (костыль с датой и локальным хранилищем)
const handleComment = () => {
    const date = new Date();

    saveComment(`1${date}`, comment.value);
    addComment(listComments, createCard(comment.value, date));
    delValue(comment);
}

// listComments.append(createCard('Hello!'));
// console.log(createCard('Hello!'));