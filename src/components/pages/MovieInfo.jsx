import React, { useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import fetchApi, {imageSize,apiRefs,IMAGE_URL } from 'utilities/api-service';
import { MovieBlock, AdditionalMovieinfo } from './MovieInfo.styled';
import { toast } from 'react-toastify';



const MovieInfo = () => {
  const [movieObj, setMovieObj] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
      const response = await fetchApi({
        param: apiRefs.MOVIE_DETAILS,
        id: movieId,
      });
      setMovieObj(response);
    } catch (error) {
      toast.error(error.message);
    }
    };
    getData();
  }, [movieId]);

  const {
    backdrop_path,
    poster_path,
    title,
    name,
    popularity,
    overview,
    genres,
  } = movieObj;

  return (
    <>
      <MovieBlock>
        <div>
          <img
            src={`${IMAGE_URL}/${imageSize}/${poster_path || backdrop_path}`}
            alt={title || name}
            height={400}
            width={267}
          />
        </div>
        <div className="movie-info">
          <h2>
            {title || name} 
          </h2>
          <p> Popularity: {popularity}</p>
          <p>Overview: {overview}</p>
          <p>Genres:</p>
          {genres &&
            genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
        </div>
      </MovieBlock>
      <AdditionalMovieinfo>
        <h4>Additional Information</h4>
        <p>
          <Link to="cast">Cast</Link>
        </p>
        <p>
          <Link to="reviews">Reviews</Link>
        </p>
      </AdditionalMovieinfo>
      <Outlet />
    </>
  );
};

export default MovieInfo;
