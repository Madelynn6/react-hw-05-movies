import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDataByQuery } from 'utils/fetchAPI';

import { Input, Btn, List, StyledLink } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';

  const onSubmit = e => {
    setSearchParams({ query: e.target.value });
    e.preventDefault();
    getMovies();
  };

  const onChange = e => {
    setSearchParams({ query: e.target.value });
  };

  const getMovies = async () => {
    const queryMovies = await getDataByQuery(movieQuery);
    setMovies(queryMovies.results);
  };

  return (
    <div>
      <h1>MOVIES</h1>
      <form onSubmit={onSubmit}>
        <Input type="text" placeholder="Search movie..." onChange={onChange} />
        <Btn type="submit">Search</Btn>
      </form>
      <List>
        {movies.map(movie => (
          <StyledLink to={`${movie.id}`} key={movie.id}>
            <li key={movie.id}>
              {movie.title} {movie.name} {movie.release_date.slice(0, 4)}
            </li>
          </StyledLink>
        ))}
      </List>
    </div>
  );
};

export default Movies;
