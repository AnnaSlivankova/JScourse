"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже просмотрелит?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };
console.log(personalMovieDB.count);

let q1 = prompt('Один из последних просмотренных фильмов?'),
    q2 = prompt('Насколько оцените его?'),
    q3 = prompt('Один из последних просмотренных фильмов?'),
    q4 = prompt('Насколько оцените его?');

let answer1 = q1,
    answer2 = q2;

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[q3] = q4;
console.log(personalMovieDB.movies);



if (personalMovieDB.count <= 10) {
    console.log('Просмотрено довольно мало фильмов');
    
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
    
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
    
} else {
    console.log('Произошла ошибка');
}



// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
// 4) Потренироваться и переписать цикл еще двумя способами*/