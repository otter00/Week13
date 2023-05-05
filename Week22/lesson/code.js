// let val = 'sss';

// try {
//     let numVal = Number(val);
//     if(val !== numVal) {
//         throw new Error("Not a number!");
//     }
//     console.log(parseInt(val));
// } catch (e) {
//     console.log(e.message);
// } finally {
//     console.log(`I'm done`);
// }

// class UserService { 

//     constructor(username, password) {
//     this.username = username;
//     this.password = password;
//     }
    
//     get username() {
//     return this.username;
//     }
    
//     get password() {
//         throw 'You are not allowed to get password';
//     }
    
     
//     static authenticate_user() {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `https: //examples.com/api/user/authenticate?username=` +
//     `${this.username}` + '&password=' + `${this.password}`, true);

//     xhr.responseType = 'json';

//     xhr.send();
    
//     let result = false;
    
//     xhr.onload = function() {
//     if(xhr.status != '200') {
//     result = xhr.response;
//     } else {
//     result = true;
//     }
//     };
    
//     return result;
//     }
//     }
    
//     $(`form #login`).click(function () {
//     var username = $('#username');
//     var password = $('#password');
    
//     var res = UserService(username, password).authenticate_user();
    
//     if(res == true) {
//     document.location.href = '/home';
//     } else {
//     alert(res.error);
//     }
//     })

//API с фильмами
//EY98ZH1-RBT4RZH-H5BT7MP-KAZT7FJ 
const API_key = 'EY98ZH1-RBT4RZH-H5BT7MP-KAZT7FJ';

//Ссылка на payment.html в JSON'е, по-другому добавление через js не работает 
var payRedirectLink = `[{
    "link": "../htmls/payment.html"
}]`;

const JsonLoc = `[{
    "title":"Полежать, играя в Обломовщину",
    "about":"Захааааааар!",
    "class":"first",
    "url":"https://cs8.pikabu.ru/avatars/2714/x2714648-220691104.png"
},{
    "title":"На Кавказ по тропам Лермонтова",
    "about":"Умер Лермонтов на Кавказе, но любил он его не поэтому",
    "class":"second",
    "url":"https://cs8.pikabu.ru/avatars/2714/x2714648-220691104.png"
},{
    "title":"По-Чеховски изысканно и задумчиво",
    "about":"Замечательный день сегодня. То ли чаю пойти выпить, то ли повеситься...",
    "class":"third",
    "url":"https://cs8.pikabu.ru/avatars/2714/x2714648-220691104.png"
},{
    "title":"Как истинно Ремарковская фрау",
    "about":"Встречаются как то Эрих, Мария и Ремарк на западном фронте, а там без перемен",
    "class":"fourth",
    "url":"https://cs8.pikabu.ru/avatars/2714/x2714648-220691104.png"
},{
    "title":"Ощути себя Маяковским",
    "about":"Любовь зла",
    "class":"fifth",
    "url":"https://cs8.pikabu.ru/avatars/2714/x2714648-220691104.png"
},{
    "title":"Выбор по-Чернышевски",
    "about":"Что делать?..",
    "class":"sixth",
    "url":"https://cs8.pikabu.ru/avatars/2714/x2714648-220691104.png"
}]`;


document.addEventListener('DOMContentLoaded', (e)=>{
    const locations = JSON.parse(JsonLoc);
    console.log(locations.length);
    let moviesContent = "";
    let payHref = JSON.parse(payRedirectLink); //payment.html link

                for (let i = 0; i < locations.length; i++) {
                moviesContent += `
                <div class = "movie">
                    <p class="movie__rating">${locations[i].title}</p>
                    <img class = "movie__img" src =${locations[i].url}>
                    <div class = "movie2">
                        <div>
                            <p class="movie__name">${locations[i].title}</p>
                            <img class = "movie__img" src =${locations[i].url}>
                            <p class="movie__description">${locations[i].about}</p>
                            <a href='#' class="movie__link">Подробнее</a>
                        </div>
                    </div>
                </div>
                `
            }
            document.querySelector(".movies__popular").innerHTML = moviesContent;
})

// document.addEventListener("DOMContentLoaded", function (event) {
//     let moviesContent = "";
//     let payHref = JSON.parse(payRedirectLink); //payment.html link

//     fetch(`https://api.kinopoisk.dev/collection?token=${API_key}&search=top_items_all&field=collectionId`)
//         .then(response => response.json())
//         .then(movie => {
//             for (let i = 0; i < 5; i++) {
//                 moviesContent += `
//                 <div class = "movie">
//                     <p class="movie__year">Год: ${movie.movies[i].year}</p>
//                     <p class="movie__rating">Рейтинг: ${(movie.movies[i].rating.kp).toFixed(1)}</p>
//                     <img class = "movie__img" src = ${movie.movies[i].poster.previewUrl}>
//                     <div class = "movie2">
//                         <div>
//                             <p class="movie__name">${movie.movies[i].name}, ${movie.movies[i].year}</p>
//                             <img class = "movie__img" src = ${movie.movies[i].poster.previewUrl}>
//                             <p class="movie__description">${movie.movies[i].description}</p>
//                             <a href='${payHref[0].link}' class="movie__link">Смотреть</a>
//                         </div>
//                     </div>
//                 </div>
//                 `
//             }
//             document.querySelector(".movies__popular").innerHTML = moviesContent;
//         })
//         .catch(error => console.log(error));
//     }
// );

//Модальное окно
const movieContainer = document.querySelector('.movies');
movieContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('movie__img')) {
        const parentDiv = event.target.parentNode;
        //console.log(parentDiv)
        let movie2 = parentDiv.querySelector(".movie2");
        movie2.style.display = "block";
        window.onclick = function (event) {
            if (event.target == movie2) {
                movie2.style.display = "none";
            }
        }
    }
})