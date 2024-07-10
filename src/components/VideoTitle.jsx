import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute inset-0 flex flex-col justify-center items-start pt-[10%] px-24 text-white bg-gradient-to-tr from-black bg-opacity-50'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black mx-4 p-4 px-12 text-xl rounded-lg hover:bg-opacity-80'>▶ Play</button>
        <button className='bg-gray-600 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-100'>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
