// 1. Напишите код, который делает первый символ заглавным. 
//первый способ
// let first = `настя`;
// let up = first.replace(first[0], first[0].toUpperCase());
// console.log(up);
// let second = first[0].toUpperCase();
// let third = first.replace(first[0], second);
//второй способ
// const name = "john"
// const result = name.charAt(0).toUpperCase() + name.slice(1)
// console.log(result);

// 2. Создать дату 24 января 2021 года, 22 часа 51 минута. Временная зона – местная.
// let date = new Date(2021, 0, 24, 22, 51);
// console.log( date ); // 2021-01-24, 22:51:00

// 3. Посчитать, сколько секунд осталось до завтра.
// let today = new Date();
// let tomorrow = new Date(2022, 11, 29, 0); // 11 месяц - потому что у timestamp всё не как у людей (счет месяцев с нуля)
// let diff = tomorrow.getTime() - today.getTime();
// console.log( diff/1000/3600 );

// 4. Выделить из строки с денежной суммой (например, 120р. или 99€) только цифры, т.е. 120 и 99
// let currency = `120p.`;
// let currencyEur = `99€`;
// console.log(currency);
// console.log(+currency.slice(0, -2));
// console.log(currency.match(/[0-9]/gi).join(''));
// console.log(currencyEur.match(/[0-9]/gi).join(''));

// 5. Сгенерировать случайное число от 1 до 100
// let rand = Math.round((Math.random()*101));
// console.log(rand);