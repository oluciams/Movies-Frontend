import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useSearchParams } from 'react-router-dom';

export const Results = () => {

  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams] = useSearchParams();

  let keyword = searchParams.get('keyword');

  const getDataSearch = async () => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES&query=${keyword}`;
   
      await axios.get(endPoint)
        .then(res => {
          const apiData = res.data.results;

          if (apiData.length === 0) {
            Swal.fire({
              icon: 'error',  
              html: '<p>Tu busqueda no arrojó resultados</p>'
            })   

          }
          setMoviesSearch(apiData)  
          console.log(apiData)
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
    getDataSearch()
    // eslint-disable-next-line
  }, [keyword]);


  return (
  <>
    <h2>Buscaste: <em>{keyword}</em></h2>
    <div className="row g-3">
      {moviesSearch.length === 0 && <h3 className="mt-4">No arrojó resultados</h3>}
      {
        moviesSearch.map(({ title, poster_path, overview, id} )=>{
          return(
            <div className="col-4" key={id}>
              <div className="card h-100 my-4" style={{width: "18rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="movie"/>
                <div className="card-body">
                  <h5 className="card-title">{title.substring(0, 20)}</h5>
                  {/* <p className="card-text">{overview.substring(0, 50)}....</p> */}
                  <Link to={`/detail?movieID=${id}`} className="btn btn-info">View Detail</Link>
                </div>
              </div>
            </div> 
          )
        })
      }
    </div> 
  </>  
  )

}
