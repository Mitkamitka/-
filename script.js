let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function validFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a]=b ;
        console.log(personalMovieDB);
    }
    else {
        console.log('error');
        i--;
    }
  }
} 
validFilms();

function kinoman() {
    if (personalMovieDB.count < 10) {
        console.log('Маловато');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Средненько');
    } else if (personalMovieDB.count >= 30) {
        console.log('Заебца');
    } else if (personalMovieDB.count === 0) {
        console.log('Ошибка');
    }
}
kinoman();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
 for(let i = 1; i <= 3; i++) {
   personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанра под номером ${i}`, '');
 }
}
writeYourGenres();