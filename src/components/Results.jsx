import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSearchParams } from 'react-router-dom';
import { Card } from './Card';

export const Results = ({ addOrRevomeFromFavs }) => {

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
          moviesSearch.map(({ title, poster_path, overview, id}, idx )=> (
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
    </>  
  )
}
