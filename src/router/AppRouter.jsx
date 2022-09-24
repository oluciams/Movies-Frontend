import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Contacto } from "../components/Contacto";
import { Listado } from "../components/Listado";
import { Login } from "../components/Login";
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = () => {
  return (    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRouter redirectPath="/"/>}>
        <Route path="listado" element={<Listado />} /> 
        <Route path="contacto" element={<Contacto />} />
      </Route>    
    </Routes>  
  )
}
