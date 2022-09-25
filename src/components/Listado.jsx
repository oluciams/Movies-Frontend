import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"


export const Listado = ()=> { 

  const [moviesList, setMoviesList] = useState([]);

  const getData = () => {
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=b61364da3cf775b0c719a30ee4fe39b2&language=es-ES&page=1";
    axios.get(endPoint)
      .then(res => {
        const apiData = res.data
        setMoviesList(apiData.results)  
      })   
  }

  useEffect(() => {
    getData()
  }, [setMoviesList]);

  console.log(moviesList)
   
  return (     
    <div className="row">
      {
        moviesList.map(({idx, title, poster_path, overview })=>{
          return(
            <div className="col-3" key={idx}>
              <div className="card my-4" style={{width: "18rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{title.substring(0, 20)}</h5>
                  <p className="card-text">{overview.substring(0, 50)}....</p>
                  <Link to="/" className="btn btn-info">View Detail</Link>
                </div>
              </div>
            </div> 
          )
        })
      }
    </div>   
  )
} 