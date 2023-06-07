import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import fetchApi from 'utilities/api-service';
import { apiRefs } from 'utilities/api-service';
import { IMAGE_URL } from 'utilities/api-service';
const imageSize = 'w500';

const MovieInfo = () => {
  const [movieObj, setMovieObj] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetchApi({
        param: apiRefs.MOVIE_DETAILS,
        id: movieId,
      });
      setMovieObj(response);
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
    <div>
      <div>
        <img
          src={`${IMAGE_URL}/${imageSize}/${poster_path || backdrop_path}`}
          alt={title || name}
          height={400}
        />
      </div>
      <div className="movie-info">
        <h2>
          {title || name} {movieId} Page
        </h2>
        <p> Popularity: {popularity}</p>
        <p>Overview: {overview}</p>
        <p>Genres:</p>
        {genres && genres.map(({id,name}) => {
          return <li key={id}>{name}</li>
        })}
      </div>
    </div>
  );
};

export default MovieInfo;
