import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/MovieCard.css'


const MovieCard = ({ movie }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Link to={`/movie/ ${movie.id}`} style={{
      textDecoration: "none",
      color: "white"
    }
    }>
      <div className="cards">
        <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" className="cards-img" />
      </div>
    </Link>
  )
}

export default MovieCard