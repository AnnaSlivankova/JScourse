"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрелит?', '');

    while (numberOfFilms == '' || numberOfFilms == numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрелит?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };

  function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let q1 = prompt('Один из последних просмотренных фильмов?', + ''),
            q2 = prompt('Насколько оцените его?', '');
      
          if (q1 != null && q2 != null && q1 != "" && q2 != "" && q1.length < 50) {
              personalMovieDB.movies[q1] = q2;
              console.log("Done");
          } else {
              console.log('Error');
              i--;
          }
      }
}

rememberMyFilms();


function detectPersonalLevel() {
if (personalMovieDB.count <= 10) {
        console.log('Просмотрено довольно мало фильмов');
        
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
        
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
        
    } else {
        console.log('Произошла ошибка');
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
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i -1] = genre;
    }
}

writeYourGenres();
  
  console.log(personalMovieDB.movies);

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно*/
// Код возьмите из предыдущего домашнего задания