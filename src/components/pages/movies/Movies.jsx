import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { ProgressBar } from 'react-loader-spinner';
import fetchApi, { apiRefs } from 'utilities/api-service';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('search');
    setInput(query || '');
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.input.value;
    setInput(query);
    setSearchParams({search: query});
  };

  useEffect(() => {
    const getData = async () => {
      if (!input) {
        return;
      }
      setLoading(true);
      setMovies([]);
      try {
        const response = await fetchApi({
          param: apiRefs.SEARCH,
          query: input,
        });

        if (response.results.length === 0) {
          setLoading(false);
          return toast.info('Sorry no images were found per your request..');
        }
        setMovies([...response.results]);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [input]);

  return (
    <div>
      <h2>Movies</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="input"
        />
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
      </form>
      {loading && (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{
            display: 'block',
            margin: '0 auto',
          }}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#3f51b5"
        />
      )}
      {movies.length > 0 && <MovieList movies={movies}></MovieList>}
    </div>
  );
}

export default Movies;
