import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom';
import MovieList from '../Components/MovieList';

const Home = () => {

  const [popular, setPopular] = useState([]);
  // const [type, settype] = useState("popular")

  useEffect(() => {
   fetchData()
  }, [])

  function fetchData() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
      .then(res => res.json())
      .then(data => setPopular(data.results))
  }
  console.log(popular);

  // function fetchData(type) {
  //   let res =axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
  //   setPopular(res.data);
  //   console.log(popular);

  // }

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          swipeable={true}
          showStatus={false}
          showIndicators={false}
        >
          {
            popular.map(movie => (
              <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="img"/>
                </div>
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
              </Link>
            ))
          }
        </Carousel>
      </div> 
      
      <MovieList/>
    </>
  )

}

export default Home


// Api https://api.themoviedb.org/3/movie/550?api_key=dfac79bf601a1c8766457c868e28203e&query=Jack+Reacher