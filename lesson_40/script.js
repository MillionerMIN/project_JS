'use strict'

const now = new Date();

// console.log(now);

//Методы с Date:
// I группа get:

// console.log(now.getFullYear());
console.log(now.getMonth()); // получим число месяца
console.log(now.getDate()); //получим день месяца
console.log(now.getDay()); //получим день
console.log(now.getUTCHours()); //получим время по 0 часовому полесу
console.log(now.getTimezoneOffset()); //получим разницу между нашим часовым и Гринвич в минутах
console.log(now.getTime()); //количество милисекунд прошедших с 1970

// II группа методы set: 
 //все те же методы только с приставкой set
 console.log(now.setHours(18));
 console.log(now);

 //new Date.parse('2021-06-08'); //создает дату без объявления переменной

 let start = new Date();

 for (let i = 0; i < 30000; i++) {
    let some = i ** 3;
 }

 let end = new Date();

 alert(`Цикл отработал ${end - start} миллисекунд`);