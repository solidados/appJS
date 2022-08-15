'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    // Создаю функцию, которая будет вызывать предыдущий цикл только по требованию, то есть будет его оборачивать
    // Для этого я создаю функцию, а потом вырезаю цикл и помещаю его внутрь функции rememberMyFilms
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Назовите один из последних просмотренных фильмов?', '').trim(),
                b = prompt('Какую оценку вы ему поставите (по шкале от 1 до 10)?', '').trim();

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                // console.log('done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка 404");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные, или не ввели ничего');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ').sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Люимый жанр ${i + 1} - это ${item}`);
        });
    },

};
