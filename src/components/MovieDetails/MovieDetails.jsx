import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNjMTg3ZGUxMGEyZTIzODk0NzMxMTJkZjRlMjU0OSIsIm5iZiI6MTcyNjgxOTg1OS43ODQsInN1YiI6IjY2ZWQyZTEzMTkyM2ZlMDMyN2FkYzZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHSg6Rt8rPsBpSfLZMvGU-CydNnwNoDj8Nt6Zs-_9VE',
  },
};

export default function MovieDetails() {
  const Location = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const a = async () => {
      try {
        const temp = await fetch(
          `https://api.themoviedb.org/3/movie/${Location.movieId}?language=en-US`,
          options
        );
        const temp2 = await temp.json();
        setDetails(temp2);
      } catch (e) {
        console.log(e);
      }
    };
    a();
  }, [Location, setDetails]);
  return (
    <div>
      <Link to={location.state.form}>back</Link>
      {details && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
            alt="none"
          />
          <p>{details.original_title}</p>
          <p>{details.overview}</p>
          <p>{details.genres.map(arg => arg.name + ' ')}</p>
        </div>
      )}
      <p>
        <Link to={`/movies/${Location.movieId}/Cast`}>Cast</Link>
      </p>
      <p>
        <Link to={`/movies/${Location.movieId}/reviews`}>Reviews</Link>
      </p>
      <Outlet />
    </div>
  );
}
