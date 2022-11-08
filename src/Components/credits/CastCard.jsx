import React from 'react'
import "../../styles/CastCard.css"

const CastCard = ({ cast }) => {
    return (

        <div className="card-box">
          
                {cast.profile_path &&
                    <>
                        <div className="img-box">
                            <img src={`https://image.tmdb.org/t/p/original${cast.profile_path ? cast.profile_path : ""}`} className='cast-img' alt="img" />
                        </div>
                        <div className="cast-names">
                            <h4>Name:{cast.name}</h4>
                            <h4>Character:{cast.character}</h4>
                        </div>
                    </>
                }
        
        </div>

    )
}

export default CastCard
