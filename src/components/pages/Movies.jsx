import React from 'react';
import { Link } from 'react-router-dom';

function Movies() {
  return (
    <div>
      Movies
      <Link to="/movies/movieinfo">Info</Link>
    </div>
  );
}

export default Movies;
