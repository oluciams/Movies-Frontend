import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


export const Listado = ()=> { 

  const [moviesList, setMoviesList] = useState([]);

  const getData = () => {
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=b61364da3cf775b0c719a30ee4fe39b2&language=es-ES&page=1";
      axios.get(endPoint)
        .then(res => {
          const apiData = res.data
          setMoviesList(apiData.results)  
        })  
        .catch (error => {
          Swal.fire({
            icon: 'error',
            title: 'Alert',
            html: '<p>Ocurrio un error</p>'
          })    
        })
  }

  useEffect(() => {
    getData()
  }, [setMoviesList]);

  console.log(moviesList)
   
  return (     
    <div className="row">
      {
        moviesList.map(({ title, poster_path, overview }, idx )=>{
          return(
            <div className="col-3" key={idx}>
              <div className="card my-4" style={{width: "18rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="movie"/>
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