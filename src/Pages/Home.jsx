import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import MovieList from '../Components/MovieList';
import AliceCarousel from 'react-alice-carousel';

const Home = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
      .then(res => res.json())
      .then(data => setPopular(data.results))
  }

  const items = popular.map(movie => (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
      <div className="posterImage">
        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="img" />
      </div>
      <div className="main-poster-text">
        <div className="posterImage__overlay">
          <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
          <div className="posterImage__runtime">
            {movie ? movie.release_date : ""}
            <span className="posterImage__rating">
              {movie ? movie.vote_average : ""}
              <i className="fas fa-star" />{" "}
            </span>
          </div>
          <div className="posterImage__description">{movie ? movie.overview : ""}</div>
        </div>
      </div>
    </Link>
  ))


  return (
    <>
      <AliceCarousel
        disableButtonsControls
        disableDotsControls
        autoPlay={true}
        autoPlayInterval={3000}
        mouseTracking
        infinite
        autoHeight
        autoWidth
        items={items}
      />
      <MovieList />
    </>
  )

}

export default Home


// Api https://api.themoviedb.org/3/movie/550?api_key=dfac79bf601a1c8766457c868e28203e&query=Jack+Reacher