import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();
  
  const handleSubmit = (e)=> {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;


    // eslint-disable-next-line no-useless-escape
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    console.log( regexEmail.test(email) );

    if(email === '' || password === ''){
      Swal.fire('Los espacios pueden estar vacios', '', 'warning');
      return;
    }
    
    if(email !== '' && !regexEmail.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Alert', 
        html: '<p>No es un <b>correo</b> valido</p>',
        timer: '2000',
        position: 'top-right'
        //se puede concatenar variables, poner images
      });
      return;
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react'){
      Swal.fire('Credenciales Invalidas', '', 'warning');
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', {email, password})
      .then(res => {
        Swal.fire('Login exitoso', '', 'success');
        const tokenRecibido = res.data.token;
        localStorage.setItem('token', tokenRecibido);
        navigate("/listado") 
      })
  }

  return (  
    <section className="d-flex align-items-center justify-content-center">
      <div>  
        <h2 className="my-3">Formulario de Login</h2>  
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              <span>Correo Electronico:</span><br />
              <input className="form-control" type="text" name="email" />
            </label>
          </div>        
          <div  className="mb-3">
            <label>
              <span>Contraseña</span><br />
              <input className="form-control" type="password" name="password" />
            </label>                                                                
          </div>
          <button className="btn btn-success" type="submit">Ingresar</button>
        </form>
      </div>
    </section> 
  )
}
