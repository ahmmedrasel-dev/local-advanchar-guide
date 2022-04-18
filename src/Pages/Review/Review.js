import React from 'react';
import './Review.css'
import ReactStars from "react-rating-stars-component";

const Review = ({ review }) => {
  const { name, photo, comments, ratting } = review;

  return (

    <div className='reviewItem'>
      <img style={{ 'width': '100px', 'height': '100px', 'borderRadius': '50%' }} src={photo} alt="" />
      <h5 className='mt-3'>{name}</h5>
      <ReactStars
        count={5}
        value={ratting}
        size={24}
        edit={false}
        activeColor="#ffd700"
      ></ReactStars> ({ratting})

      <p>{comments}</p>
    </div>
  );
};

export default Review;