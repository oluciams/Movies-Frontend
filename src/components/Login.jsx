import React from 'react';
import axios from 'axios';

export const Login = () => {

  const handleSubmit = (e)=> {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    console.log( regexEmail.test(email) );

    if(email === '' || password === ''){
      console.log('Input vacios');
      return;
    }
    
    if(email !== '' && !regexEmail.test(email)) {
      console.log('Correo invalido');
      return;
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react'){
      console.log('Credenciales inválidas');
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', {email, password})
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Correo Electronico:</span><br />
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña</span><br />
          <input type="password" name="password" />
        </label>
        <br />                                                          
        <button type="submit">Ingresar</button>
      </form>
    </>
  )
}
