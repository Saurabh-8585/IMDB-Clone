import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieCredits from '../Components/credits/MovieCredits';
import ShowTrailer from '../Components/Show Trailer/ShowTrailer';
import './MovieDetail.css'

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData()
    window.scroll(0,0)
  }, [])
  function getData() {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieDetail(data));

  }
  return (
    <>
      <main className="main">
      <div className="main-hero">
        <img src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.backdrop_path : ""}`} alt={movieDetail.title} className='hero-img'/>
      </div>
      <div className="main-parent">
        <h1 className="main-title">{movieDetail ? movieDetail.title : ""}</h1>
        <div className="child">
          <div className="pic-img">
            <img src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} alt={movieDetail.original_title} className='movie-pic' />
          </div>
          <div className="detail-p">
            <h2>{movieDetail ? movieDetail.vote_average : ""}  <i style={{ color: "gold" }} className="fas fa-star" />{" "} </h2>
            <h4>{movieDetail.release_date}</h4>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
        </div>
      </main>
      <ShowTrailer id={id} />
      <MovieCredits id={id} />
    </>
  )
}

export default MovieDetail