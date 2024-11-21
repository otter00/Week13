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

document.addEventListener("DOMContentLoaded", function (e) {
  let books = JSON.parse(json);
  console.log(books);

  let booksContent = "";
  let index = 0;

  for (let book of books) {
    index++;
    booksContent +=
      `<div class='book'>
        <h1>${index}. ${book.title}</h1>` +
      (book.genre == undefined ? `` : `<h2>${book.genre}</h2>`) +
      `<div>${book.author}</div>
        <div>Год выпуска: ${book.year}</div>
        </div>`;
  }

  document.getElementById("main-container").innerHTML = booksContent;
});
