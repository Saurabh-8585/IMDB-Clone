import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
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

  return <>
    {
      isLoading ?
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor='#444'>
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/ ${movie.id}`} style={{
          textDecoration: "none",
          color:"white"
        }
        }>
          <div className="cards">
            <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" className="cards-img" />
            </div>
        </Link>
    }
  </>
}

export default MovieCard