import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/SharedLayout';
import Home from './pages/Home';
import Movies from './pages/movies/Movies';
import MovieInfo from './pages/MovieInfo';
import Cast from './pages/cast/Cast';
import Reviews from './pages/reviews/Reviews';




export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

    </Routes>

  );
};
