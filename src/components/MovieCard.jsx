import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';
const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return <div>No poster available</div>;
  }

  return (
    <div className='w-48 pr-6'>
      <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  );
}

export default MovieCard;
