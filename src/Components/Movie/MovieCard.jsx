import { Link } from 'react-router-dom'
import './MovieCard.css'


const MovieCard = ({ movie }) => {
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