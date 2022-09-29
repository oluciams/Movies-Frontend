import React, { useEffect, useState } from 'react';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRouter } from "./router/AppRouter";
import "./css/app.css";

function App() {

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
  <>
    <Header/>
    <div className="container mt-2 mb-5">
      <AppRouter moviesInFavs={moviesInFavs} addOrRevomeFromFavs={addOrRevomeFromFavs} />    
    </div>
    <Footer/>  
  </>  
  );
}

export default App;
