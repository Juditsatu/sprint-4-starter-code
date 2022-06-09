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
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let title = array.map(x => x.title);
  let titleOrderAlphabetical = title.sort((a, b) => a.localeCompare(b));
  let result = titleOrderAlphabetical.slice(0, 20)
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array, year) {
  array= array.sort((a, b) => a.title.localeCompare(b.title));
  year = array.sort((a, b) => a.year - b.year);
  let result = year.slice(0, 20);
  //l'ordre de pel·lícules és correcte, però el test ascending order falla...
  //console.log(result)
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  genre = array.filter(array => array.genre == genre);
  let averageScore = genre.reduce(
    (score, average) => score + average.score, 0) / genre.length;
    //no poso el .toFixed(2) pero al test surt passed??
    //el metode reduce ignora els score "buits" pero el test falla
  return averageScore; 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  // array= array.sort((a, b) => a.duration.localeCompare(b.duration));
  // let result = array.map(e => e.duration)
  // const index = array.forEach((element) => {
  //   element.duration;
  // let test = array[index].duration;
  // });
  // let indexArr = array.findIndex((x => x.duration == x.duration))
  // let movieHours = array.map(x => x.duration);
  // let minutes = array.duration.replace(/[a-z]/g,"");
  // let hourToMinute = minutes[0] * 60 + Number(minutes[2]) + Number(minutes[3]);
  // array.forEach((obj) => {
  //   let minutes = obj.duration.replace(/[a-z]/g,"");
  //   let hourToMinute = minutes[0] * 60 + Number(minutes[2]) + Number(minutes[3]);
  //   return hourToMinute;
  // });
  // const indexTime = array.forEach((obj) => {
  //   console.log(obj.duration.replace(/[a-z]/g,""))
  // });
  const movieMinutes = array.map((e) => {
    let arrDuration = e.duration.replace(/[a-z ]/g,"");
    let hours = Number(arrDuration[0]) > 0 ? Number(arrDuration[0]) * 60 : 0;
    let minutes = arrDuration.length > 2 ? Number(arrDuration[1] + arrDuration[2]) : 0;
    let hourToMinute = Number(hours + minutes);
    return {...e, duration: hourToMinute};
  });

  return movieMinutes;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let yearFilm = array.filter(array => array.year == year).sort();
  let result = yearFilm.slice(0, 1)
  return result;
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
