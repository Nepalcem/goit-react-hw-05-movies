import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/SharedLayout';
import Home from './pages/Home';
import { lazy } from 'react';

const MovieInfo = lazy(() => import('./pages/MovieInfo'));
const Movies = lazy(() => import('./pages/movies/Movies'));
const Cast = lazy(() => import('./pages/cast/Cast'));
const Reviews = lazy(() => import('./pages/reviews/Reviews'));


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
      <Route path='*' element={<Navigate to='/' replace />}  />
    </Routes>

  );
};
