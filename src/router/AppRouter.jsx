import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Contact } from "../components/Contact";
import { Detail } from '../components/Detail';
import { Favorite } from '../components/Favorite';
import { Listado } from "../components/Listado";
import { Login } from "../components/Login";
import { Results } from '../components/Results';
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = () => {

  const [moviesInFavs, setMoviesInFavs] = useState([]);

    const addOrRevomeFromFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const poster_path = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = { 
      poster_path, title, overview,
      id: btn.dataset.movieId
    }
    const repeated = moviesInFavs.find(ele => ele.id === movieData.id)
    if(repeated){
      const newMoviesInFavs = moviesInFavs.filter( movie => movie.id !== movieData.id )
      setMoviesInFavs(newMoviesInFavs)
      localStorage.setItem('favs', JSON.stringify(newMoviesInFavs))  
    } else {
      console.log('no repetido')
      const newMoviesInFavs = [...moviesInFavs, movieData]
      setMoviesInFavs(newMoviesInFavs)
      localStorage.setItem('favs', JSON.stringify(newMoviesInFavs)) 
    }  
  }

  useEffect(() => {
    const favsInLocal= localStorage.getItem('favs')
    if(favsInLocal){
      setMoviesInFavs(JSON.parse(favsInLocal))
    }
  }, []);


  return (    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRouter redirectPath="/"/>}>
        <Route path="listado" element={<Listado addOrRevomeFromFavs={addOrRevomeFromFavs} />} /> 
        <Route path="detail" element={<Detail />} />
        <Route path="results" element={<Results />} /> 
        <Route path="favorite" element={<Favorite moviesInFavs={moviesInFavs} addOrRevomeFromFavs={addOrRevomeFromFavs} />} /> 
        <Route path="contact" element={<Contact />} />
      </Route>    
    </Routes>  
  )
}
