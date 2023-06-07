import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/SharedLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
// import Cast from './pages/Cast';
// import Reviews from './pages/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieInfo />} />
        {/* <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}
      </Route>
    </Routes>
  );
};
