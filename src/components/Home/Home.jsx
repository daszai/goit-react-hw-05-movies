import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNjMTg3ZGUxMGEyZTIzODk0NzMxMTJkZjRlMjU0OSIsIm5iZiI6MTcyNjgxOTg1OS43ODQsInN1YiI6IjY2ZWQyZTEzMTkyM2ZlMDMyN2FkYzZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHSg6Rt8rPsBpSfLZMvGU-CydNnwNoDj8Nt6Zs-_9VE',
  },
};
export const Home = () => {
  useEffect(() => {
    const a = async () => {
      try {
        const temp = await fetch(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US',
          options
        );
        const temp2 = await temp.json();
        setTrending(temp2.results);
      } catch (e) {
        console.log(e);
      }
    };
    a();
  }, []);

  const [trending, setTrending] = useState(null);

  return (
    <div>
      <h1>Trending today</h1>
      {trending &&
        trending.map(arg => {
          return (
            <p key={arg.id}>
              <Link to={`/movies/${arg.id}`} state={{ form: '/' }}>
                {arg.title}
              </Link>
            </p>
          );
        })}
    </div>
  );
};
