import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { movApi } from '../context';
function MovieName() {
    let {id} = useParams();
    const [load,upLoad] = useState(true);
    const [movie,upMovie] = useState([]);
    const gtMovies = async (api) => {
        upLoad(true);
        try {
            let myFetch = await fetch(api);
            let myData = await myFetch.json();
            console.log(myData)
            if(myData.Response == 'True'){
                upLoad(false);
                upMovie(myData);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      let searchTimer =   setTimeout(() => {
            gtMovies(`${movApi}&i=${id}`);
        }, 1000);
        return () =>  clearTimeout(searchTimer)
    },[id]);
    if(load){
      return (
        <div className="box">
          <h1>Loading...</h1>
        </div>
      )
    }
  return (
    <>
        {/* <h1>Movie Name {id}</h1> */}
        <section className='detCont'>

        <section className="movieDetal">
          <div className="boxImg">
            <img src={movie.Poster} alt="" />
          </div>
          <div className="details">
            <h1>{movie.Title}</h1>
            <h3>{movie.Genre}</h3>
            <h5>{movie.Released}</h5>
            <p>{movie.Year}</p>
            <p>{movie.Runtime}</p>
            <p style={{textTransform:'capitalize'}}>{movie.Type}</p>
            <p>{movie.Language}</p>
            <p>{movie.Country}</p>
          </div>
        </section>
        </section>
    </>
  )
}

export default MovieName
