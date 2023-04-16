import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from '../../utils/fetchAPI';
import { CastList, Name, Role } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    try {
      const loadedData = await getCreditsById(id);
      setCredits(loadedData);
    } catch (error) {
      console.log(error);
    }
  };

  if (!credits) {
    return <div>Loading...</div>;
  }

  return (
    <CastList>
      {credits.cast.map(el => (
        <li key={el.id}>
          <img
            src={
              el['profile_path']
                ? `https://image.tmdb.org/t/p/w500${el['profile_path']}`
                : 'https://placehold.co/250x375'
            }
            alt={el.name}
            width="250px"
          />
          <Name>{el.name}</Name>
          <Role>{`Character: ${el.character}`}</Role>
        </li>
      ))}
    </CastList>
  );
};

export default Cast;
