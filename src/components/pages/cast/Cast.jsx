import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchApi, { apiRefs, imageSize, IMAGE_URL } from 'utilities/api-service';
import { ActorBlock, ActorList } from './Cast.styled';
import { toast } from 'react-toastify';

function Cast() {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
      const response = await fetchApi({
        param: apiRefs.CREDITS,
        id: movieId,
      });
      setMovieCredits([...response.cast]);
    } catch (error) {
      toast.error(error.message);
    }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <h5>Cast</h5>
      <ActorList>
        {movieCredits.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <ActorBlock>
                <img
                  src={`${IMAGE_URL}/${imageSize}/${profile_path}`}
                  alt={name}
                  width={160}
                />
                <div className='actor-inner'>
                <span className="actor-name">Actor:</span>
                <p>{name}</p>
                <span className="actor-character">Character: </span>
                <p>{character}</p>
                </div>
              </ActorBlock>
            </li>
          );
        })}
      </ActorList>
    </div>
  );
}

export default Cast;
