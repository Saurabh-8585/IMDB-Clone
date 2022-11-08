import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReviewsCard from './ReviewsCard';
import '../../styles/Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  const { id } = useParams();


  useEffect(() => {
    getCredits()
  }, [])
  
  function getCredits() {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
      .then(res => res.json())
      .then(data => setReviews(data.results))
  }
  

 
  return (
    <>
      <h1 className='text-center'>Reviews</h1>
      {
        reviews.length <= 0 ?

          <h1 className='text-center'>No One Reviewed yet</h1>
          :
          <div className="all-reviews">

            {
              reviews.map(review => (
                <ReviewsCard review={review} />
              ))
            }
          </div>

      }
    </>
  )
}

export default Reviews
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
// author
// :
// "a7a8524"
// author_details
// :
// { name: '', username: 'a7a8524', avatar_path: '/https://www.gravatar.com/avatar/6e7edad7bbe0c599dfce11e289c2c82e.jpg', rating: null }
// content
// :
// "Pretty good ngl. Something new i enjoyed it"
// created_at
// :
// "2022-05-05T20:05:40.542Z"
// id
// :
// "62742e148e2e0000a97e3876"
// updated_at
// :
// "2022-06-15T19:19:20.718Z"
// url
// : 