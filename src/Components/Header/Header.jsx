import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="nav">
      <NavLink to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" className="logo-img" /></NavLink>
      <NavLink to="movies/popular">Popular</NavLink>
      <NavLink to="movies/top_rated">Top Rated</NavLink>
      <NavLink to="movies/upcoming">Upcoming</NavLink>
    </nav >
  )
}

export default Header