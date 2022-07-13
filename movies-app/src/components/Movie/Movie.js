import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    //this.props.clearMovieDetail()
  }
  render() {
    console.log(this.props.movieDetail);
    return (
      <div className="movie-detail">
        Movie details
        <h1> {this.props.movieDetail.Title} </h1>
        <img src={this.props.movieDetail.Poster} alt="poster de la pelicula" className="img"/>
        <p> {this.props.movieDetail.Plot} </p>
        <p>Year: {this.props.movieDetail.Year}</p>
        <h3> Cast: {this.props.movieDetail.Actors} </h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail,
  };
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);
