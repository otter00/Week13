//Четные числа

// for (let i = 2; i <= 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 !== 0) //i % 2 - это самый простой способ проверить число на четность или нечетность
//         continue;
//     alert(i); // 1, затем 3, 5, 7, 9
// }

//Пример с forEach

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} имеет позицию ${index} в ${array}`);
//   });


//Вообще ерунда какая-то

// let arr = ["a", "b"];

// arr.push(function() {
//   alert( arr );
// })

// arr[2](); // ?


//1. Вывести на экран первый элемент массива
// const arr =  ['js', 'css', 'html'];
// alert(arr[0]);

//2. Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений,
//таких как false, undefined, пустые строки, 0, null с помощью метода filter.  
//Ожидаемый результат: [1, 2, 3].
//const arr = [0, 1, false, 2, undefined, '', 3, null];
//  1ST WAY
//const filteredArr = arr.filter(el=>(typeof el === "number" && el !== 0));
//  2ND WAY
//const filteredArr = arr.filter(Number);
//alert(filteredArr);

//3. Дан массив [[1,2], [1,2,3], [1,2,3,4]]. 
//Найдите индекс массива, длина которого > 3. Ожидаемый результат: 2
// const arr = [[1,2], [1,2,3], [1,2,3,4]];
// const el = arr.findIndex(el=>el.length > 3);
// alert(el);