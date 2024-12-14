import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNjMTg3ZGUxMGEyZTIzODk0NzMxMTJkZjRlMjU0OSIsIm5iZiI6MTcyNjgxOTg1OS43ODQsInN1YiI6IjY2ZWQyZTEzMTkyM2ZlMDMyN2FkYzZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHSg6Rt8rPsBpSfLZMvGU-CydNnwNoDj8Nt6Zs-_9VE',
  },
};

export const Reviews = () => {
  const [details, setDetails] = useState(null);
  const Location = useParams();
  useEffect(() => {
    const a = async () => {
      try {
        const temp = await fetch(
          `https://api.themoviedb.org/3/movie/${Location.movieId}/reviews?language=en-US&page=1`,
          options
        );
        const temp2 = await temp.json();
        setDetails(temp2.results);
      } catch (e) {
        console.log(e);
      }
    };
    a();
  }, [setDetails, Location]);

  return (
    <div>
      {details &&
        (details.length !== 0
          ? details.map(e => {
              return (
                <div key={e.created_at}>
                  <p>{e.author}</p>
                  <p>{e.content}</p>
                </div>
              );
            })
          : 'none')}
    </div>
  );
};
