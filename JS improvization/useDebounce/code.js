// По этому массиву мы будем искать названия,
// которые содержат пользовательский запрос.
const pizzaList = [
  "Маргарита",
  "Пепперони",
  "Гавайская",
  "4 Сыра",
  "Диабло",
  "Сицилийская",
];

const searchForm = document.getElementById("search-form");
console.log(searchForm);
const searchInput = searchForm.querySelector('[type="search"]');
console.log(searchInput);
const searchResults = document.querySelector(".search-results");
console.log(searchResults);

// В функции contains мы будем проверять,
// содержится ли пользовательский запрос
// в каком-либо из названий:
function contains(query) {
  return pizzaList.filter((title) =>
    title.toLowerCase().includes(query.toLowerCase())
  );
}

// Мок-объект сервера будет содержать метод search:
const server = {
  search(query) {
    // Этот метод будет возвращать промис,
    // таким образом мы будем эмулировать «асинхронность»,
    // как будто мы «сходили на сервер, он подумал и ответил».
    return new Promise((resolve) => {
      // Таймаут нужен исключительно для того,
      // чтобы иметь возможность настраивать время задержки 🙂
      setTimeout(
        () =>
          resolve({
            // В качестве ответа будем отправлять объект,
            // значением поля list которого
            // будет наш отфильтрованный массив.
            list: query ? contains(query) : [],
          }),
        150
      );
    });
  },
};

(async () => {
  const response = await server.search("Peppe");
})();

searchInput.addEventListener("input", (e) => {
  // Получаем значение в поле,
  // на котором сработало событие:
  const { value } = e.target;

  // Получаем список названий пицц от сервера:
  server.search(value).then(function (response) {
    const { list } = response;

    // Проходим по каждому из элементов списка,
    // и составляем строчку с несколькими <li> элементами...
    const html = list.reduce((markup, item) => {
      return `${markup}<li>${item}</li>`;
    }, ``);

    // ...которую потом используем как содержимое списка:
    searchResults.innerHTML = html;
  });
});

// Вынесем обработчик события в отдельную функцию.
// Внутри она будет такой же,
// но так нам будет удобнее оборачивать её в debounce.
function handleInput(e) {
  const { value } = e.target;

  server.search(value).then(function (response) {
    const { list } = response;

    const html = list.reduce((markup, item) => {
      return `${markup}<li>${item}</li>`;
    }, ``);

    searchResults.innerHTML = html;
  });
}

// Аргументами функции будут:
// - функция, которую надо «откладывать»;
// - интервал времени, спустя которое функцию следует вызывать.
function debounce(callee, timeoutMs) {
  // Как результат возвращаем другую функцию.
  // Это нужно, чтобы мы могли не менять другие части кода,
  // чуть позже мы увидим, как это помогает.
  return function perform(...args) {
    // В переменной previousCall мы будем хранить
    // временную метку предыдущего вызова...
    let previousCall = this.lastCall;

    // ...а в переменной текущего вызова —
    // временную метку нынешнего момента.
    this.lastCall = Date.now();

    // Нам это будет нужно, чтобы потом сравнить,
    // когда была функция вызвана в этот раз и в предыдущий.
    // Если разница между вызовами меньше, чем указанный интервал,
    // то мы очищаем таймаут...
    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }

    // ...который отвечает за непосредственно вызов функции-аргумента.
    // Обратите внимание, что мы передаём все аргументы ...args,
    // который получаем в функции perform —
    // это тоже нужно, чтобы нам не приходилось менять другие части кода.
    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);

    // Если таймаут был очищен, вызова не произойдёт
    // если он очищен не был, то callee вызовется.
    // Таким образом мы как бы «отодвигаем» вызов callee
    // до тех пор, пока «снаружи всё не подуспокоится».
  };
}

searchInput.addEventListener("input", handleInput);

// Указываем, что нам нужно ждать 250 мс,
// прежде чем запустить обработчик:
const debouncedHandle = debounce(handleInput, 250);

// Передаём новую debounced-функцию в addEventListener:
searchInput.addEventListener("input", debouncedHandle);
