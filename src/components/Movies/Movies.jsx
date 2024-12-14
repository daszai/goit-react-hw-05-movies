import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNjMTg3ZGUxMGEyZTIzODk0NzMxMTJkZjRlMjU0OSIsIm5iZiI6MTcyNjgxOTg1OS43ODQsInN1YiI6IjY2ZWQyZTEzMTkyM2ZlMDMyN2FkYzZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHSg6Rt8rPsBpSfLZMvGU-CydNnwNoDj8Nt6Zs-_9VE',
  },
};

export default function Movies() {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const a = async () => {
      try {
        const temp = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchParams.get(
            'q'
          )}&include_adult=false&language=en-US&page=1`,
          options
        );
        const temp2 = await temp.json();
        setSearch(temp2.results);
      } catch (e) {
        console.log(e);
      }
    };
    a();
  }, [searchParams]);

  const click = evt => {
    evt.preventDefault();
    setSearchParams({ q: evt.target.parentElement[0].value });
  };

  return (
    <div>
      <form>
        <input name="a" type="input" />
        <button type="submit" onClick={click}>
          Search
        </button>
      </form>
      {search &&
        search.map(arg => {
          return (
            <p key={arg.id}>
              <Link
                to={`/movies/${arg.id}`}
                state={{ form: `/movies/?q=${searchParams.get('q')}` }}
              >
                {arg.title}
              </Link>
            </p>
          );
        })}
    </div>
  );
}
