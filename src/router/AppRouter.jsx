import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Contacto } from "../components/Contacto";
import { Detail } from '../components/Detail';
import { Listado } from "../components/Listado";
import { Login } from "../components/Login";
import { Results } from '../components/Results';
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = () => {
  return (    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRouter redirectPath="/"/>}>
        <Route path="listado" element={<Listado />} /> 
        <Route path="detail" element={<Detail />} />
        <Route path="results" element={<Results />} /> 
        <Route path="contacto" element={<Contacto />} />
      </Route>    
    </Routes>  
  )
}
