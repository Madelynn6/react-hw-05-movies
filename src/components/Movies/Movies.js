import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDataByQuery } from 'utils/fetchAPI';

import { Input, Btn, List, StyledLink } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      const queryMovies = await getDataByQuery(movieQuery);
      setMovies(queryMovies.results);
    };

    getMovies();
  }, [movieQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
  };

  if (!movies) {
    return 'Loading...';
  }

  return (
    <div>
      <h1>MOVIES</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search movie..." name="search" />
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
