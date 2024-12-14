import { Routes, BrowserRouter, Route } from 'react-router';
import { Home } from './Home/Home';

import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Link } from 'react-router';
import { Suspense, lazy } from 'react';

//import { MovieDetails } from './MovieDetails/MovieDetails';

const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./Movies/Movies'));

export const App = () => {
  return (
    <BrowserRouter>
      <p>
        <Link to={`/`}>Home</Link>
      </p>
      <p>
        <Link to={`/movies/?q=`}>Movies</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/Cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
