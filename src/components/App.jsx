import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/SharedLayout';
import fetchApi from 'utilities/api-service';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {console.log(fetchApi({ page: 1 }))};
        {/* <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path="movies/:movieId" element={<MovieDetails />} />
              <Route path="movies/:movieId/cast" element={<Cast />} />
              <Route path="movies/:movieId/reviews" element={<Reviews />} />
          </Route> */}
      </Route>
    </Routes>
  );
};
