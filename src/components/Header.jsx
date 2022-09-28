import {Link } from "react-router-dom"
import { Search } from "./Search"

export const Header = () => {
  return(
    <header>
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
                <Link className="nav-link" to="/listado">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorite">favorites</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>          
            </ul>
          </div>
          <Search/>
        </div>      
      </nav>
    </header> 
  )
} 