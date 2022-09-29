import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({id, poster_path, title, overview, addOrRevomeFromFavs}) => {
  return (
    <div className="col-10 col-md-6 col-lg-3 ">
      <div className="card h-100 my-4" style={{width: "18rem"}}>
        {poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top h-100 w-100" alt="movie"/> : <img className="h-100 w-100" alt="No movie"/>}
        {/* <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="movie"/> */}
        <button onClick={addOrRevomeFromFavs} data-movie-id={id} className="favourite-btn">🖤</button>
        <div className="card-body">
          <h5 className="card-title">{title.substring(0, 20)}</h5>
          <p className="card-text">{overview.substring(0, 50)}....</p>
          <Link to={`/detail?movieID=${id}`} className="btn btn-info">View Detail</Link>
        </div>
      </div>
    </div> 
  )
}
