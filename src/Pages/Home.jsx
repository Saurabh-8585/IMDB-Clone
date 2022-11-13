import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import Search from '../Components/Search/Search'

const Home = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    window.scroll(0, 0)
    fetchData()
  }, [])

  function fetchData() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
      .then(res => res.json())
      .then(data => setPopular(data.results))
  }

  const items = popular.map(movie => (
    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
      <div className="main-slider-parent">
        {
          <>
            <div className="slider-image">
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className='slider-main-img' />
            </div>
            <div className="slider-image-details">
              <h1 className='slider-title'>{movie.original_title || movie.name}</h1>
              <br />
              <h2 className='slider-vote'>{movie.vote_average} <i className="fas fa-star" />{" "}</h2>
              <p>{movie.overview}</p>
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
      <Search />
    </>
  )

}

export default Home
