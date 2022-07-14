const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};



function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
      return {
        ...state,
        moviesFavourites: [...state.moviesFavourites, action.payload] // state.moviesFavourites.concat(action.payload)
      }
  }
  if (action.type === "GET_MOVIES") {
      return {
        ...state,
        moviesLoaded: action.payload
      };
  } 
  if( action.type === "REMOVE_MOVIE_FAVORITE"){
      return {
          ...state,
          moviesFavourites: state.moviesFavourites.filter( (pelicula) => pelicula.imdbID !== action.payload )
      }
  }
  if( action.type === 'GET_MOVIE_DETAIL'){
      return {
        ...state, 
        movieDetail: action.payload
      }
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      movieDetail: {},
      moviesLoaded: [],
    }
  }



  return state;
}

export default rootReducer;
// function rootReducer (state = initialState, action) {
//   switch (action.type) {
//     case "GET_MOVIES":
//       return {
//         ...state,
//         //Search viene de la respuesta de la API, accede a la propiedad
//         moviesLoaded: action.payload.Search,
//       };
//     case "ADD_MOVIE_FAVORITE":
//       return {
//         ...state,
//         //moviesFavourites: [...state.moviesFavourite, action.playload] es lo mismo que abajo
//         moviesFavourites: state.moviesFavourites.concat(action.payload),
//       };
//     case "GET_MOVIES_DETAIL":
//       return {
//         ...state,
//         movieDetail: action.payload,
//       };
//     case "REMOVE_MOVIES_FAVORITE":
//       return {
//         ...state,
//         //con filter saco del estado viejo la peli que quiero eliminar
//         moviesFavourites: state.moviesFavourites.filter(
//           //deja pasar todas las pelis cuyo id sea diferente al que me vio en el payload de la accion
//           //dejo pasar todas menos la del id que quiero borrar
//           (movies) => movies.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };

//export default rootReducer;
