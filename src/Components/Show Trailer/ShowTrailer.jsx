import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import '../../styles/ShowTrailer.css'

const ShowTrailer = ({ id }) => {
    const [video, setVideo] = useState()

    useEffect(() => {
        getVideo()
    }, [])
    function getVideo() {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
            .then(res => res.json())
            .then(data => setVideo(data.results[0]?.key))
    }
    const opts = {
        height: '400',
        width: '100%',
    }

    return (

        <div>
            <h1 className='text-center'>Related Video</h1>
            <div className="yt-video">
                <YouTube videoId={video} opts={opts} />
            </div>

        </div >
    )
}

export default ShowTrailer