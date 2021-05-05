/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


// const a = prompt('Один из последних просмотренных фильмов?', ''),
//    b = +prompt('На сколько оцените его?', ''),
//    c = prompt('Один из последних просмотренных фильмов?', ''),
//    d = +prompt('На сколько оцените его?', '');

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
         b = +prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      };
   }
}

rememberMyFilms();


// let i = 0;
// do {
//    const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцените его?', '');

//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//       i++;
//    } else {
//       console.log('error');
//       i--;
//    };
// } while ( i < 2)\
// let i = 0;
// while(i < 2) {
//    const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцените его?', '');

//    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//       i++;
//    } else {
//       console.log('error');
//       i--;
//    };
// }

function detectPersonalLevel() {
   if (personalMovieDB <= 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (10 < personalMovieDB < 30) {
      console.log("Вы классический зритель");
   } else if (30 <= personalMovieDB < 50) {
      console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка");
   }
}

detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
   }
}

writeYourGenres();


console.log(personalMovieDB);
