import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeMovieFavorite, clear } from "../../redux/actions";
import "./Favorites.css";
import { ArrowLeftIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';

export default function Favorites() {
  const dispatch = useDispatch();
  const history = useHistory()
  const moviesFavorites = useSelector((state) => state.moviesFavourites);

  useEffect(() => {
    dispatch(clear())
}, [dispatch])

function removeFavs(e){
  dispatch(removeMovieFavorite(e))
  Swal.fire('Eliminada correctamente de favoritas!', '', 'error')
}
// Swal.fire("Error", "Llene los campos correctamente", "error");
  return (
    <div>
      <button className="back" onClick={() => history.goBack()}>
      <ArrowLeftIcon/> VOLVER
      </button>
      <h1 className="favoritas">Favoritas</h1>
      <div className="favscontainer">
        {moviesFavorites.length !== 0 ? (
          moviesFavorites.map((pelicula) => {
            return (
              <div key={pelicula.imdbID} className="favmovie">
                <div className="btnytitle">
                  <p> {pelicula.Title} </p>
                  <button
                    className="btnremove"
                    type="button"
                    class="btn btn-danger"
                    onClick={() => removeFavs(pelicula.imdbID)}
                  >
                    X
                  </button>
                </div>
                <Link to={`/movie_detail/${pelicula.imdbID}`} className="link">
                  <img
                    src={pelicula.Poster}
                    alt="poster de la pelicula"
                    className="imgsearch"
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <div className="nofav">No cargaste favoritas</div>
        )}
      </div>
    </div>
  );
}
