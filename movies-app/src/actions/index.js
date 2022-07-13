const API_KEY = '6d022ee2'


export function addMovieFavorite(infoPeli) {
  return { 
    type: "ADD_MOVIE_FAVORITE",
    payload: infoPeli
  };
}

export function removeMovieFavorite(id){
    return {
      type: "REMOVE_MOVIE_FAVORITE",
      payload: id
    }
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
    .then(response => response.json())
    .then(json => {
      return dispatch({
        type: 'GET_MOVIES',
        payload: json.Search
      })
    });
  };
}

export function getMovieDetail(id){
      return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response => response.json())
        .then(json => {
          return dispatch({
            type: 'GET_MOVIE_DETAIL',
            payload: json
          })
        });
    }
}



// function getMovies(infoPelis){
//         return {
//           type: 'GET_MOVIES',
//           payload: infoPelis
//       }
// }



// export function addMovieFavorite(payload) {
//   return { 
//     type: "ADD_MOVIE_FAVORITE", 
//     payload: payload
//    };
// }

// export function removeMovieFavorite(id) {
//   return { type: "REMOVE_MOVIE_FAVORITE",
//    payload: id
//    };
// }
 
// export function getMovies(titulo) {
//   return function(dispatch) {
//     return fetch("http://www.omdbapi.com/?apikey=d1dcdf9c&s=" + titulo)
//       .then(response => response.json())
//       .then(json => {
//        return dispatch({ 
//          type: "GET_MOVIES",
//           payload: json.Search 
//         });
//       });
//   };
// }

// export function getMovieDetail(id) {
//   return function(dispatch) {
//     return fetch("http://www.omdbapi.com/?apikey=d1dcdf9c&i=" + id)
//       .then(response => response.json())
//       .then(json => {
//         return dispatch({ 
//           type: "GET_MOVIE_DETAIL", 
//         payload: json
//        });
//       });
//   };
// }



// --------------------------------------------

// export function addMovieFavorite(payload) {
//   return { type: "ADD_MOVIE_FAVORITE", payload };
// }

// export function removeMovieFavorite(payload) {
//   return { type: "REMOVE_MOVIE_FAVORITE", payload };
// }

// export function getMovies(titulo) {
//   return function(dispatch) {
//     return fetch("http://www.omdbapi.com/?apikey=d1dcdf9c&s=" + titulo)
//       .then(response => response.json())
//       .then(json => {
//         dispatch({ type: "GET_MOVIES", payload: json });
//       });
//   };
// }

// export function getDetails(id) {
//   return function (dispatch) {
//     return fetch("http://www.omdbapi.com/?apikey=d1dcdf9c&i=" + id)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: "GET_DETAILS", payload: json });
//       });
//   };
// }

/**
   * export function getDetails(id) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_DETAILS", payload: json });
        });
    };
  }
   * 
   * 
   */
