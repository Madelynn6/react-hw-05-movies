import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-transform: uppercase;
`;

export const MoviesList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 300px;

  &:hover {
    scale: 1.05;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    color: #19a7ce;
  }
`;
