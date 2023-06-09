import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi, { apiRefs } from 'utilities/api-service';

function Cast() {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchApi({
        param: apiRefs.CREDITS,
        id: movieId,
      });
      setMovieCredits([...response.cast]);
    };
    getData();
  }, [movieId]);

  return <div>Cast</div>;
}

export default Cast;
