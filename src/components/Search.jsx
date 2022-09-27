import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Search = () => {

  const navigate = useNavigate()  

 const handleSubmit = (e)=> {
  e.preventDefault()
  const keyword = e.currentTarget.keyword.value.trim();

  if(keyword.length === 0 ){
    Swal.fire({
      icon: 'info',
      title: 'Escribe una palabra para buscar' 
    })
  } else if (keyword.length < 4) {
    Swal.fire({
      icon: 'info',
      title: 'La palabra debe tener mas de 4 caracteres' 
    })
  } else {
    e.currentTarget.keyword.value = ''
    navigate(`/results?keyword=${keyword}`);    
  }
 } 

  return (  
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form onSubmit={handleSubmit} className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" name="keyword"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav> 
  )
}
