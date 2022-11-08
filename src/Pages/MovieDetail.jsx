import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieCredits from '../Components/credits/MovieCredits';
import ShowTrailer from '../Components/Show Trailer/ShowTrailer';
import '../styles/MovieDetail.css'

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData()
  })
  function getData() {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieDetail(data));

  }
  return (
    <>
      <div className="parent">
        <div className='movieDetail'>

          <div className="mainImg">

            <img src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.backdrop_path : ""}`} alt="main" className='mainImg-img' />

          </div>

          <div className='movieInfo'>

            <div className="small-poster">
              <img src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} alt="poster"
                className='posterImg' />
            </div>

            <div className="all-info">
              <div className="title-star">
                <h1 className='title sh' >{movieDetail ? movieDetail.original_title : ""}</h1>


                <h1 className='vote'>{movieDetail ? movieDetail.vote_average : ""}  <i style={{
                  color: "gold"
                }} className="fas fa-star" />{" "} </h1>

              </div>
              <div className="detail-overview">


                <h1 > Release Date :{movieDetail ? movieDetail.release_date : ""}</h1>

                <h1>  {movieDetail ? movieDetail.overview : ""}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShowTrailer id={id} />
      <MovieCredits id={id} />
    </>
  )
}

export default MovieDetail