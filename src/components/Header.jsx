import {Link } from "react-router-dom"

export const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">   
        <span className="navbar-brand">Movies</span>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listado">Listado</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
   
  )
} 