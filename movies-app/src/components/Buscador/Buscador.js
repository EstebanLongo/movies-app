import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies, addMovieFavorite } from '../../actions/index.js'
import './Buscador.css';

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    //cambia la propiedad title con el valor del evento
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    //termino la funcion
    //despacho la accion, como hicimos conect mapDisp... puedo acceder a traves de las props
    // this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              className="inputbuscador"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              placeholder='Buscar pelicula...'
            />
          </div>
          <button type="submit" onClick={() => this.props.obtenerPelis(title)}>BUSCAR</button>
        </form>
        
          <div className="searchs">
              {
                  this.props.state.moviesLoaded.map((pelicula) => {
                          return (
                                <div key={pelicula.imdbID} className='moviesearch'>
                                  <Link to={`/movie_detail/${pelicula.imdbID}`} className='link'>
                                  <img src={pelicula.Poster} alt="poster de la pelicula" className="imgsearch"/>
                                      <p className="searchtitle"> { pelicula.Title}  </p>
                                  </Link>
                                  <button className="btnsearchs" onClick={() => this.props.agregarAFav(pelicula)}> ♥️ </button>
                                </div>
                          )
                  })
              }
              </div>
        
      </div>
    );
  }
}

//MAPEO EL ESTADO PARA CONVERTIR EN PROPS
//MSTP recibe state como parametro y devuelve un objeto con parte del state que queremos
//usamos la key movies y su valor es la parte del estado que quiero traer

//retorna un objeto que se va a convertir en props dentro del componente
//buena practica es que llame a la key con el mismo nombre que le puse en el reducer
//el valor viene del state, trae de state moviesLoaded
function mapStateToProps(state){
  return {
      state: state
  }
}

//MAPEO ACCIONES PARA DESPACHARLAS
//MDTP recibe como parametro una funcion que llamamos dispatch y devuelve un objeto con las acciones
//que queremos enviar al store

//aca no recibe el state como parametro, recibe el dispatch que es la capacidad de despachar acciones
//retorna un objeto que tiene los nombres de las acciones que voy a despachar desde mi componente

// function mapDispatchToProps(dispatch) {
//   return {
//     //addMF va a guardar un f de callback que va a obtener el resultado de despachar la accion addMovieFavourite
//     obtenerPelis: (title) => dispatch(getMovies(title)),
//     agregarAFav: (movie) => dispatch(addMovieFavorite(movie)),
//   };
// }

function mapDispatchToProps(dispatch){
  return {
      obtenerPelis: (asdasd) => dispatch(getMovies(asdasd)),
      agregarAFav: (objetoPeli) => dispatch(addMovieFavorite(objetoPeli))
  }

}

//MSTP y MDTP son nombres arbitrarios, se usan por convencion
//son los que vamos a usar para acceder a estos en nuestros componentes via props

//cada funcion nos devuelve la funcion dispatch que recibe como parametro la action que queremos
//enviar al store, en este caso son addMovieFavourite y getMovies que estan en la carpeta actions

//los parametros que recibe cada function son los playloads que usamos en nuestra action

export default connect( mapStateToProps, mapDispatchToProps )(Buscador)
