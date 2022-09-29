import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2';
import { Card } from "./Card";


export const Listado = ({addOrRevomeFromFavs})=> { 

  const [moviesList, setMoviesList] = useState([]);

  const getData = () => {
    const endPoint =`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES&page=1`;
      axios.get(endPoint)
        .then(res => {
          const apiData = res.data
          setMoviesList(apiData.results)  
        })  
        .catch (error => {  
          Swal.fire({
            icon: 'error',
            title: error,
            html: '<p>Ocurrio un error</p>'
          })    
        })
  }
  

  useEffect(() => {
    getData()
  }, [setMoviesList]);  
   
  return (     
    <div className="row g-3 justify-content-center">
      {
        moviesList.map(({ title, poster_path, overview, id}, idx)=>(
          <Card
            key={idx}
            id={id}
            poster_path={poster_path}
            title={title}
            overview={overview}
            addOrRevomeFromFavs={addOrRevomeFromFavs}  
          />    
        ))
      }
    </div>   
  )
}