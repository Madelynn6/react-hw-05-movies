import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getData } from '../../utils/fetchAPI';
import { Title, MoviesList, MovieCard, StyledLink } from './Home.styled';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const loadedData = await getData();
      setMoviesList(loadedData.results);
    };
    loadData();
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <ul>
        <MoviesList>
          {moviesList.map(movie => (
            <StyledLink to={`movies/${movie.id}`} key={movie.id}>
              <MovieCard>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                  width="300px"
                />
                {movie.title} {movie.name}
              </MovieCard>
            </StyledLink>
          ))}
        </MoviesList>
      </ul>
    </div>
  );
};

export default Home;
