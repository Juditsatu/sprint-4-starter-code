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
function orderByYear(array) {
  let sortYear = array.sort((a, b) => b.year - a.year, 'en', { numeric: true });
  let result = array.forEach((e) => {
    console.log(`${e.title}: ${e.year}`);
  });
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
