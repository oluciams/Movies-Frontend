import React from 'react'
import { Card } from './Card'

export const Favorite = ({moviesInFavs, addOrRevomeFromFavs}) => {
  
  return (
    <div className="row g-3">
      <h2>Tus Favoritos</h2>
      { moviesInFavs.map(({title, poster_path, overview, id}, idx)=>(
          <Card
            key={idx}
            id={id}
            poster_path={poster_path}
            title={title}
            overview={overview}
            addOrRevomeFromFavs={addOrRevomeFromFavs}
          />  
        ))
      }
    </div>
  )
}
