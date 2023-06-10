import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetchApi, { apiRefs } from 'utilities/api-service';

function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await fetchApi({
          param: apiRefs.REVIEWS,
          id: movieId,
        });
        setMovieReviews([...response.results]);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <h5>Reviews:</h5>
      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <ul className="reviewsList">
          {movieReviews.length > 0 ? (
            movieReviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  Author: {author}
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <p>No Reviews found for this movie</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
