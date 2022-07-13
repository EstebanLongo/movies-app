import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.moviesFavourites.map((pelicula) => {
            return (
              <div key={pelicula.imdbID}>
                <Link to={`/movie_detail/${pelicula.imdbID}`}>
                  <p> {pelicula.Title} </p>
                </Link>
                <button
                  onClick={() =>
                    this.props.removeMovieFavorite(pelicula.imdbID)
                  }
                >
                  {" "}
                  X{" "}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    moviesFavourites: state.moviesFavourites,
  };
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
