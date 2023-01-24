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