// MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'; // Import custom CSS for scrollbar hiding

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }
  return (
    <div className='px-6 bg-black'>
      <h1 className='text-4xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll hide-scroll-bar'>
        <div className='flex'>
          {movies.map((movie, index) => (
            <MovieCard key={index} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
