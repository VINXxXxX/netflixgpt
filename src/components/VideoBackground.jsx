import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=" + trailerVideo?.key}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
