import React from 'react'
import { useState } from 'react'

const ReviewsCard = ({ review }) => {
  const [isReadMode, SetisReadMode] = useState(true)
  return (
    <div className='review-card'>
      <span className='author'>{review.author}</span> <span className='review-date'>{(review.created_at).substring(0, 10)}</span>
      <p className='author-content'>{isReadMode ? review.content.slice(0, 200) : review.content}
        {
          review.content.length > 150 &&
          <span style={{
            color: "blue",
            cursor: "pointer"
          }}
            onClick={() => SetisReadMode(!isReadMode)}>
            {isReadMode ? "..read more" : "show less"}
          </span>
        }
      </p>
    </div>
  )
}

export default ReviewsCard

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