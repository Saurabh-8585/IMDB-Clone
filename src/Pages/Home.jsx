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
      // fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
      .then(res => res.json())
      .then(data => setPopular(data.results))
  }

  const items = popular.map(movie => (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
      <div className="main-slider-parent">
        {movie &&
          <>
            <div className="slider-image">
              movie &&
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className='slider-main-img' />
            </div>
            <div className="slider-image-details">
              <h1 className='slider-title'>{movie.original_title}</h1>
            <h2 className='slider-vote'>{movie.vote_average} <i className="fas fa-star" />{" "}</h2>
            </div>
          </>
        }
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