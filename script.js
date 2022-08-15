/* ===== Задание на урок 1: =====

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */

/* ===== Задание на урок 2: =====

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

/* ===== Задание на урок 3: =====

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство private. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

/* ===== Задание на урок 4: =====

1) Ззадача - переписать приложение так, чтобы все функции стали методами объекта personalMovieDB.
Такое случается в реальных продуктах при смене технологий или подхода к архтектуре программы.

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство private. Если оно возвращает
false – он переключает его в true, если true – переключает в false. Протестировать вместе с showMyDB

3) В методе writeYourGenres – запретить пользователю нажимать кнопку "Отмена" или оставлять пустую строку.
Если он это сделал, то возвращать его к этому же вопросу. После того, как все жанры введены, при помощи метода
forEach вывести в консоль сообщения в таком виде: 
"Люимый жанр #(+номер по порядку, начиная с 1) – это (+название из массива)"
*/


'use strict';

/* let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start(); */

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
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные, или не ввели ничего');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Люимый жанр ${i + 1} - это ${item}`);
            });
    },

};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
//personalMovieDB.showMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.writeYourGenres();

/* Далее здесь закомментирован вариант цикла while идентичного циклу for как альтернатива
let i = 0;

while (i < 2) {
    const a = prompt('Назовите один из последних просмотренных фильмов?', ''),
b = prompt('Какую оценку вы ему поставите (по шкале от 1 до 10)?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
    }
    i++;
} */

// Создаю функцию, которая будет вызывать предыдущий цикл только по требованию, то есть будет его оборачивать
// Для этого я создаю функцию, а потом вырезаю цикл и помещаю его внутрь функции rememberMyFilms
/* function rememberMyFilms(params) {
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
} */
// и для того, чтобы эта функция заработала – не забываю её вызывать:
// rememberMyFilms();
// функция вызовится и внутри неё сработает цикл

// следующую часть "условия" я тоже оборачиваю в функцию
/* function detectPersonalLevel(params) {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка 404");
    }
}

detectPersonalLevel(); */

/* function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private); */

/* function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres(); */