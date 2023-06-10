import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies }) {
    const location = useLocation();

  return (
    <>
      <h1> Search Results</h1>
      <ul>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MovieList;
