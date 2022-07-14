import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom';
import { getMovieDetail, clear } from "../../actions/index";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import "./Movie.css";

export default function Movie () {
  const { id } = useParams()
  const dispatch = useDispatch();
  const history = useHistory()

  const movieDetail = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(id))
    dispatch(clear())
  }, [dispatch, id])



  return (
    <div className="moviesdetail">
    <button className="btnback" onClick={() => history.goBack()}>
      <ArrowLeftIcon /> VOLVER
    </button>
    <div className="movie-detail">
      <div className="divimg">
        <img
          src={movieDetail.Poster}
          alt="poster de la pelicula"
          className="img"
        />
      </div>
      <div className="tdy">
        <h1 className="detailtitle"> {movieDetail.Title} </h1>
        <p>Year: {movieDetail.Year}</p>
        <p> {movieDetail.Runtime} </p>
        <p> {movieDetail.Awards} </p>
      </div>
      <p> {movieDetail.Plot} </p>
      <p>Director: {movieDetail.Director} </p>
      <p>Generos: {movieDetail.Genre} </p>
      <h3>Cast: {movieDetail.Actors} </h3>
    </div>
  </div>
  )
}

// class Movie extends React.Component {
//   componentDidMount() {
//     this.props.getMovieDetail(this.props.match.params.id);
//   }

//   componentWillUnmount() {
//     //this.props.clearMovieDetail()
//   }
//   render() {
//     console.log(this.props.movieDetail);
//     return (
//       <div className="moviesdetail">
//         <div className="movie-detail">
//           <div className="divimg">
//             <img
//               src={this.props.movieDetail.Poster}
//               alt="poster de la pelicula"
//               className="img"
//             />
//           </div>
//           <div className="tdy">
//             <h1 className="detailtitle"> {this.props.movieDetail.Title} </h1>
//             <p>Year: {this.props.movieDetail.Year}</p>
//             <p> {this.props.movieDetail.Runtime} </p>
//             <p> {this.props.movieDetail.Awards} </p>
//           </div>
//           <p> {this.props.movieDetail.Plot} </p>
//           <p>Director: {this.props.movieDetail.Director} </p>
//           <p>Generos: {this.props.movieDetail.Genre} </p>
//           <h3>Cast: {this.props.movieDetail.Actors} </h3>
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     movieDetail: state.movieDetail,
//   };
// }

// export default connect(mapStateToProps, { getMovieDetail })(Movie);
