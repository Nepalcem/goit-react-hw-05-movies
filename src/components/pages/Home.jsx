import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchApi from 'utilities/api-service';

function Home() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchApi({ page: 1 });
      setMovies([...response.results]);
    };
    getData();
  }, []);

  return (
    <div>
      <h1> Latest trending movies</h1>
      <ul>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{from: location}}>{title || name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
