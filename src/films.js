const { zlib } = require("browserify/lib/builtins");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(x => x.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(array => array.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  director = getMoviesFromDirector(array, director);
  let averageScore = director.reduce(
    (score, average) => score + average.score, 0) / director.length;
  return Number(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let title = array.map(x => x.title);
  let titleOrderAlphabetical = title.sort((a, b) => a.localeCompare(b));
  let result = titleOrderAlphabetical.slice(0, 20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [...array].sort((a, b) => {
    if (a.year > b.year) return 1;
    if (b.year > a.year) return -1;

    if (a.title > b.title) return 1;
    if (b.title > a.title) return -1;
  });
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  genre = array.filter(array => array.genre == genre && array.score != '');
  let averageScore = genre.reduce(
    (score, average) => score + average.score, 0) / genre.length;
  return averageScore; 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const movieMinutes = array.map((movie) => {
    let arrDuration = movie.duration.replace(/[a-z ]/g,"");
    let hours = Number(arrDuration[0]) > 0 ? Number(arrDuration[0]) * 60 : 0;
    let minutes = arrDuration.length > 2 ? Number(arrDuration[1] + arrDuration[2]) : 0;
    let hourToMinute = Number(hours + minutes);
    return {...movie, duration: hourToMinute};
  });

  return movieMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let yearFilm = array.filter(array => array.year == year).sort();
  let bestFilm = yearFilm.slice(0, 1)
  return bestFilm;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
