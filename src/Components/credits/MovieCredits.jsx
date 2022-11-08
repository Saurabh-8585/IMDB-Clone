import React, { useState } from 'react'
import { useEffect } from 'react'
import CastCard from './CastCard'
import '../../styles/MovieCredits.css'
import Reviews from '../reviews/Reviews'

const MovieCredits = ({ id }) => {
    const [casteDetails, setCasteDetails] = useState([])
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
            <h1 className='text-center'>Credits</h1>
            <main className="main-container">
                <div className="cast-container">
                    {
                        casteDetails.map(cast => (
                            <CastCard cast={cast} key={cast.order} />
                        ))
                    }
                </div>
            </main>

            <Reviews id={id} />
        </>
    )
}
export default MovieCredits

