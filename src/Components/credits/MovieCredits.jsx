import React, { useState } from 'react'
import { useEffect } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel, { AutoplayDirection, AutoPlayStrategy } from 'react-alice-carousel';
import '../../styles/MovieCredits.css'
import Reviews from '../reviews/Reviews'

const MovieCredits = ({ id }) => {
    const [casteDetails, setCasteDetails] = useState([])

    const handleDragStart = (e) => {
        e.preventDefault();
    }

    const items = casteDetails.map(cast => (
        <div className="carouselItem">
            <img src={`https://image.tmdb.org/t/p/original${cast.profile_path ? cast.profile_path : ""}`}
                alt={cast?.name}
                className="carouselItem__img"
            />
            <b className="carouselItem__txt">{cast?.name}</b>
        </div>
    ))

    {/*<div className="card-box">
           {cast.profile_path &&
                <>
                    <div className="img-box">
                        <img src={`https://image.tmdb.org/t/p/original${cast.profile_path ? cast.profile_path : ""}`} className='cast-img'
                            alt={cast.name}
                            onDragStart={handleDragStart}
                        />
                    </div>
                    <div className="cast-names text-center">
                        <h4>Name:{cast.name}</h4>
                        <h4>Character:{cast.character}</h4>
                    </div>
                </>
            } 
         </div>*/}

    const responsive = {
        0: {
            items: 3
        },
        512: {
            items: 5
        },
        1024: {
            items: 7
        },
    }
    useEffect(() => {
        getCredits()
    }, [])
    function getCredits() {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
            .then(res => res.json())
            .then(data => setCasteDetails(data.cast))
    }


    return (
        <>
            {/* <main className="main-cast">
                <h1 style={{
                marginTop:"1rem"
            }}>Credits</h1> */}
            <div className="main">
                <AliceCarousel
                    disableButtonsControls
                    disableDotsControls
                    autoPlay={true}
                    autoPlayInterval={3000}
                    mouseTracking
                    responsive={responsive}
                    infinite
                    items={items}
                />
            </div>
            {/* </main> */}
            <Reviews id={id} />
        </>
    )
}
export default MovieCredits

