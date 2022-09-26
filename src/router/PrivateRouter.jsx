import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRouter = ({ redirectPath }) => {

  let token = sessionStorage.getItem("token");
  
  if (!token) {
    return <Navigate to={ redirectPath }/>
  }

  return(

    <Outlet/>
    
  )

}
