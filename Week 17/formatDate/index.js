const formatDate = (date) => {
    //let ms = Date.parse(date);
    let dif = new Date() - date; // difference between current and input dates
    //console.log(date);
    //console.log(ms); 
    //console.log(dif);

    if (dif < 1000) {
        console.log("прямо сейчас");
        return "прямо сейчас";
    } else if (dif < (60 * 1000)) {
        console.log(`${(dif / 1000)} сек. назад`);
        return `${(dif / 1000)} сек. назад`;
    } else if ((dif < (6 * 60 * 1000))) {
        console.log(`${(dif / (60 * 1000))} мин. назад`);
        return `${(dif / (60 * 1000))} мин. назад`;
    } else {
        console.log(`вчерашняя дата ${(new Date(dif))} `);
        return `вчерашняя дата ${(new Date(dif))} `;
        // console.log(`вчерашняя дата ${(new Date(date - 24*60*60*1000))} `);
        // return `вчерашняя дата ${(new Date(date - 24*60*60*1000))} `;
    }
};


// Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 
// Если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"`.
// В противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`.
// В противном случае, если меньше часа, вывести `"m мин. назад"`.
// В противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.

formatDate(new Date(new Date - 1)); // "прямо сейчас"
formatDate(new Date(new Date - 30 * 1000)); // "30 сек. назад"
formatDate(new Date(new Date - 5 * 60 * 1000)); // "5 мин. назад"
formatDate(new Date(new Date - new Date(new Date - 24*60*60*1000))); // вчерашняя дата вроде 30.12.2022, 21:54