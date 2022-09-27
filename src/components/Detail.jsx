import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useSearchParams } from 'react-router-dom';

export const Detail = () => {

  const [detailMovie, setDetailMovie] = useState({});
  const [searchParams] = useSearchParams();

  let movieID = searchParams.get('movieID');

  const getDataDetail = ()=> {

    const endPointDetail =`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_API_KEY}&language=es-ES`
    axios.get(endPointDetail)
    .then(res => {
      const apiData = res.data
      setDetailMovie(apiData)
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
    getDataDetail()
    // eslint-disable-next-line
  }, [movieID]);
  
  return (
    <>
   
    {!detailMovie && <p>Cargando...</p>}
    { detailMovie &&
      <>
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8 px-4 py-4">
              <div className="card-body">
                <h5 className="card-title">{detailMovie.title}</h5>
                <h5 className="card-title">Fecha de estreno: {detailMovie.release_date}</h5>
                <h5 className="card-title">Reseña:</h5>
                <p className="card-text py-4">{detailMovie.overview}</p>
                <h5 className="card-title">Rating: {detailMovie.vote_average}</h5>
                <h5 className="card-title">Genero: </h5>
                <ul>
                  { detailMovie.genres?.map(genres => <li key={genres.id}>{genres.name}</li>) }
                </ul>
                <Link to='/listado' type="button" class="btn btn-secondary btn-lg">Volver</Link>
              </div>
            </div>
          </div>
        </div>
      </>  
    }
    </>
  )  
}

