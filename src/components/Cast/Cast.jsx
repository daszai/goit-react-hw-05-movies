import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNjMTg3ZGUxMGEyZTIzODk0NzMxMTJkZjRlMjU0OSIsIm5iZiI6MTcyNjgxOTg1OS43ODQsInN1YiI6IjY2ZWQyZTEzMTkyM2ZlMDMyN2FkYzZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHSg6Rt8rPsBpSfLZMvGU-CydNnwNoDj8Nt6Zs-_9VE',
  },
};

export const Cast = () => {
  const [details, setDetails] = useState(null);
  const Location = useParams();
  useEffect(() => {
    const a = async () => {
      try {
        const temp = await fetch(
          `https://api.themoviedb.org/3/movie/${Location.movieId}/credits?language=en-US`,
          options
        );
        const temp2 = await temp.json();
        setDetails(temp2.cast);
      } catch (e) {
        console.log(e);
      }
    };
    a();
  }, [setDetails, Location]);
  return (
    <div>
      {details &&
        details.map(e => {
          return (
            <div key={e.id}>
              {e.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/original/${e.profile_path}`}
                  alt="none"
                />
              )}
              <p>{e.name}</p>
            </div>
          );
        })}
    </div>
  );
};
