import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

export const Listado = ()=> {

  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token === null) {
      navigate("/")
    }  
  });
  
  return (
    <div className="row">
      <div className="col-3">
        <div className="card" style={{width: "18rem"}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p class="card-text">Some of the card's content.</p>
            <Link href="/" className="btn btn-info">View Detail</Link>
          </div>
        </div>
      </div>    
    </div>  
  )
} 