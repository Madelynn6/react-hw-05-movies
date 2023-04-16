import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../utils/fetchAPI';
import { Container, Title } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const loadedData = await getReviewsById(id);
      setReviews(loadedData.results);
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        {reviews.length === 0
          ? `We are sorry, we don't have any reviews for this movie.`
          : reviews.map(el => (
              <li key={el.id}>
                <Title>Author: {el.author}</Title>
                <p>{el.content}</p>
              </li>
            ))}
      </Container>
    </>
  );
};

export default Reviews;
