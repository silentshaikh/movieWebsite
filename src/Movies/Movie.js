import React from 'react';
import { useGlobelContext} from '../context';
import { NavLink } from 'react-router-dom';
import '../Movies/Movie.css';
import Search from '../Search/Search';
function Movie() {
  let {movie,load} = useGlobelContext();
  if(load){
    return (
      <div className="box" >
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
   <>
   <div className="movieCont">
    {movie.map((element) => {
      return(
        <NavLink to={`/moviename/${element.imdbID}`} key={element.imdbID}>
<div className="movieCard" >
        <img src={element.Poster} alt={element.imdbID}/>
       <div className="mtitle">
        <h2>{element.Title}</h2>
        <p>{element.Year}</p>
        <p className="gen" >{element.Type}</p>
       </div>
    </div>
    </NavLink>
            );
    })}
   </div>
   </>
  )
}

export default Movie;
