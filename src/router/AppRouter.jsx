import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Detail } from '../components/Detail';
import { Favorite } from '../components/Favorite';
import { Listado } from "../components/Listado";
import { Login } from "../components/Login";
import { Results } from '../components/Results';
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = ({ moviesInFavs, addOrRevomeFromFavs }) => {
  return (    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRouter redirectPath="/"/>}>
        <Route path="listado" element={<Listado addOrRevomeFromFavs={addOrRevomeFromFavs} />} /> 
        <Route path="detail" element={<Detail />} />
        <Route path="results" element={<Results addOrRevomeFromFavs={addOrRevomeFromFavs}/>} /> 
        <Route path="favorite" element={<Favorite moviesInFavs={moviesInFavs} addOrRevomeFromFavs={addOrRevomeFromFavs} />} />      
      </Route>    
    </Routes>  
  )
}
