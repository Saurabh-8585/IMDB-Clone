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
