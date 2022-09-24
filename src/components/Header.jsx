import {Link } from "react-router-dom"

export const Header = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   
    <Link className="navbar-brand">Alkemy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" ariaCurrent="page" to="/">Home</Link>
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
    // <header>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/listado">Listado</Link>
    //       </li>
    //       <li>
    //         <Link to="/contacto">Contacto</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>  
  )
} 