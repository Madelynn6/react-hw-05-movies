import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getDataById } from '../../utils/fetchAPI';
import {
  BackLink,
  ContainerMovie,
  ContainerInfo,
  Genres,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (id) {
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    try {
      const loadedData = await getDataById(id);
      setMovie(loadedData);
      console.log(movie);
    } catch (error) {
      console.log(error);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const {
    poster_path,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
  } = movie;
  const date = release_date.slice(0, 4);

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <ContainerMovie>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          width="300px"
        />
        <div>
          <h2>
            {original_title} {date}
          </h2>
          <p>User score: {`${vote_average * 10}%`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          {genres.map(el => (
            <Genres key={el.id}>{el.name}</Genres>
          ))}
        </div>
      </ContainerMovie>
      <ContainerInfo>
        <h3>Additional information</h3>

        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </ContainerInfo>
    </>
  );
};

export default MovieDetails;
