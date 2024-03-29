let json = `[{
    "title": "Властелин Колец",
    "genre": "фэнтези",
    "author": "Дж. Р. Р. Толкин",
    "year": 1954
}, {
    "title": "Алиса в Зазеркалье",
    "author": "Льюис Кэрролл",
    "year": 1871
}, {
    "title": "Совершенный код",
    "author": "Стив Макконнелл",
    "year": 1993
}]`;

let airportJson = `[{
    "Сотрудники": {
        "Имя": "Анастасия",
        "Фамилия": "Ивлева",
        "Отчество": "Андреевна",
        "Должность": "Пилот"
    }
}, {
    "Пассажиры": {
        "Имя": "Анастасия",
        "Фамилия": "Ивлева",
        "Отчество": "Андреевна",
        "Класс": "Бизнес"
    }
}, {
    "Самолеты": {
        "Тип": "Boeing-747",
        "Дальность полета": 15 000,
        "Авиакомпания": "S7"
    }
}, {
    "Направление": {
        "Рейс": "Регулярный",
        "Место отправления": "Новосибирск",
        "Место назначения": "Санкт-Петербург",
        "Авиакомпания": "Победа"
    }
}]`;

document.addEventListener('DOMContentLoaded', function (event) {
    let books = JSON.parse(json);
    console.log(books);

    let booksContent = "";

    for(let book of books) {
        booksContent += `<div class='book'>
        <h2>${book.title}</h2>` + 
        ((book.genre == undefined) ? `` : `<div>${book.genre}</div>`) + 
        `<div>${book.author}</div>
        <div>Год выпуска: ${book.year}</div>
        </div>`;
    }
    document.getElementById('booksContainer').innerHTML = booksContent;
});