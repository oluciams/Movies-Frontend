import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const Listado = ()=> {

  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token === null) {
      navigate("/")
    }  
  });
  
  return (
    <h2>Listado</h2>
  )
} 